/**
 * Mermaid Server
 *
 * A local Node.js server to render Markdown files with Mermaid diagrams.
 * Supports multiple projects, live reload, and persistent configuration.
 */

const http = require('http');
const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Import modules
const config = require('./lib/config');
const { html, renderMarkdown, getH1Title } = require('./lib/renderer');
const {
  getMimeType,
  getMarkdownFiles,
  browseDirectory,
  isPathWithinProject,
  setupWatcher,
  addClient,
  removeClient,
  searchFiles,
} = require('./lib/utils');

const PORT = process.env.PORT || 4000;

const runGitCommand = (args, cwd) => {
  return spawnSync('git', args, {
    cwd,
    encoding: 'utf-8',
    maxBuffer: 1024 * 1024,
  });
};

const getGitRepoRoot = (cwd) => {
  const result = runGitCommand(['rev-parse', '--show-toplevel'], cwd);
  if (result.status !== 0) {
    return null;
  }
  return result.stdout.trim() || null;
};

const getGitFileSnapshot = (projectPath, fullPath) => {
  const repoRoot = getGitRepoRoot(projectPath);
  if (!repoRoot) {
    return {
      available: false,
      reason: 'This project is not inside a git repository.',
    };
  }

  const relativeToRepo = path.relative(repoRoot, fullPath);
  if (
    !relativeToRepo ||
    relativeToRepo.startsWith('..') ||
    path.isAbsolute(relativeToRepo)
  ) {
    return {
      available: false,
      reason: 'This file is outside the git repository root.',
    };
  }

  const relativeGitPath = relativeToRepo.split(path.sep).join('/');
  const statusResult = runGitCommand(
    ['status', '--porcelain', '--', relativeToRepo],
    repoRoot,
  );

  if (statusResult.error) {
    return { available: false, reason: statusResult.error.message };
  }
  if (statusResult.status !== 0) {
    return {
      available: false,
      reason: (statusResult.stderr || 'Unable to inspect git state.').trim(),
    };
  }

  const statusText = statusResult.stdout.trim();
  const currentContent = fs.readFileSync(fullPath, 'utf-8');
  if (!statusText) {
    return {
      available: true,
      hasChanges: false,
      baseContent: currentContent,
      currentContent,
      baseLabel: 'HEAD',
      repoRoot,
    };
  }

  if (statusText.startsWith('??')) {
    return {
      available: true,
      hasChanges: true,
      baseContent: '',
      currentContent,
      baseLabel: 'New file',
      repoRoot,
    };
  }

  const headResult = runGitCommand(
    ['show', `HEAD:${relativeGitPath}`],
    repoRoot,
  );
  if (headResult.error) {
    return { available: false, reason: headResult.error.message };
  }
  if (headResult.status !== 0) {
    return {
      available: false,
      reason: (
        headResult.stderr || 'Unable to read file contents from HEAD.'
      ).trim(),
    };
  }

  return {
    available: true,
    hasChanges: true,
    baseContent: headResult.stdout,
    currentContent,
    baseLabel: 'HEAD',
    repoRoot,
  };
};

// Initialize project from CLI argument if provided
config.addProjectFromCLI(process.argv[2]);

/**
 * Handle SSE reload endpoint
 */
const handleReloadEndpoint = (req, res, url) => {
  const projectId = url.searchParams.get('projectId');
  if (!projectId) return res.end();

  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    Connection: 'keep-alive',
    'Access-Control-Allow-Origin': '*',
  });
  res.write('data: connected\n\n');

  const heartbeat = setInterval(() => {
    if (res.writableEnded || res.finished) {
      clearInterval(heartbeat);
      return;
    }
    res.write(': ping\n\n');
  }, 15000);

  addClient(projectId, res);

  const project = config.findProject(projectId);
  if (project) setupWatcher(projectId, project.path);

  const cleanup = () => {
    removeClient(projectId, res);
    clearInterval(heartbeat);
  };

  req.on('close', cleanup);
  res.on('close', cleanup);
  res.on('error', cleanup);
};

/**
 * Handle API endpoints
 */
const handleApiRequest = (req, res, url, pathname) => {
  res.setHeader('Connection', 'close');
  res.setHeader('Content-Type', 'application/json');

  // Browse endpoint
  if (pathname === '/api/browse') {
    const targetPath = url.searchParams.get('path');
    try {
      const result = browseDirectory(targetPath);
      res.end(JSON.stringify(result));
    } catch (e) {
      res.statusCode = 400;
      res.end(JSON.stringify({ error: e.message }));
    }
    return;
  }

  // Search endpoint
  if (pathname === '/api/search') {
    const query = url.searchParams.get('q');
    const projectId = url.searchParams.get('projectId');

    if (!query || query.trim().length === 0) {
      res.end(JSON.stringify({ results: [] }));
      return;
    }

    const results = [];

    if (projectId) {
      // Search within specific project
      const project = config.findProject(projectId);
      if (project) {
        const projectResults = searchFiles(project.path, query);
        results.push(
          ...projectResults.map((r) => ({
            ...r,
            projectId: project.id,
            projectName: project.name,
          })),
        );
      }
    } else {
      // Search across all projects
      const projects = config.getProjects();
      for (const project of projects) {
        const projectResults = searchFiles(project.path, query, 5); // Limit per project
        results.push(
          ...projectResults.map((r) => ({
            ...r,
            projectId: project.id,
            projectName: project.name,
          })),
        );
        if (results.length >= 15) break;
      }
    }

    res.end(JSON.stringify({ results: results.slice(0, 15) }));
    return;
  }

  // File read/write API for editing markdown files
  if (pathname === '/api/file') {
    const projectId = url.searchParams.get('projectId');
    const filePath = url.searchParams.get('path');
    const project = config.findProject(projectId);

    if (!project) {
      res.statusCode = 404;
      res.end(JSON.stringify({ error: 'Project not found' }));
      return;
    }

    const fullPath = path.join(project.path, filePath);

    if (!isPathWithinProject(project.path, filePath)) {
      res.statusCode = 403;
      res.end(JSON.stringify({ error: 'Access denied' }));
      return;
    }

    if (!fullPath.endsWith('.md')) {
      res.statusCode = 400;
      res.end(JSON.stringify({ error: 'Only markdown files can be edited' }));
      return;
    }

    if (req.method === 'GET') {
      try {
        const content = fs.readFileSync(fullPath, 'utf-8');
        res.end(JSON.stringify({ content, path: filePath }));
      } catch (e) {
        res.statusCode = 404;
        res.end(JSON.stringify({ error: 'File not found' }));
      }
      return;
    }

    if (req.method === 'PUT') {
      let body = '';
      req.on('data', (chunk) => {
        body += chunk;
      });
      req.on('end', () => {
        try {
          const data = JSON.parse(body);
          if (typeof data.content !== 'string') {
            res.statusCode = 400;
            res.end(JSON.stringify({ error: 'Content is required' }));
            return;
          }
          fs.writeFileSync(fullPath, data.content, 'utf-8');
          res.end(JSON.stringify({ success: true, path: filePath }));
        } catch (e) {
          res.statusCode = 500;
          res.end(JSON.stringify({ error: e.message }));
        }
      });
      return;
    }
  }

  if (pathname === '/api/git-diff' && req.method === 'GET') {
    const projectId = url.searchParams.get('projectId');
    const filePath = url.searchParams.get('path');
    const project = config.findProject(projectId);

    if (!project) {
      res.statusCode = 404;
      res.end(JSON.stringify({ error: 'Project not found' }));
      return;
    }

    if (!filePath || !isPathWithinProject(project.path, filePath)) {
      res.statusCode = 403;
      res.end(JSON.stringify({ error: 'Access denied' }));
      return;
    }

    const fullPath = path.join(project.path, filePath);
    if (!fs.existsSync(fullPath) || fs.statSync(fullPath).isDirectory()) {
      res.statusCode = 404;
      res.end(JSON.stringify({ error: 'File not found' }));
      return;
    }

    const gitSnapshot = getGitFileSnapshot(project.path, fullPath);
    if (!gitSnapshot.available) {
      res.end(
        JSON.stringify({
          available: false,
          hasChanges: false,
          error: gitSnapshot.reason,
        }),
      );
      return;
    }

    res.end(
      JSON.stringify({
        available: true,
        hasChanges: gitSnapshot.hasChanges,
        baseContent: gitSnapshot.baseContent,
        currentContent: gitSnapshot.currentContent,
        baseLabel: gitSnapshot.baseLabel,
        repoRoot: gitSnapshot.repoRoot,
      }),
    );
    return;
  }

  // Other API endpoints (projects, settings)
  let body = '';
  req.on('data', (chunk) => {
    body += chunk;
  });
  req.on('end', () => {
    try {
      const data = body ? JSON.parse(body) : {};

      const favoriteMatch = pathname.match(
        /^\/api\/projects\/([^/]+)\/favorites(?:\/([^/]+))?$/,
      );

      if (favoriteMatch) {
        const projectId = favoriteMatch[1];
        const favoriteId = favoriteMatch[2];

        if (req.method === 'POST' && !favoriteId) {
          if (typeof data.path !== 'string' || typeof data.name !== 'string') {
            res.statusCode = 400;
            res.end(JSON.stringify({ error: 'Name and path are required' }));
            return;
          }
          const favorite = config.addFavorite(projectId, data);
          if (!favorite) {
            res.statusCode = 404;
            res.end(JSON.stringify({ error: 'Project not found' }));
            return;
          }
          res.end(JSON.stringify(favorite));
          return;
        }

        if (req.method === 'PATCH' && favoriteId) {
          const favorite = config.updateFavorite(projectId, favoriteId, data);
          if (!favorite) {
            res.statusCode = 404;
            res.end(JSON.stringify({ error: 'Favorite not found' }));
            return;
          }
          res.end(JSON.stringify(favorite));
          return;
        }

        if (req.method === 'DELETE' && favoriteId) {
          const deleted = config.deleteFavorite(projectId, favoriteId);
          if (!deleted) {
            res.statusCode = 404;
            res.end(JSON.stringify({ error: 'Favorite not found' }));
            return;
          }
          res.end(JSON.stringify({ success: true }));
          return;
        }

        res.statusCode = 400;
        res.end(JSON.stringify({ error: 'Invalid favorites request' }));
        return;
      }

      if (pathname === '/api/projects' && req.method === 'POST') {
        const newProject = config.addProject(data.name, data.path);
        res.end(JSON.stringify(newProject));
      } else if (pathname === '/api/settings' && req.method === 'PATCH') {
        const settings = config.updateSettings(data);
        res.end(JSON.stringify(settings));
      } else if (
        pathname.startsWith('/api/projects/') &&
        req.method === 'PATCH'
      ) {
        const id = pathname.split('/').pop();
        const project = config.updateProject(id, data);
        if (project) {
          res.end(JSON.stringify(project));
        } else {
          res.statusCode = 404;
          res.end();
        }
      } else if (
        pathname.startsWith('/api/projects/') &&
        req.method === 'DELETE'
      ) {
        const id = pathname.split('/').pop();
        config.deleteProject(id);
        res.end(JSON.stringify({ success: true }));
      } else {
        res.statusCode = 404;
        res.end();
      }
    } catch (e) {
      res.statusCode = 400;
      res.end(JSON.stringify({ error: e.message }));
    }
  });
};

/**
 * Handle project page requests
 */
const handleProjectRequest = (res, projectId, subPath, url) => {
  res.setHeader('Connection', 'close');

  const project = config.findProject(projectId);
  if (!project) return res.end(html('<h1>Project Not Found</h1>'));

  const fullPath = path.join(project.path, subPath);

  if (!isPathWithinProject(project.path, subPath)) {
    return res.end(html('<h1>Access Denied</h1>'));
  }

  if (!fs.existsSync(fullPath)) {
    return res.end(html('<h1>404 - Not Found</h1>', 'Not Found', projectId));
  }

  const stats = fs.statSync(fullPath);

  if (stats.isDirectory()) {
    const readmePath = path.join(fullPath, 'README.md');
    const showAll = url.searchParams.get('all') === 'true';

    if (fs.existsSync(readmePath) && !showAll) {
      const content = fs.readFileSync(readmePath, 'utf-8');
      const title = getH1Title(content) || 'README.md';
      const readmeFilePath =
        subPath === '/' ? 'README.md' : path.join(subPath, 'README.md');
      const nav = `<div class="back-link"><a href="javascript:history.back()">&larr; Back</a></div>`;
      res.end(
        html(
          renderMarkdown(content),
          title,
          projectId,
          nav,
          readmeFilePath,
          readmeFilePath,
          fs.statSync(readmePath).mtime,
        ),
      );
    } else {
      const files = getMarkdownFiles(
        fullPath,
        subPath === '/' ? '' : subPath,
        !showAll,
      );
      const list = files
        .sort()
        .map((f) => {
          const isFolder = f.endsWith('/');
          const name = isFolder
            ? f.slice(0, -1).split('/').pop()
            : path.basename(f);
          return `<li><a href="/p/${projectId}/${f}">${isFolder ? '📁' : '📄'} <span>${name}</span></a></li>`;
        })
        .join('');
      const nav = `<div class="back-link"><a href="javascript:history.back()">&larr; Back</a></div>`;
      res.end(
        html(
          `<h1>${path.basename(fullPath) || project.name}</h1><ul class="file-list">${list || '<li>No docs found</li>'}</ul>`,
          project.name,
          projectId,
          nav,
          null,
          subPath,
        ),
      );
    }
  } else if (fullPath.endsWith('.md')) {
    const content = fs.readFileSync(fullPath, 'utf-8');
    const title = getH1Title(content) || path.basename(fullPath);
    const nav = `<div class="back-link"><a href="javascript:history.back()">&larr; Back</a></div>`;
    res.end(
      html(
        renderMarkdown(content),
        title,
        projectId,
        nav,
        subPath,
        subPath,
        stats.mtime,
      ),
    );
  } else {
    // Serve static files
    res.setHeader('Content-Type', getMimeType(fullPath));
    fs.createReadStream(fullPath).pipe(res);
  }
};

/**
 * Main HTTP server
 */
const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);
  const pathname = decodeURIComponent(url.pathname);

  // SSE reload endpoint
  if (pathname === '/__reload') {
    handleReloadEndpoint(req, res, url);
    return;
  }

  // API endpoints
  if (pathname.startsWith('/api/')) {
    handleApiRequest(req, res, url, pathname);
    return;
  }

  // Dashboard
  if (pathname === '/') {
    res.setHeader('Connection', 'close');
    const projects = config.getProjects();
    const projectLinks = projects.length
      ? projects
          .map(
            (p) =>
              `<li><a href="/p/${p.id}/">📁 <span>${p.name}</span></a></li>`,
          )
          .join('')
      : '<li><a href="javascript:void(0)" onclick="showAddProject()">＋ <span>Add your first workspace</span></a></li>';
    const dashboardContent = `
      <h1>Intro</h1>
      <p>Mermaid-MD is a local Markdown docs viewer with Mermaid rendering, search, live reload, and inline editing.</p>
      <div class="intro-hero">
        <figure class="terminal-demo">
          <div class="terminal-demo-header">
            <span class="terminal-demo-dots"><span></span><span></span><span></span></span>
            <span>mermaid-md / local docs preview</span>
          </div>
          <pre><code>$ npm start
Mermaid Server running at http://localhost:4000

> open a workspace
> browse markdown docs
> render mermaid diagrams instantly
> edit files inline with live reload</code></pre>
        </figure>
      </div>
      <h2>Get started</h2>
      <p>Pick a workspace from the sidebar or create a new one, then open any Markdown file to read, search, and edit it in a docs-style layout.</p>
      <section class="workspace-list">
        <h2>Workspaces</h2>
        <ul class="file-list">${projectLinks}</ul>
      </section>
    `;
    res.end(html(dashboardContent, 'Mermaid Server', null, ''));
    return;
  }

  if (pathname === '/favicon.svg') {
    res.setHeader('Connection', 'close');
    res.setHeader('Content-Type', 'image/svg+xml');
    fs.createReadStream(path.join(__dirname, 'favicon.svg')).pipe(res);
    return;
  }

  // Project pages
  const projectMatch = pathname.match(/^\/p\/([^/]+)(\/.*)?/);
  if (projectMatch) {
    const projectId = projectMatch[1];
    const subPath = decodeURIComponent(projectMatch[2] || '/');
    handleProjectRequest(res, projectId, subPath, url);
    return;
  }

  // 404
  res.setHeader('Connection', 'close');
  res.statusCode = 404;
  res.end(html('<h1>404 - Not Found</h1>'));
});

server.listen(PORT, () => {
  console.log(`\nMermaid Server running at http://localhost:${PORT}`);
  console.log(`Config: ${config.CONFIG_PATH}\n`);
});
