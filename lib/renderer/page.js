/**
 * Full HTML page template generation.
 */

const { getProjects, getSettings } = require('../config');
const { getDocsTree, flattenDocsTree } = require('../utils');
const styles = require('./styles');
const { escapeHtml } = require('./markdown');
const { normalizeDocPath, getDocHref, renderDocsTree, renderDocPagination } = require('./navigation');

/**
 * Generate the full HTML page template
 */
const html = (
  content,
  title = 'Mermaid Server',
  projectId = null,
  nav = '',
  filePath = null,
  favoritePath = null,
  lastEditedAt = null,
) => {
  const projects = getProjects();
  const settings = getSettings();
  const themePresets = ['notebook', 'corporate'];
  const initialThemePreset = themePresets.includes(settings.themePreset)
    ? settings.themePreset
    : 'notebook';
  const initialThemeMode = ['system', 'light', 'dark'].includes(settings.themeMode)
    ? settings.themeMode
    : 'system';
  const activeProject = projects.find((project) => project.id === projectId);
  const projectFavorites = activeProject?.favorites || [];
  const currentDocPath = normalizeDocPath(favoritePath || filePath || '');
  const docsTree = activeProject ? getDocsTree(activeProject.path) : [];
  const flatDocs = flattenDocsTree(docsTree);
  const favoritePaths = new Set(projectFavorites.map((favorite) => normalizeDocPath(favorite.path || '')));
  const docsTreeHtml = renderDocsTree(projectId, docsTree, currentDocPath, favoritePaths);
  const docPaginationHtml = renderDocPagination(lastEditedAt);
  const projectOptionsHtml = projects
    .map((project) => {
      return `<option value="${project.id}" ${project.id === projectId ? 'selected' : ''}>${escapeHtml(
        project.name,
      )}</option>`;
    })
    .join('');
  const projectControlsHtml = `
      <div class="sidebar-section sidebar-workspace-section">
        <div class="sidebar-brand-block">
          <div class="sidebar-panel-label">Workspace</div>
        </div>
        <div class="project-dropdown-row">
          <div class="project-dropdown-shell">
            <select id="project-switcher" class="project-dropdown" aria-label="Select project">
              <option value="">Choose project</option>
              ${projectOptionsHtml}
            </select>
          </div>
          <div class="project-dropdown-actions">
            ${activeProject ? '<button class="project-manage-button project-manage-button-primary" onclick="showProjectModal()" title="Update project">Update</button>' : ''}
            <button class="project-manage-button project-manage-button-secondary" onclick="showAddProject()" title="Add project">Add</button>
            <button class="project-manage-button project-manage-button-danger" onclick="deleteCurrentProject()" title="Delete project">Remove</button>
          </div>
        </div>
      </div>
    `;

  const favoritesHtml = projectFavorites.length
    ? `
      <div class="sidebar-subsection sidebar-favorites-section">
        <div class="sidebar-panel-label">Pinned</div>
        <div class="favorite-list favorite-list-compact">
          ${projectFavorites
            .map((favorite) => {
              const safeName = JSON.stringify(favorite.name);
              return `
                <div class="favorite-item" data-id="${favorite.id}">
                  <a href="${getDocHref(projectId, favorite.path)}" class="favorite-link" title="${favorite.path || '/'}">
                    <span class="favorite-icon">★</span>
                    <span class="favorite-name">${escapeHtml(favorite.name)}</span>
                  </a>
                  <div class="favorite-actions">
                    <button onclick='renameFavorite("${projectId}", "${favorite.id}", ${safeName})' title="Rename">✎</button>
                    <button onclick='deleteFavorite("${projectId}", "${favorite.id}")' title="Remove">×</button>
                  </div>
                </div>
              `;
            })
            .join('')}
        </div>
      </div>
    `
    : '';

  const workspaceHtml = `
      <div class="sidebar-workspace-shell">
        ${projectControlsHtml}
        ${favoritesHtml}
      </div>
    `;

  const mobileUtilityControlsHtml = `
      <div class="mobile-drawer-panel mobile-drawer-actions-panel">
        <div class="sidebar-panel-label">Document</div>
        <div class="mobile-drawer-actions-grid">
          <button type="button" class="mobile-drawer-action" onclick="openSearch(); closeMobileNav();">Search</button>
          <button type="button" class="mobile-drawer-action" onclick="toggleContentOnlyMode(); closeMobileNav();">Content</button>
          ${projectId && favoritePath !== null ? `<button type="button" class="mobile-drawer-action" onclick="toggleFavorite()">Favorite</button>` : ''}
          ${filePath ? `<button type="button" class="mobile-drawer-action" onclick="openEditor(); closeMobileNav();">Edit</button>` : ''}
          <button type="button" class="mobile-drawer-action" onclick="copyPageAs('default')">Copy</button>
          <button type="button" class="mobile-drawer-action" onclick="downloadPageAsPdf()">PDF</button>
        </div>
      </div>
    `;

  const sidebarBodyHtml = activeProject
    ? `
      ${workspaceHtml}
      <div class="sidebar-section docs-nav-panel">
        <div class="sidebar-panel-label">Documentation</div>
        ${docsTreeHtml || '<div class="docs-nav-empty">Add Markdown files to this project to build the docs tree.</div>'}
      </div>
      ${mobileUtilityControlsHtml}
    `
    : `
      ${workspaceHtml}
      <div class="sidebar-empty-state">
        <h3>Choose a workspace</h3>
        <p>Select a project to browse its documentation tree, search pages, and edit Markdown in place.</p>
      </div>
      ${mobileUtilityControlsHtml}
    `;

  // Create back-button logic that skips anchor jumps
  const backButtonHtml = `<a href="javascript:void(0)" onclick="goBack()" class="back-button">&larr; Back</a>`;
  const refinedNav = nav.replace(
    /<a href="javascript:history\.back\(\)">&larr; Back<\/a>/,
    backButtonHtml,
  );

  return `
<!DOCTYPE html>
<html lang="en" data-theme-mode="${initialThemeMode}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title}</title>
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"></script>
  <script>
    mermaid.initialize({
      startOnLoad: false,
      theme: 'base',
      securityLevel: 'loose',
      flowchart: {
        useMaxWidth: false,
        htmlLabels: false,
        curve: 'basis',
        padding: 15
      },
      themeVariables: {
        fontSize: '14px'
      }
    });
  </script>
  <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.9.0/build/styles/github-dark.min.css">
  <script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.9.0/build/highlight.min.js"></script>
  <style>
${styles}

    </style>
</head>
<body class="theme-${initialThemePreset}">
  <div class="mobile-overlay-scrim" id="mobile-overlay-scrim" onclick="closeMobileDrawers()" aria-hidden="true"></div>
  <div class="app-shell">
    <header class="shell-header content-header">
      <div class="shell-header-inner">
        <div class="header-nav">
          <button id="mobile-nav-toggle" class="mobile-header-button" onclick="toggleMobileNav()" title="Open menu" aria-label="Open menu" aria-controls="sidebar" aria-expanded="false" aria-haspopup="dialog">
            <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16M4 12h16m-16 6h16"></path></svg>
          </button>
          <a href="/" class="brand-mark header-brand" aria-label="mermaid-md home">mermaid-md</a>
          <div class="header-context">
            <div class="back-link">${refinedNav || '<span style="font-weight:600; font-size:0.875rem; color:var(--text-muted);">DASHBOARD</span>'}</div>
            <button class="search-trigger search-trigger-compact" onclick="openSearch()" title="Search (⌘K)">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
              <span class="search-trigger-text">Search</span>
              <kbd class="search-trigger-shortcut">⌘K</kbd>
            </button>
          </div>
            <div class="header-actions">
              <span class="scroll-status" id="scroll-status">0% READ</span>
              <div class="page-actions header-page-actions" id="page-actions">
              <button id="content-only-button" class="page-action-button page-action-compact" onclick="toggleContentOnlyMode()" title="Show content only" aria-label="Show content only">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M8 3H5a2 2 0 0 0-2 2v3"></path>
                  <path d="M16 3h3a2 2 0 0 1 2 2v3"></path>
                  <path d="M8 21H5a2 2 0 0 1-2-2v-3"></path>
                  <path d="M16 21h3a2 2 0 0 0 2-2v-3"></path>
                </svg>
              </button>
              ${filePath ? `<button id="git-diff-button" class="page-action-button page-action-compact page-action-primary" onclick="openGitDiff()" title="Checking git changes" aria-label="Checking git changes" disabled>
                <span class="page-action-git-mark" aria-hidden="true">git</span>
              </button>` : ''}
              ${filePath ? `<button id="edit-page-button" class="page-action-button page-action-compact page-action-soft" onclick="openEditor()" title="Edit this file" aria-label="Edit this file">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
              </button>` : ''}
              <div class="copy-page-dropdown" id="copy-page-dropdown">
                <button id="copy-page-button" class="page-action-button page-action-compact page-action-soft" title="Copy document" aria-label="Copy document">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                </button>
                <button class="copy-page-toggle" id="copy-page-toggle" title="Copy options" aria-label="Copy options">&#9662;</button>
                <div class="copy-page-menu" id="copy-page-menu">
                  <button onclick="copyPageAs('default')">Copy (Default)</button>
                  <button onclick="copyPageAs('text')">Copy as Text</button>
                  <button onclick="copyPageAs('html')">Copy as HTML</button>
                  <button onclick="copyPageAs('markdown')">Copy as Markdown</button>
                  <button onclick="downloadPageAsPdf()">Download as PDF</button>
                </div>
              </div>
              <div class="theme-menu-dropdown" id="theme-menu-dropdown">
                <button id="theme-mode-toggle" class="page-action-button page-action-compact page-action-soft theme-mode-button" onclick="toggleThemeMenu(event)" title="Theme" aria-label="Theme" aria-haspopup="menu" aria-controls="theme-menu" aria-expanded="false">
                  <span class="theme-mode-icon theme-mode-icon-system" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="3" y="4" width="18" height="12" rx="2"></rect>
                      <path d="M8 20h8"></path>
                      <path d="M12 16v4"></path>
                    </svg>
                  </span>
                  <span class="theme-mode-icon theme-mode-icon-sun" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="4"></circle>
                      <path d="M12 2v2"></path>
                      <path d="M12 20v2"></path>
                      <path d="m4.93 4.93 1.41 1.41"></path>
                      <path d="m17.66 17.66 1.41 1.41"></path>
                      <path d="M2 12h2"></path>
                      <path d="M20 12h2"></path>
                      <path d="m6.34 17.66-1.41 1.41"></path>
                      <path d="m19.07 4.93-1.41 1.41"></path>
                    </svg>
                  </span>
                  <span class="theme-mode-icon theme-mode-icon-moon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M12 3a6 6 0 1 0 9 9 9 9 0 1 1-9-9z"></path>
                    </svg>
                  </span>
                  <span class="theme-mode-text" id="theme-mode-text">System</span>
                </button>
                <div class="theme-menu" id="theme-menu" role="menu" aria-label="Theme settings">
                  <div class="theme-menu-section" aria-label="Theme mode">
                    <div class="theme-menu-title">Mode</div>
                    <button type="button" class="theme-menu-option" role="menuitemradio" aria-checked="false" data-theme-mode-option="system" onclick="selectThemeModeFromMenu('system')">System</button>
                    <button type="button" class="theme-menu-option" role="menuitemradio" aria-checked="false" data-theme-mode-option="light" onclick="selectThemeModeFromMenu('light')">Light</button>
                    <button type="button" class="theme-menu-option" role="menuitemradio" aria-checked="false" data-theme-mode-option="dark" onclick="selectThemeModeFromMenu('dark')">Dark</button>
                  </div>
                  <div class="theme-menu-divider" role="separator"></div>
                  <div class="theme-menu-section" aria-label="Theme preset">
                    <div class="theme-menu-title">Preset</div>
                    <button type="button" class="theme-menu-option" role="menuitemradio" aria-checked="false" data-theme-preset-option="notebook" onclick="selectThemePresetFromMenu('notebook')">Notebook</button>
                    <button type="button" class="theme-menu-option" role="menuitemradio" aria-checked="false" data-theme-preset-option="corporate" onclick="selectThemePresetFromMenu('corporate')">Corporate</button>
                  </div>
                </div>
              </div>
            </div>
            ${filePath ? `<div class="editor-nav-actions" id="editor-nav-actions">
              <button type="button" class="editor-nav-button editor-preview-toggle" id="editor-preview-toggle" onclick="toggleEditorPreview()">Preview</button>
              <button type="button" class="editor-nav-button editor-nav-cancel" onclick="closeEditor()">Cancel</button>
              <button type="button" class="editor-nav-button editor-nav-save" id="editor-nav-save-button" onclick="saveFile()">Save</button>
            </div>` : ''}
            <select id="theme-preset" class="theme-select hidden-control" title="Theme preset" aria-label="Theme preset">
              <option value="notebook">Notebook</option>
              <option value="corporate">Corporate</option>
            </select>
          </div>
        </div>
      </div>
      <div class="progress-bar" id="progress-bar"></div>
    </header>
    <div class="app-body">
      <aside id="sidebar" tabindex="-1">
        <div class="sidebar-content">
          ${sidebarBodyHtml}
        </div>
      </aside>
      <main id="main">
    <div class="mobile-doc-context">${escapeHtml(activeProject ? activeProject.name : 'Overview')}</div>
    <div class="docs-main-frame">
      <div class="docs-main-container">
        <div class="docs-layout">
          <div class="docs-content-column">
            <div class="container" id="view-mode">
              <div class="content-body">
                <div id="_top" class="sr-only" aria-hidden="true"></div>
                <div class="reload-indicator" id="reload-indicator">Changes Detected • Reloading</div>
                ${content}
                ${docPaginationHtml}
              </div>
            </div>
          </div>
        </div>
      </div>
      <aside class="toc-sidebar" id="toc-sidebar"></aside>
    </div>
    ${filePath ? `<div class="edit-mode" id="edit-mode">
      <div class="editor-toolbar" id="editor-toolbar">
        <div class="toolbar-group">
          <button type="button" onclick="insertHeading(1)" title="Heading 1">H1</button>
          <button type="button" onclick="insertHeading(2)" title="Heading 2">H2</button>
          <button type="button" onclick="insertHeading(3)" title="Heading 3">H3</button>
        </div>
        <div class="toolbar-divider"></div>
        <div class="toolbar-group">
          <button type="button" onclick="insertFormat('bold')" title="Bold (Ctrl+B)"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path></svg></button>
          <button type="button" onclick="insertFormat('italic')" title="Italic (Ctrl+I)"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="4" x2="10" y2="4"></line><line x1="14" y1="20" x2="5" y2="20"></line><line x1="15" y1="4" x2="9" y2="20"></line></svg></button>
        </div>
        <div class="toolbar-divider"></div>
        <div class="toolbar-group">
          <button type="button" onclick="insertFormat('link')" title="Link"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></button>
          <button type="button" onclick="insertFormat('image')" title="Image"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg></button>
        </div>
        <div class="toolbar-divider"></div>
        <div class="toolbar-group">
          <button type="button" onclick="insertFormat('bullet')" title="Bullet List"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg></button>
          <button type="button" onclick="insertFormat('numbered')" title="Numbered List"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="10" y1="6" x2="21" y2="6"></line><line x1="10" y1="12" x2="21" y2="12"></line><line x1="10" y1="18" x2="21" y2="18"></line><path d="M4 6h1v4"></path><path d="M4 10h2"></path><path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"></path></svg></button>
          <button type="button" onclick="insertFormat('blockquote')" title="Blockquote"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"></path></svg></button>
        </div>
        <div class="toolbar-divider"></div>
        <div class="toolbar-group">
          <button type="button" onclick="insertFormat('code')" title="Code Block"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg></button>
          <button type="button" onclick="insertFormat('mermaid')" title="Mermaid Diagram"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v18"></path><path d="M3 12h18"></path><circle cx="12" cy="6" r="2"></circle><circle cx="6" cy="12" r="2"></circle><circle cx="18" cy="12" r="2"></circle><circle cx="12" cy="18" r="2"></circle></svg></button>
          <button type="button" onclick="insertFormat('table')" title="Table"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="3" y1="15" x2="21" y2="15"></line><line x1="9" y1="3" x2="9" y2="21"></line><line x1="15" y1="3" x2="15" y2="21"></line></svg></button>
          <button type="button" onclick="insertFormat('hr')" title="Horizontal Rule"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line></svg></button>
        </div>
        <div class="toolbar-spacer"></div>
        <div class="toolbar-group">
          <button type="button" class="toolbar-btn-text" onclick="closeEditor()">Cancel</button>
          <button type="button" class="toolbar-btn-primary" id="editor-toolbar-save-button" onclick="saveFile()">Save</button>
        </div>
      </div>
      <div class="editor-panes">
        <div class="editor-pane-editor">
          <textarea class="editor-textarea" id="editor-textarea" placeholder="Write your markdown here..."></textarea>
        </div>
        <div class="editor-pane-preview">
          <div class="editor-preview" id="editor-preview"></div>
        </div>
      </div>
      <div class="editor-footer">
        <div class="editor-status" id="editor-status">
          <span>Press Ctrl+S to save</span>
        </div>
        <div>
          <span id="editor-line-count">0 lines</span>
        </div>
      </div>
    </div>` : ''}
      </main>
    </div>
  </div>

  <div class="diagram-modal" id="diagram-modal" style="display:none; position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(0,0,0,0.85); z-index:3000; justify-content:center; align-items:center; padding:2rem; box-sizing:border-box;">
    <button id="modal-close" style="position:absolute; top:10px; right:10px; background:#f44336; color:white; border:none; width:32px; height:32px; border-radius:50%; cursor:pointer; font-size:1.2rem; z-index:3001;">&times;</button>
    <div id="modal-content" style="background:var(--surface-bg); color:var(--text-main); border:1px solid var(--border-color); border-radius:var(--radius-md); padding:2rem; width:90vw; max-height:90vh; overflow:auto; position:relative;"></div>
  </div>

  <div class="modal-overlay" id="project-modal">
    <div class="modal">
      <h3 style="margin-top:0;">Project Configuration</h3>
      <input type="hidden" id="project-id">
      <div class="form-group">
        <label for="project-name-input">Project Name</label>
        <input type="text" id="project-name-input" placeholder="e.g. API Documentation">
      </div>
      <div class="form-group">
        <label for="project-path-input">Absolute Path</label>
        <div style="display: flex; gap: 0.5rem;">
          <input type="text" id="project-path-input" placeholder="/Users/dev/project" style="flex: 1;">
          <button class="btn btn-secondary" onclick="toggleBrowser()" style="padding: 0 1rem;">Browse</button>
        </div>
        <div id="file-browser" class="browser-container" style="display: none;"></div>
      </div>
      <div class="modal-actions">
        <button class="btn btn-secondary" onclick="hideProjectModal()">Cancel</button>
        <button class="btn btn-primary" onclick="saveProject()">Save Project</button>
      </div>
    </div>
  </div>

  <div class="search-modal-overlay" id="search-modal">
    <div class="search-modal">
      <div class="search-input-wrapper">
        <div class="search-input-icon" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
        </div>
        <input type="text" class="search-input" id="search-input" placeholder="Search docs..." autocomplete="off" spellcheck="false">
        <div class="search-modal-actions">
          <span class="search-shortcut">ESC</span>
        </div>
      </div>
      <div class="search-results" id="search-results">
        <div class="search-results-empty" id="search-empty">
          <div class="search-empty-title">Search documentation</div>
          <div class="search-empty-copy">Start typing to find pages, files, and matching content.</div>
        </div>
      </div>
      <div class="search-footer">
        <div class="search-footer-hints">
          <span class="search-footer-hint"><kbd>↑</kbd><kbd>↓</kbd> Navigate</span>
          <span class="search-footer-hint"><kbd>↵</kbd> Open</span>
          <span class="search-footer-hint"><kbd>ESC</kbd> Close</span>
        </div>
      </div>
    </div>
  </div>

  <div class="modal-overlay git-diff-modal-overlay" id="git-diff-modal" onclick="handleGitDiffOverlayClick(event)">
    <div class="git-diff-modal" role="dialog" aria-modal="true" aria-labelledby="git-diff-title">
      <div class="git-diff-modal-header">
        <div>
          <div class="git-diff-modal-eyebrow">Current file</div>
          <h3 id="git-diff-title">Git Diff</h3>
          <div class="git-diff-modal-path">${filePath ? escapeHtml(filePath) : ''}</div>
        </div>
        <button type="button" class="git-diff-close" onclick="closeGitDiff()" aria-label="Close git diff">&times;</button>
      </div>
      <div class="git-diff-modal-body" id="git-diff-body">
        <div class="git-diff-empty-state">Checking git changes for this file...</div>
      </div>
    </div>
  </div>

  <script>
    const projectId = ${projectId ? `'${projectId}'` : 'null'};
    const filePath = ${filePath ? `'${filePath}'` : 'null'};
    const favoritePath = ${favoritePath ? JSON.stringify(favoritePath) : 'null'};
    const favorites = ${projectId ? JSON.stringify(projectFavorites) : '[]'};
    const pageTitle = ${JSON.stringify(title)};
    const mainEl = document.getElementById('main');
    const sidebarEl = document.getElementById('sidebar');
    const mobileOverlayScrimEl = document.getElementById('mobile-overlay-scrim');
    const copyButton = document.getElementById('copy-page-button');
    const contentOnlyButton = document.getElementById('content-only-button');
    const gitDiffButton = document.getElementById('git-diff-button');
    const projectSwitcher = document.getElementById('project-switcher');
    const sidebarContentEl = document.querySelector('.sidebar-content');
    const themePresetSelect = document.getElementById('theme-preset');
    const themeModeToggle = document.getElementById('theme-mode-toggle');
    const themeModeText = document.getElementById('theme-mode-text');
    const themeMenuDropdown = document.getElementById('theme-menu-dropdown');
    const themeMenuEl = document.getElementById('theme-menu');
    const themeModeMenuOptions = Array.from(document.querySelectorAll('[data-theme-mode-option]'));
    const themePresetMenuOptions = Array.from(document.querySelectorAll('[data-theme-preset-option]'));
    const tocSidebarEl = document.getElementById('toc-sidebar');
    const editorPreviewToggle = document.getElementById('editor-preview-toggle');
    const mobileNavToggleButton = document.getElementById('mobile-nav-toggle');
    const gitDiffModal = document.getElementById('git-diff-modal');
    const gitDiffBody = document.getElementById('git-diff-body');
    const colorSchemeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const drawerFocusSelector = [
      'button:not([disabled])',
      '[href]',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
      'summary',
    ].join(', ');
    let evtSource = null;
    let editorDirty = false;
    let mobileNavLastFocusedEl = null;
    const SERVER_THEME_PRESET = ${JSON.stringify(initialThemePreset)};
    const SERVER_THEME_MODE = ${JSON.stringify(initialThemeMode)};
    const currentProjectName = ${JSON.stringify(activeProject ? activeProject.name : '')};
    const currentProjectPath = ${JSON.stringify(activeProject ? activeProject.path : '')};

    const NAV_STATE_STORAGE_KEY = 'mermaid_docs_nav_state';
    const SIDEBAR_SCROLL_STORAGE_KEY = 'mermaid_sidebar_scroll';
    const LIVE_RELOAD_SCROLL_STORAGE_KEY = 'mermaid_live_reload_scroll';
    const LIVE_RELOAD_SCROLL_MAX_AGE_MS = 15000;
    let contentOnlyHistoryActive = false;
    let gitDiffState = {
      available: false,
      hasChanges: false,
      changeCount: 0,
      addedCount: 0,
      removedCount: 0,
      baseContent: '',
      currentContent: '',
      baseLabel: 'HEAD',
      error: '',
      loading: false,
    };
    let gitDiffVirtualState = null;

    function escapeHtmlClient(text) {
      return String(text)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    }

    function syncGitDiffButton() {
      if (!gitDiffButton) return;
      if (gitDiffState.loading) {
        gitDiffButton.disabled = true;
        gitDiffButton.classList.add('is-loading');
        gitDiffButton.setAttribute('title', 'Checking git changes');
        gitDiffButton.setAttribute('aria-label', 'Checking git changes');
        return;
      }

      gitDiffButton.classList.remove('is-loading');
      const enabled = gitDiffState.available && gitDiffState.hasChanges;
      gitDiffButton.disabled = !enabled;
      gitDiffButton.classList.toggle('has-changes', enabled);

      let label = 'No git changes for this file';
      if (!gitDiffState.available) {
        label = gitDiffState.error || 'Git diff unavailable for this file';
      } else if (enabled) {
        label = 'Show git diff for this file (+' + gitDiffState.addedCount + ' / -' + gitDiffState.removedCount + ')';
      }

      gitDiffButton.setAttribute('title', label);
      gitDiffButton.setAttribute('aria-label', label);
    }

    async function loadGitDiffState() {
      if (!projectId || !filePath) return gitDiffState;
      gitDiffState = { ...gitDiffState, loading: true };
      syncGitDiffButton();

      try {
        const res = await fetch('/api/git-diff?projectId=' + projectId + '&path=' + encodeURIComponent(filePath));
        if (!res.ok) throw new Error('Failed to load git diff');
        const data = await res.json();
        gitDiffState = {
          available: Boolean(data.available),
          hasChanges: Boolean(data.hasChanges),
          changeCount: 0,
          addedCount: 0,
          removedCount: 0,
          baseContent: typeof data.baseContent === 'string' ? data.baseContent : '',
          currentContent: typeof data.currentContent === 'string' ? data.currentContent : '',
          baseLabel: data.baseLabel || 'HEAD',
          error: data.error || '',
          loading: false,
        };
        if (gitDiffState.hasChanges) {
          const summaryCounts = summarizeGitDiffRows(
            gitDiffState.baseContent,
            gitDiffState.currentContent,
          );
          gitDiffState.changeCount = summaryCounts.changed;
          gitDiffState.addedCount = summaryCounts.added;
          gitDiffState.removedCount = summaryCounts.removed;
        }
      } catch (e) {
        gitDiffState = {
          available: false,
          hasChanges: false,
          changeCount: 0,
          addedCount: 0,
          removedCount: 0,
          baseContent: '',
          currentContent: '',
          baseLabel: 'HEAD',
          error: e.message || 'Unable to load git diff.',
          loading: false,
        };
      }

      syncGitDiffButton();
      return gitDiffState;
    }

    function splitLinesPreservingBlanks(text) {
      if (!text) return [];
      return text.replace(/\\r\\n/g, '\\n').split('\\n');
    }

    function buildFallbackDiffRows(baseLines, currentLines) {
      const rows = [];
      const total = Math.max(baseLines.length, currentLines.length);
      for (let index = 0; index < total; index += 1) {
        const baseLine = baseLines[index];
        const currentLine = currentLines[index];
        if (baseLine === currentLine) {
          rows.push({
            type: 'equal',
            baseNumber: index + 1,
            currentNumber: index + 1,
            baseText: baseLine,
            currentText: currentLine,
          });
        } else if (typeof baseLine === 'undefined') {
          rows.push({
            type: 'added',
            baseNumber: '',
            currentNumber: index + 1,
            baseText: '',
            currentText: currentLine,
          });
        } else if (typeof currentLine === 'undefined') {
          rows.push({
            type: 'removed',
            baseNumber: index + 1,
            currentNumber: '',
            baseText: baseLine,
            currentText: '',
          });
        } else {
          rows.push({
            type: 'changed',
            baseNumber: index + 1,
            currentNumber: index + 1,
            baseText: baseLine,
            currentText: currentLine,
          });
        }
      }
      return rows;
    }

    function buildSideBySideDiffRows(baseText, currentText) {
      const baseLines = splitLinesPreservingBlanks(baseText);
      const currentLines = splitLinesPreservingBlanks(currentText);
      if (!baseLines.length && !currentLines.length) return [];

      const cellCount = baseLines.length * currentLines.length;
      if (cellCount > 250000) {
        return buildFallbackDiffRows(baseLines, currentLines);
      }

      const dp = Array.from(
        { length: baseLines.length + 1 },
        () => new Uint32Array(currentLines.length + 1),
      );

      for (let baseIndex = baseLines.length - 1; baseIndex >= 0; baseIndex -= 1) {
        for (let currentIndex = currentLines.length - 1; currentIndex >= 0; currentIndex -= 1) {
          dp[baseIndex][currentIndex] = baseLines[baseIndex] === currentLines[currentIndex]
            ? dp[baseIndex + 1][currentIndex + 1] + 1
            : Math.max(dp[baseIndex + 1][currentIndex], dp[baseIndex][currentIndex + 1]);
        }
      }

      const operations = [];
      let baseIndex = 0;
      let currentIndex = 0;
      while (baseIndex < baseLines.length && currentIndex < currentLines.length) {
        if (baseLines[baseIndex] === currentLines[currentIndex]) {
          operations.push({
            type: 'equal',
            baseNumber: baseIndex + 1,
            currentNumber: currentIndex + 1,
            baseText: baseLines[baseIndex],
            currentText: currentLines[currentIndex],
          });
          baseIndex += 1;
          currentIndex += 1;
        } else if (dp[baseIndex + 1][currentIndex] >= dp[baseIndex][currentIndex + 1]) {
          operations.push({
            type: 'removed',
            baseNumber: baseIndex + 1,
            currentNumber: '',
            baseText: baseLines[baseIndex],
            currentText: '',
          });
          baseIndex += 1;
        } else {
          operations.push({
            type: 'added',
            baseNumber: '',
            currentNumber: currentIndex + 1,
            baseText: '',
            currentText: currentLines[currentIndex],
          });
          currentIndex += 1;
        }
      }

      while (baseIndex < baseLines.length) {
        operations.push({
          type: 'removed',
          baseNumber: baseIndex + 1,
          currentNumber: '',
          baseText: baseLines[baseIndex],
          currentText: '',
        });
        baseIndex += 1;
      }

      while (currentIndex < currentLines.length) {
        operations.push({
          type: 'added',
          baseNumber: '',
          currentNumber: currentIndex + 1,
          baseText: '',
          currentText: currentLines[currentIndex],
        });
        currentIndex += 1;
      }

      const rows = [];
      let pendingRemoved = [];
      let pendingAdded = [];

      const flushPending = () => {
        const rowCount = Math.max(pendingRemoved.length, pendingAdded.length);
        for (let index = 0; index < rowCount; index += 1) {
          const removed = pendingRemoved[index];
          const added = pendingAdded[index];
          if (removed && added) {
            rows.push({
              type: 'changed',
              baseNumber: removed.baseNumber,
              currentNumber: added.currentNumber,
              baseText: removed.baseText,
              currentText: added.currentText,
            });
          } else if (removed) {
            rows.push(removed);
          } else if (added) {
            rows.push(added);
          }
        }
        pendingRemoved = [];
        pendingAdded = [];
      };

      operations.forEach((operation) => {
        if (operation.type === 'equal') {
          flushPending();
          rows.push(operation);
          return;
        }
        if (operation.type === 'removed') {
          pendingRemoved.push(operation);
          return;
        }
        pendingAdded.push(operation);
      });

      flushPending();
      return rows;
    }

    function summarizeGitDiffRowsFromRows(rows) {
      return rows.reduce(
        (summary, row) => {
          if (row.type === 'added') {
            summary.added += 1;
            summary.changed += 1;
          } else if (row.type === 'removed') {
            summary.removed += 1;
            summary.changed += 1;
          } else if (row.type === 'changed') {
            summary.added += 1;
            summary.removed += 1;
            summary.changed += 1;
          }
          return summary;
        },
        { added: 0, removed: 0, changed: 0 },
      );
    }

    function summarizeGitDiffRows(baseContent, currentContent) {
      return summarizeGitDiffRowsFromRows(buildSideBySideDiffRows(baseContent, currentContent));
    }

    function buildSourceDiffRows(rows, contextSize = 3) {
      const changedIndexes = [];
      rows.forEach((row, index) => {
        if (row.type !== 'equal') changedIndexes.push(index);
      });
      if (!changedIndexes.length) return [];

      const ranges = [];
      changedIndexes.forEach((index) => {
        const start = Math.max(0, index - contextSize);
        const end = Math.min(rows.length - 1, index + contextSize);
        const previous = ranges[ranges.length - 1];
        if (previous && start <= previous.end + 1) {
          previous.end = Math.max(previous.end, end);
        } else {
          ranges.push({ start, end });
        }
      });

      const sourceRows = [];
      ranges.forEach((range, index) => {
        if (index > 0) {
          const skipped = range.start - ranges[index - 1].end - 1;
          if (skipped > 0) {
            sourceRows.push({ type: 'omitted', skipped });
          }
        }
        for (let rowIndex = range.start; rowIndex <= range.end; rowIndex += 1) {
          sourceRows.push(rows[rowIndex]);
        }
      });

      return sourceRows;
    }

    function renderDiffCell(side, row) {
      const lineNumber = side === 'base' ? row.baseNumber : row.currentNumber;
      const text = side === 'base' ? row.baseText : row.currentText;
      const isEmpty = lineNumber === '';
      const cellClass = 'git-diff-cell git-diff-cell-' + side + (isEmpty ? ' is-empty' : ' is-' + row.type);
      return '<div class="' + cellClass + '"><span class="git-diff-gutter">'
        + (lineNumber || '&nbsp;')
        + '</span><span class="git-diff-code">'
        + (typeof text === 'string' && text.length ? escapeHtmlClient(text) : '&nbsp;')
        + '</span></div>';
    }

    function renderDiffRowMarkup(row, index, top) {
      if (row.type === 'omitted') {
        return '<div class="git-diff-virtual-row git-diff-virtual-row-omitted" data-row-index="' + index + '" style="transform: translateY(' + top + 'px)">'
          + '<div class="git-diff-omitted-row"><div class="git-diff-omitted-cell">'
          + escapeHtmlClient('...' + row.skipped + ' unchanged line' + (row.skipped === 1 ? '' : 's') + '...')
          + '</div></div></div>';
      }

      return '<div class="git-diff-virtual-row" data-row-index="' + index + '" style="transform: translateY(' + top + 'px)">'
        + '<div class="git-diff-row">'
        + renderDiffCell('base', row)
        + renderDiffCell('current', row)
        + '</div></div>';
    }

    function buildGitDiffSummaryMarkup(state, summaryCounts, summary) {
      return '<div class="git-diff-summary">'
        + '<span>' + escapeHtmlClient(state.baseLabel || 'HEAD') + '</span>'
        + '<span>' + escapeHtmlClient(summary) + '</span>'
        + '<span>Working tree</span>'
        + '</div>'
        + '<div class="git-diff-compact-summary">'
        + '<span class="git-diff-compact-count git-diff-compact-added">+' + summaryCounts.added + '</span>'
        + '<span class="git-diff-compact-count git-diff-compact-removed">-' + summaryCounts.removed + '</span>'
        + '<span class="git-diff-compact-label">lines changed</span>'
        + '</div>';
    }

    function estimateGitDiffRowHeight(row) {
      const compactLayout = window.innerWidth <= 820;
      if (row.type === 'omitted') {
        return compactLayout ? 40 : 34;
      }
      return compactLayout ? 72 : 34;
    }

    function recomputeGitDiffVirtualMetrics(virtualState) {
      let offset = 0;
      for (let index = 0; index < virtualState.rows.length; index += 1) {
        virtualState.offsets[index] = offset;
        offset += virtualState.heights[index];
      }
      virtualState.totalHeight = offset;
      if (virtualState.stageEl) {
        virtualState.stageEl.style.height = offset + 'px';
      }
    }

    function findGitDiffVirtualIndex(offsets, scrollTop, totalHeight) {
      if (!offsets.length || scrollTop <= 0) return 0;
      let low = 0;
      let high = offsets.length - 1;
      while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const midOffset = offsets[mid];
        const nextOffset = mid + 1 < offsets.length ? offsets[mid + 1] : totalHeight;
        if (scrollTop < midOffset) {
          high = mid - 1;
        } else if (scrollTop >= nextOffset) {
          low = mid + 1;
        } else {
          return mid;
        }
      }
      return Math.max(0, Math.min(offsets.length - 1, low));
    }

    function destroyGitDiffVirtualizer() {
      if (!gitDiffVirtualState) return;
      if (gitDiffVirtualState.resizeObserver) {
        gitDiffVirtualState.resizeObserver.disconnect();
      }
      gitDiffVirtualState.viewportEl.removeEventListener('scroll', gitDiffVirtualState.onScroll);
      gitDiffVirtualState = null;
    }

    function syncGitDiffVirtualMeasurements(virtualState, entries) {
      if (!virtualState || !virtualState.stageEl) return;
      let changed = false;

      const measureRow = (rowEl, measuredHeight) => {
        const index = Number(rowEl.getAttribute('data-row-index'));
        const nextHeight = Math.ceil(measuredHeight || rowEl.getBoundingClientRect().height);
        if (!Number.isFinite(index) || !nextHeight) return;
        if (virtualState.heights[index] !== nextHeight) {
          virtualState.heights[index] = nextHeight;
          changed = true;
        }
      };

      if (entries && entries.length) {
        entries.forEach((entry) => {
          measureRow(entry.target, entry.contentRect ? entry.contentRect.height : 0);
        });
      } else {
        virtualState.stageEl.querySelectorAll('[data-row-index]').forEach((rowEl) => {
          measureRow(rowEl, 0);
        });
      }

      if (changed) {
        recomputeGitDiffVirtualMetrics(virtualState);
        renderGitDiffVirtualRows(virtualState, true);
      }
    }

    function observeGitDiffVirtualRows(virtualState) {
      if (!virtualState || !virtualState.stageEl) return;

      if (virtualState.resizeObserver) {
        virtualState.resizeObserver.disconnect();
      }

      const rowEls = virtualState.stageEl.querySelectorAll('[data-row-index]');
      if (!rowEls.length) return;

      if (typeof ResizeObserver === 'function') {
        virtualState.resizeObserver = new ResizeObserver((entries) => {
          syncGitDiffVirtualMeasurements(virtualState, entries);
        });
        rowEls.forEach((rowEl) => {
          virtualState.resizeObserver.observe(rowEl);
        });
      }

      syncGitDiffVirtualMeasurements(virtualState);
    }

    function renderGitDiffVirtualRows(virtualState, force) {
      if (!virtualState || !virtualState.viewportEl || !virtualState.stageEl) return;
      const viewportHeight = virtualState.viewportEl.clientHeight || 0;
      const overscan = Math.max(320, viewportHeight);
      const startOffset = Math.max(0, virtualState.viewportEl.scrollTop - overscan);
      const endOffset = virtualState.viewportEl.scrollTop + viewportHeight + overscan;
      const startIndex = findGitDiffVirtualIndex(virtualState.offsets, startOffset, virtualState.totalHeight);
      let endIndex = startIndex;
      while (
        endIndex < virtualState.rows.length - 1
        && virtualState.offsets[endIndex] + virtualState.heights[endIndex] < endOffset
      ) {
        endIndex += 1;
      }

      if (!force && virtualState.startIndex === startIndex && virtualState.endIndex === endIndex) {
        return;
      }

      virtualState.startIndex = startIndex;
      virtualState.endIndex = endIndex;
      let markup = '';
      for (let index = startIndex; index <= endIndex; index += 1) {
        markup += renderDiffRowMarkup(virtualState.rows[index], index, virtualState.offsets[index]);
      }
      virtualState.stageEl.innerHTML = markup;
      observeGitDiffVirtualRows(virtualState);
    }

    function scheduleGitDiffVirtualRender() {
      if (!gitDiffVirtualState || gitDiffVirtualState.renderScheduled) return;
      gitDiffVirtualState.renderScheduled = true;
      requestAnimationFrame(() => {
        if (!gitDiffVirtualState) return;
        gitDiffVirtualState.renderScheduled = false;
        renderGitDiffVirtualRows(gitDiffVirtualState);
      });
    }

    function resetGitDiffVirtualHeights() {
      if (!gitDiffVirtualState) return;
      gitDiffVirtualState.heights = gitDiffVirtualState.rows.map((row) => estimateGitDiffRowHeight(row));
      gitDiffVirtualState.startIndex = -1;
      gitDiffVirtualState.endIndex = -1;
      recomputeGitDiffVirtualMetrics(gitDiffVirtualState);
      scheduleGitDiffVirtualRender();
    }

    window.addEventListener('resize', resetGitDiffVirtualHeights);

    function initGitDiffVirtualizer(rows) {
      const viewportEl = document.getElementById('git-diff-viewport');
      const stageEl = document.getElementById('git-diff-stage');
      if (!viewportEl || !stageEl) return;

      destroyGitDiffVirtualizer();
      gitDiffVirtualState = {
        rows,
        viewportEl,
        stageEl,
        heights: rows.map((row) => estimateGitDiffRowHeight(row)),
        offsets: new Array(rows.length).fill(0),
        totalHeight: 0,
        startIndex: -1,
        endIndex: -1,
        renderScheduled: false,
        resizeObserver: null,
        onScroll: () => {
          scheduleGitDiffVirtualRender();
        },
      };

      viewportEl.addEventListener('scroll', gitDiffVirtualState.onScroll, { passive: true });
      recomputeGitDiffVirtualMetrics(gitDiffVirtualState);
      renderGitDiffVirtualRows(gitDiffVirtualState);
    }

    function renderGitDiffSnapshot(state) {
      if (!gitDiffBody) return;
      const rows = buildSideBySideDiffRows(state.baseContent, state.currentContent);
      const summaryCounts = summarizeGitDiffRowsFromRows(rows);
      const changedCount = summaryCounts.changed;
      gitDiffState.changeCount = changedCount;
      gitDiffState.addedCount = summaryCounts.added;
      gitDiffState.removedCount = summaryCounts.removed;
      syncGitDiffButton();
      const summary = changedCount === 1 ? '1 changed row' : changedCount + ' changed rows';
      const summaryMarkup = buildGitDiffSummaryMarkup(state, summaryCounts, summary);
      const sourceRows = buildSourceDiffRows(rows);
      destroyGitDiffVirtualizer();

      if (!sourceRows.length) {
        gitDiffBody.innerHTML = summaryMarkup + '<div class="git-diff-empty-state">No git changes for this file.</div>';
        return;
      }

      gitDiffBody.innerHTML = summaryMarkup
        + '<div class="git-diff-columns">'
        + '<div class="git-diff-column-header">' + escapeHtmlClient(state.baseLabel || 'HEAD') + '</div>'
        + '<div class="git-diff-column-header">Working tree</div>'
        + '</div>'
        + '<div class="git-diff-viewport" id="git-diff-viewport">'
        + '<div class="git-diff-stage" id="git-diff-stage"></div>'
        + '</div>';

      initGitDiffVirtualizer(sourceRows);
    }

    function closeGitDiff() {
      if (!gitDiffModal) return;
      gitDiffModal.classList.remove('active');
      destroyGitDiffVirtualizer();
    }

    function handleGitDiffOverlayClick(event) {
      if (event.target === gitDiffModal) {
        closeGitDiff();
      }
    }

    async function openGitDiff() {
      if (!projectId || !filePath || !gitDiffModal || !gitDiffBody) return;
      destroyGitDiffVirtualizer();
      gitDiffModal.classList.add('active');
      gitDiffBody.innerHTML = '<div class="git-diff-empty-state">Loading git diff...</div>';
      const state = await loadGitDiffState();
      if (!state.available) {
        gitDiffBody.innerHTML = '<div class="git-diff-empty-state">' + escapeHtmlClient(state.error || 'Git diff unavailable for this file.') + '</div>';
        return;
      }
      if (!state.hasChanges) {
        gitDiffBody.innerHTML = '<div class="git-diff-empty-state">No git changes for this file.</div>';
        return;
      }
      renderGitDiffSnapshot(state);
    }

    function isContentOnlyMode() {
      return document.body.classList.contains('content-only');
    }

    function syncContentOnlyButton() {
      if (!contentOnlyButton) return;
      const active = isContentOnlyMode();
      const label = active ? 'Exit content-only view' : 'Show content only';
      contentOnlyButton.setAttribute('title', label);
      contentOnlyButton.setAttribute('aria-label', label);
    }

    function setContentOnlyMode(active) {
      document.body.classList.toggle('content-only', active);
      syncContentOnlyButton();
    }

    function enterContentOnlyMode() {
      if (isEditing || isContentOnlyMode()) return false;
      setContentOnlyMode(true);
      history.pushState({ ...(history.state || {}), contentOnly: true }, '', window.location.href);
      contentOnlyHistoryActive = true;
      return true;
    }

    function exitContentOnlyMode() {
      if (!isContentOnlyMode()) return false;
      if (contentOnlyHistoryActive) {
        history.back();
      } else {
        setContentOnlyMode(false);
      }
      return true;
    }

    function toggleContentOnlyMode() {
      if (isContentOnlyMode()) {
        exitContentOnlyMode();
      } else {
        enterContentOnlyMode();
      }
    }

    function sanitizeThemePreset(theme) {
      return ['notebook', 'corporate'].includes(theme)
        ? theme
        : 'notebook';
    }

    function sanitizeThemeMode(mode) {
      return ['system', 'light', 'dark'].includes(mode) ? mode : 'system';
    }

    function getResolvedThemeMode(mode) {
      const safeMode = sanitizeThemeMode(mode);
      if (safeMode === 'system') {
        return colorSchemeMediaQuery.matches ? 'dark' : 'light';
      }
      return safeMode;
    }

    function isSystemDarkMode() {
      return getResolvedThemeMode(document.documentElement.dataset.themeMode || SERVER_THEME_MODE) === 'dark';
    }

    function getThemePresetLabel(theme) {
      const labels = {
        notebook: 'Notebook',
        corporate: 'Corporate',
      };
      return labels[sanitizeThemePreset(theme)] || 'Notebook';
    }

    function syncThemeMenuState() {
      const activeMode = sanitizeThemeMode(document.documentElement.dataset.themeMode || SERVER_THEME_MODE);
      const activePreset = sanitizeThemePreset(themePresetSelect ? themePresetSelect.value : SERVER_THEME_PRESET);
      themeModeMenuOptions.forEach((option) => {
        const isActive = option.dataset.themeModeOption === activeMode;
        option.classList.toggle('is-active', isActive);
        option.setAttribute('aria-checked', isActive ? 'true' : 'false');
      });
      themePresetMenuOptions.forEach((option) => {
        const isActive = option.dataset.themePresetOption === activePreset;
        option.classList.toggle('is-active', isActive);
        option.setAttribute('aria-checked', isActive ? 'true' : 'false');
      });
      if (themeMenuDropdown) {
        themeMenuDropdown.dataset.mode = activeMode;
        themeMenuDropdown.dataset.preset = activePreset;
      }
    }

    function syncThemeModeToggle(mode) {
      if (!themeModeToggle) return;
      const safeMode = sanitizeThemeMode(mode);
      const resolvedMode = getResolvedThemeMode(safeMode);
      const modeLabel = safeMode === 'system'
        ? 'System (' + resolvedMode + ')'
        : safeMode.charAt(0).toUpperCase() + safeMode.slice(1);
      const activePresetLabel = getThemePresetLabel(themePresetSelect ? themePresetSelect.value : SERVER_THEME_PRESET);
      const label = 'Theme settings. Mode: ' + modeLabel + '. Preset: ' + activePresetLabel + '.';
      themeModeToggle.setAttribute('title', label);
      themeModeToggle.setAttribute('aria-label', label);
      themeModeToggle.dataset.mode = safeMode;
      themeModeToggle.setAttribute('aria-expanded', themeMenuEl && themeMenuEl.classList.contains('show') ? 'true' : 'false');
      if (themeModeText) {
        themeModeText.textContent = safeMode.charAt(0).toUpperCase() + safeMode.slice(1);
      }
      syncThemeMenuState();
    }

    function closeThemeMenu() {
      if (!themeMenuEl) return;
      themeMenuEl.classList.remove('show');
      if (themeModeToggle) {
        themeModeToggle.setAttribute('aria-expanded', 'false');
      }
    }

    function openThemeMenu() {
      if (!themeMenuEl) return;
      const copyMenu = document.getElementById('copy-page-menu');
      if (copyMenu) copyMenu.classList.remove('show');
      syncThemeMenuState();
      themeMenuEl.classList.add('show');
      if (themeModeToggle) {
        themeModeToggle.setAttribute('aria-expanded', 'true');
      }
    }

    function toggleThemeMenu(event) {
      if (event) event.stopPropagation();
      if (!themeMenuEl) return;
      if (themeMenuEl.classList.contains('show')) {
        closeThemeMenu();
      } else {
        openThemeMenu();
      }
    }

    function selectThemeModeFromMenu(mode) {
      setThemeMode(mode, true);
      closeThemeMenu();
    }

    function selectThemePresetFromMenu(theme) {
      setThemePreset(theme, true);
      closeThemeMenu();
    }

    function getMermaidThemeConfig(theme) {
      const byPreset = {
        notebook: {
          primaryColor: '#e8edff',
          primaryTextColor: '#1f2a44',
          primaryBorderColor: '#4f46e5',
          secondaryColor: '#eef2ff',
          secondaryTextColor: '#2f3f5d',
          tertiaryColor: '#f8faff',
          lineColor: '#4f46e5',
          clusterBkg: '#f4f7ff',
          clusterBorder: '#a5b4fc',
          edgeLabelBackground: '#eef2ff',
          mainBkg: '#ffffff',
          fontSize: '14px',
        },
        corporate: {
          primaryColor: '#e4eef5',
          primaryTextColor: '#17374d',
          primaryBorderColor: '#1f5d8a',
          secondaryColor: '#eff5f9',
          secondaryTextColor: '#25506f',
          tertiaryColor: '#f7fafc',
          lineColor: '#2d6b96',
          clusterBkg: '#e9f1f6',
          clusterBorder: '#6f97b4',
          edgeLabelBackground: '#edf4f9',
          mainBkg: '#ffffff',
          fontSize: '14px',
        },
      };

      const darkByPreset = {
        notebook: {
          primaryColor: '#1e2131',
          primaryTextColor: '#f3f4f6',
          primaryBorderColor: '#a5b4fc',
          secondaryColor: '#171923',
          secondaryTextColor: '#dbe3f3',
          tertiaryColor: '#10131b',
          lineColor: '#a5b4fc',
          clusterBkg: '#141824',
          clusterBorder: '#818cf8',
          edgeLabelBackground: '#141824',
          mainBkg: '#11100f',
          darkMode: true,
          fontSize: '14px',
        },
        corporate: {
          primaryColor: '#152330',
          primaryTextColor: '#e8eef4',
          primaryBorderColor: '#93c5fd',
          secondaryColor: '#111c26',
          secondaryTextColor: '#cad6e2',
          tertiaryColor: '#0e151c',
          lineColor: '#93c5fd',
          clusterBkg: '#13202b',
          clusterBorder: '#60a5fa',
          edgeLabelBackground: '#152430',
          mainBkg: '#11100f',
          darkMode: true,
          fontSize: '14px',
        },
      };

      return {
        startOnLoad: false,
        theme: 'base',
        securityLevel: 'loose',
        flowchart: {
          useMaxWidth: false,
          htmlLabels: false,
          curve: 'basis',
          padding: 15,
        },
        themeVariables: (isSystemDarkMode() ? darkByPreset : byPreset)[sanitizeThemePreset(theme)] || (isSystemDarkMode() ? darkByPreset.notebook : byPreset.notebook),
      };
    }

    function renderMermaidDiagrams(root) {
      if (!root || typeof mermaid === 'undefined') return;
      const diagrams = Array.from(root.querySelectorAll('.mermaid'));
      if (diagrams.length === 0) return;

      diagrams.forEach((diagram) => {
        if (!diagram.dataset.mermaidSource) {
          diagram.dataset.mermaidSource = (diagram.textContent || '').trim();
        }
        diagram.removeAttribute('data-processed');
        diagram.textContent = diagram.dataset.mermaidSource;
      });

      mermaid.init(undefined, diagrams);
    }

    function applyMermaidTheme(theme) {
      if (typeof mermaid === 'undefined') return;
      mermaid.initialize(getMermaidThemeConfig(theme));
      renderMermaidDiagrams(document.querySelector('.content-body'));

      const editorPreviewEl = document.getElementById('editor-preview');
      if (editorPreviewEl) {
        renderMermaidDiagrams(editorPreviewEl);
      }
    }

    function applyThemePreset(theme) {
      const safeTheme = sanitizeThemePreset(theme);
      document.body.classList.remove(
        'theme-notebook',
        'theme-corporate',
      );
      document.body.classList.add('theme-' + safeTheme);
      if (themePresetSelect) {
        themePresetSelect.value = safeTheme;
      }
      syncThemeMenuState();
    }

    function applyThemeMode(mode) {
      const safeMode = sanitizeThemeMode(mode);
      const resolvedMode = getResolvedThemeMode(safeMode);
      document.documentElement.dataset.themeMode = safeMode;
      document.documentElement.dataset.resolvedThemeMode = resolvedMode;
      syncThemeModeToggle(safeMode);
    }

    async function persistThemePreset(theme) {
      try {
        await fetch('/api/settings', {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ themePreset: theme }),
        });
      } catch (e) {
        // Ignore network errors and keep local theme active
      }
    }

    async function persistThemeMode(mode) {
      try {
        await fetch('/api/settings', {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ themeMode: mode }),
        });
      } catch (e) {
        // Ignore network errors and keep local theme active
      }
    }

    function setThemePreset(theme, persist = false) {
      const safeTheme = sanitizeThemePreset(theme);
      applyThemePreset(safeTheme);
      applyMermaidTheme(safeTheme);
      if (persist) persistThemePreset(safeTheme);
    }

    function setThemeMode(mode, persist = false, renderDiagrams = true) {
      const safeMode = sanitizeThemeMode(mode);
      applyThemeMode(safeMode);
      if (renderDiagrams) {
        applyMermaidTheme(themePresetSelect ? themePresetSelect.value : SERVER_THEME_PRESET);
      }
      if (persist) persistThemeMode(safeMode);
    }

    function getCalloutType(rawText) {
      const text = rawText.trim();
      const bracketMatch = text.match(/^\\[!(note|info|tip|important|warning|caution|danger|api|example|decision|gotcha|recommended)\\]\\s*/i);
      if (bracketMatch) return bracketMatch[1].toLowerCase();
      const plainMatch = text.match(/^(note|info|tip|important|warning|caution|danger|api|example|decision|gotcha|recommended)\\s*:\\s*/i);
      if (plainMatch) return plainMatch[1].toLowerCase();
      return null;
    }

    function cleanCalloutPrefix(paragraph, type) {
      if (!paragraph) return;
      paragraph.innerHTML = paragraph.innerHTML
        .replace(new RegExp('^\\\\s*\\\\[!' + type + '\\\\]\\\\s*', 'i'), '')
        .replace(new RegExp('^\\\\s*' + type + '\\\\s*:\\\\s*', 'i'), '');
    }

    function wrapTables(root) {
      root.querySelectorAll('table').forEach((table) => {
        if (table.closest('.table-wrap')) return;
        const wrapper = document.createElement('div');
        wrapper.className = 'table-wrap';
        table.parentNode.insertBefore(wrapper, table);
        wrapper.appendChild(table);
      });
    }

    function applyCalloutStyles(root) {
      const calloutMeta = {
        note: { label: 'NOTE', icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="M12 10v6"></path><path d="M12 7.2h.01"></path></svg>' },
        info: { label: 'INFO', icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="M12 10v6"></path><path d="M12 7.2h.01"></path></svg>' },
        tip: { label: 'TIP', icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.5 9.5 21 3"></path><path d="M6 12.5 3 21l8.5-3L21 3l-6.5 6.5"></path><path d="M10 14 3 7l3-3 7 7"></path></svg>' },
        important: { label: 'IMPORTANT', icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.5 9.5 21 3"></path><path d="M6 12.5 3 21l8.5-3L21 3l-6.5 6.5"></path><path d="M10 14 3 7l3-3 7 7"></path></svg>' },
        warning: { label: 'WARNING', icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 2.8 19.5a1 1 0 0 0 .87 1.5h16.66a1 1 0 0 0 .87-1.5L12 3Z"></path><path d="M12 9v5"></path><path d="M12 17.2h.01"></path></svg>' },
        caution: { label: 'CAUTION', icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 2.8 19.5a1 1 0 0 0 .87 1.5h16.66a1 1 0 0 0 .87-1.5L12 3Z"></path><path d="M12 9v5"></path><path d="M12 17.2h.01"></path></svg>' },
        danger: { label: 'DANGER', icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 2.8 19.5a1 1 0 0 0 .87 1.5h16.66a1 1 0 0 0 .87-1.5L12 3Z"></path><path d="M12 9v5"></path><path d="M12 17.2h.01"></path></svg>' },
        api: { label: 'API', icon: '{}' },
        example: { label: 'EXAMPLE', icon: '>' },
        decision: { label: 'DECISION', icon: '?' },
        gotcha: { label: 'GOTCHA', icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 2.8 19.5a1 1 0 0 0 .87 1.5h16.66a1 1 0 0 0 .87-1.5L12 3Z"></path><path d="M12 9v5"></path><path d="M12 17.2h.01"></path></svg>' },
        recommended: { label: 'RECOMMENDED', icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.5 9.5 21 3"></path><path d="M6 12.5 3 21l8.5-3L21 3l-6.5 6.5"></path><path d="M10 14 3 7l3-3 7 7"></path></svg>' },
      };

      root.querySelectorAll('blockquote').forEach((block) => {
        if (block.dataset.calloutApplied === 'true') return;
        const firstParagraph = block.querySelector('p');
        const source = firstParagraph ? firstParagraph.textContent : block.textContent;
        const type = getCalloutType(source || '');
        if (!type) return;
        block.dataset.calloutApplied = 'true';
        block.classList.add('doc-callout', 'doc-callout-' + type);
        block.setAttribute('data-callout-label', type);
        cleanCalloutPrefix(firstParagraph, type);

        const meta = calloutMeta[type] || { label: type.toUpperCase(), icon: 'i' };
        const body = document.createElement('div');
        body.className = 'doc-callout-body';
        while (block.firstChild) {
          body.appendChild(block.firstChild);
        }

        const heading = document.createElement('div');
        heading.className = 'doc-callout-heading';
        heading.innerHTML = '<span class="doc-callout-icon" aria-hidden="true">' + meta.icon + '</span><span class="doc-callout-title">' + meta.label + '</span>';

        block.appendChild(heading);
        block.appendChild(body);
      });
    }

    function enhanceScannability(root) {
      if (!root) return;
      wrapTables(root);
      applyCalloutStyles(root);
    }
    
    // Track page navigations (excluding hash changes) using sessionStorage
    const NAV_HISTORY_KEY = 'mermaid_nav_history';
    
    function getNavHistory() {
      try {
        return JSON.parse(sessionStorage.getItem(NAV_HISTORY_KEY)) || [];
      } catch { return []; }
    }
    
    function saveNavHistory(history) {
      sessionStorage.setItem(NAV_HISTORY_KEY, JSON.stringify(history));
    }

    function getLiveReloadScrollPageKey() {
      return window.location.pathname + window.location.search + window.location.hash;
    }

    function saveLiveReloadScrollPosition() {
      if (!mainEl) return;
      try {
        sessionStorage.setItem(
          LIVE_RELOAD_SCROLL_STORAGE_KEY,
          JSON.stringify({
            page: getLiveReloadScrollPageKey(),
            scrollTop: mainEl.scrollTop,
            savedAt: Date.now(),
          }),
        );
      } catch {
        // Ignore storage errors and fall back to default browser reload behavior.
      }
    }

    function consumeLiveReloadScrollPosition() {
      try {
        const raw = sessionStorage.getItem(LIVE_RELOAD_SCROLL_STORAGE_KEY);
        if (!raw) return null;
        sessionStorage.removeItem(LIVE_RELOAD_SCROLL_STORAGE_KEY);
        const state = JSON.parse(raw);
        if (!state || state.page !== getLiveReloadScrollPageKey()) return null;
        if (typeof state.scrollTop !== 'number') return null;
        if (Date.now() - Number(state.savedAt || 0) > LIVE_RELOAD_SCROLL_MAX_AGE_MS) return null;
        return state;
      } catch {
        return null;
      }
    }

    function restoreLiveReloadScrollPosition() {
      if (!mainEl) return;
      const state = consumeLiveReloadScrollPosition();
      if (!state) return;

      const restore = () => {
        const maxScrollTop = Math.max(0, mainEl.scrollHeight - mainEl.clientHeight);
        mainEl.scrollTop = Math.min(state.scrollTop, maxScrollTop);
      };

      // Re-apply after async layout work like Mermaid rendering changes the content height.
      restore();
      requestAnimationFrame(() => requestAnimationFrame(restore));
      window.addEventListener('load', restore, { once: true });
      setTimeout(restore, 150);
      setTimeout(restore, 500);
    }
    
    // Record current page on load (pathname + search, excluding hash)
    (function recordPageVisit() {
      const currentPage = window.location.pathname + window.location.search;
      const history = getNavHistory();
      
      // Only add if different from the last entry (avoid duplicates from hash nav)
      if (history.length === 0 || history[history.length - 1] !== currentPage) {
        history.push(currentPage);
        // Keep only last 50 entries
        if (history.length > 50) history.shift();
        saveNavHistory(history);
      }
    })();
    
    // Custom Back function that ignores anchor jumps and navigates to previous page
    function goBack() {
      if (exitContentOnlyMode()) return;

      // Close SSE connection before navigating
      if (typeof evtSource !== 'undefined' && evtSource) {
        evtSource.close();
      }
      
      const history = getNavHistory();
      const currentPage = window.location.pathname + window.location.search;
      
      // Remove current page from history
      while (history.length > 0 && history[history.length - 1] === currentPage) {
        history.pop();
      }
      
      if (history.length > 0) {
        const previousPage = history[history.length - 1];
        // Don't remove it yet - let the next page load handle that
        saveNavHistory(history);
        window.location.href = previousPage;
      } else {
        // No history, go to project root or home
        if (projectId) {
          window.location.href = '/p/' + projectId + '/';
        } else {
          window.location.href = '/';
        }
      }
    }

    async function copyCode(id, buttonEl) {
      const codeEl = document.getElementById('code-' + id);
      if (!codeEl) return;

      const code = codeEl.textContent;
      const btn = buttonEl;
      const originalLabel = btn ? btn.getAttribute('data-label') || 'Copy to clipboard' : 'Copy';
      const copiedLabel = btn ? btn.getAttribute('data-copied') || 'Copied!' : 'Copied!';
      const statusEl = btn ? btn.parentElement?.querySelector('.copy-status') : null;

      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(code);
        } else {
          const textarea = document.createElement('textarea');
          textarea.value = code;
          textarea.setAttribute('readonly', '');
          textarea.style.position = 'fixed';
          textarea.style.opacity = '0';
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand('copy');
          document.body.removeChild(textarea);
        }

        if (btn) {
          btn.classList.add('copied');
          btn.setAttribute('title', copiedLabel);
          if (statusEl) statusEl.textContent = copiedLabel;
          setTimeout(() => {
            btn.classList.remove('copied');
            btn.setAttribute('title', originalLabel);
            if (statusEl) statusEl.textContent = '';
          }, 1600);
        }
      } catch (e) {
        if (btn) {
          btn.classList.remove('copied');
          btn.setAttribute('title', 'Copy failed');
          if (statusEl) statusEl.textContent = 'Copy failed';
          setTimeout(() => {
            btn.setAttribute('title', originalLabel);
            if (statusEl) statusEl.textContent = '';
          }, 1400);
        }
      }
    }

    function getSvgDimensions(svg) {
      let width = parseFloat(svg.getAttribute('width'));
      let height = parseFloat(svg.getAttribute('height'));
      if ((!width || !height) && svg.viewBox && svg.viewBox.baseVal) {
        width = svg.viewBox.baseVal.width;
        height = svg.viewBox.baseVal.height;
      }
      if (!width || !height) {
        const bbox = svg.getBBox();
        width = bbox.width;
        height = bbox.height;
      }
      return { width: Math.ceil(width || 0), height: Math.ceil(height || 0) };
    }

    async function svgToPngDataUrl(svg) {
      const { width, height } = getSvgDimensions(svg);
      if (!width || !height) return null;
      const serializer = new XMLSerializer();
      let svgString = serializer.serializeToString(svg);
      if (!svgString.includes('xmlns=')) {
        svgString = svgString.replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"');
      }
      const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(svgBlob);
      try {
        const img = new Image();
        img.decoding = 'async';
        const loaded = new Promise((resolve, reject) => {
          img.onload = () => resolve();
          img.onerror = () => reject(new Error('Image load failed'));
        });
        img.src = url;
        await loaded;
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        return canvas.toDataURL('image/png');
      } finally {
        URL.revokeObjectURL(url);
      }
    }

    function buildCopyHtml(bodyHtml) {
      const styles = [
        'body {'
        + 'font-family: ui-sans-serif, system-ui, -apple-system, sans-serif;'
        + 'color: #111827;'
        + 'line-height: 1.7;'
        + 'font-size: 12pt;'
        + '}',
        'h1 { font-size: 2.2rem; margin: 1.5rem 0 1rem; }',
        'h2 { font-size: 1.6rem; margin: 2rem 0 1rem; border-bottom: 1px solid #e5e7eb; padding-bottom: 0.4rem; }',
        'h3 { font-size: 1.3rem; margin: 1.75rem 0 0.75rem; }',
        'p { margin: 0 0 1rem; }',
        'ul, ol { padding-left: 1.5rem; margin: 1rem 0; }',
        'li { margin: 0.4rem 0; }',
        'table { border-collapse: collapse; width: 100%; margin: 1.5rem 0; }',
        'th, td { border: 1px solid #e5e7eb; padding: 0.6rem 0.8rem; text-align: left; }',
        'th { background: #f9fafb; font-weight: 600; color: #4b5563; }',
        'blockquote {'
        + 'border-left: 4px solid #6366f1;'
        + 'margin: 1.5rem 0;'
        + 'padding: 0.8rem 1.2rem;'
        + 'background: #f5f7ff;'
        + 'color: #4b5563;'
        + 'border-radius: 0 6px 6px 0;'
        + '}',
        'img { max-width: 100%; height: auto; border-radius: 6px; border: 1px solid #e5e7eb; }',
        '.code-block-wrapper {'
        + 'margin: 1.5rem 0;'
        + 'border-radius: 10px;'
        + 'overflow: hidden;'
        + 'background: transparent !important;'
        + 'border: 1px solid #374151;'
        + '}',
        '.code-block-header { display: none; }',
        'pre {'
        + 'margin: 0;'
        + 'padding: 1.25rem;'
        + 'overflow-x: auto;'
        + 'font-family: ui-monospace, "JetBrains Mono", "SF Mono", monospace;'
        + 'font-size: 0.9rem;'
        + 'color: #e5e7eb;'
        + 'background: #1f2937;'
        + '}',
        'pre code { background: none; padding: 0; color: inherit; }',
        'code {'
        + 'font-family: ui-monospace, "JetBrains Mono", "SF Mono", monospace;'
        + 'background: transparent !important;'
        + 'padding: 0.2rem 0.4rem;'
        + 'border-radius: 4px;'
        + 'font-size: 0.9em;'
        + '}'
      ].join('');
      return '<!doctype html><html><head><meta charset="utf-8"><style>'
        + styles
        + '</style></head><body>'
        + bodyHtml
        + '</body></html>';
    }

    async function createExportClone(format) {
      const content = document.querySelector('.content-body');
      if (!content) return null;
      const clone = content.cloneNode(true);
      clone.querySelectorAll('.code-block-header').forEach(el => el.remove());
      clone.querySelectorAll('.copy-button').forEach(el => el.remove());
      clone.querySelectorAll('.heading-anchor').forEach(el => el.remove());
      clone.querySelectorAll('.reload-indicator').forEach(el => el.remove());
      clone.querySelectorAll('.doc-pagination').forEach(el => el.remove());

      if (format === 'default' || format === 'html') {
        const sourceMermaids = Array.from(content.querySelectorAll('.mermaid'));
        const cloneMermaids = Array.from(clone.querySelectorAll('.mermaid'));
        for (let i = 0; i < sourceMermaids.length; i += 1) {
          const svg = sourceMermaids[i].querySelector('svg');
          const cloneNode = cloneMermaids[i];
          if (!svg || !cloneNode) continue;
          try {
            const pngUrl = await svgToPngDataUrl(svg);
            if (!pngUrl) continue;
            const img = document.createElement('img');
            img.src = pngUrl;
            img.alt = 'Mermaid diagram';
            img.style.maxWidth = '100%';
            img.style.height = 'auto';
            img.style.display = 'block';
            img.style.margin = '0 auto';
            cloneNode.replaceWith(img);
          } catch (err) {
            continue;
          }
        }
      }

      return clone;
    }

    function toggleCopyPageMenu(e) {
      if (e) e.stopPropagation();
      const menu = document.getElementById('copy-page-menu');
      if (!menu) return;
      if (!menu.classList.contains('show')) {
        closeThemeMenu();
      }
      menu.classList.toggle('show');
    }

    document.addEventListener('click', (e) => {
      const menu = document.getElementById('copy-page-menu');
      const toggle = document.getElementById('copy-page-toggle');
      if (menu && toggle && !toggle.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove('show');
      }
      if (themeMenuEl && themeModeToggle && !themeModeToggle.contains(e.target) && !themeMenuEl.contains(e.target)) {
        closeThemeMenu();
      }
    });

    function htmlToMarkdown(element) {
      let md = '';
      const walk = (node) => {
        if (node.nodeType === Node.TEXT_NODE) {
          md += node.textContent;
          return;
        }
        if (node.nodeType !== Node.ELEMENT_NODE) return;
        const tag = node.tagName.toLowerCase();
        switch (tag) {
          case 'h1': md += '# '; node.childNodes.forEach(walk); md += '\\n\\n'; break;
          case 'h2': md += '## '; node.childNodes.forEach(walk); md += '\\n\\n'; break;
          case 'h3': md += '### '; node.childNodes.forEach(walk); md += '\\n\\n'; break;
          case 'h4': md += '#### '; node.childNodes.forEach(walk); md += '\\n\\n'; break;
          case 'h5': md += '##### '; node.childNodes.forEach(walk); md += '\\n\\n'; break;
          case 'h6': md += '###### '; node.childNodes.forEach(walk); md += '\\n\\n'; break;
          case 'p': node.childNodes.forEach(walk); md += '\\n\\n'; break;
          case 'br': md += '\\n'; break;
          case 'strong': case 'b': md += '**'; node.childNodes.forEach(walk); md += '**'; break;
          case 'em': case 'i': md += '*'; node.childNodes.forEach(walk); md += '*'; break;
          case 'code':
            if (node.parentElement && node.parentElement.tagName.toLowerCase() === 'pre') {
              node.childNodes.forEach(walk);
            } else {
              md += '\`'; node.childNodes.forEach(walk); md += '\`';
            }
            break;
          case 'pre':
            const codeEl = node.querySelector('code');
            const lang = codeEl ? (codeEl.className.match(/language-(\\w+)/)?.[1] || '') : '';
            md += '\`\`\`' + lang + '\\n';
            node.childNodes.forEach(walk);
            md += '\\n\`\`\`\\n\\n';
            break;
          case 'a':
            md += '['; node.childNodes.forEach(walk); md += '](' + (node.getAttribute('href') || '') + ')';
            break;
          case 'img':
            md += '![' + (node.getAttribute('alt') || '') + '](' + (node.getAttribute('src') || '') + ')';
            break;
          case 'ul': case 'ol':
            const isOrdered = tag === 'ol';
            let idx = 1;
            node.querySelectorAll(':scope > li').forEach(li => {
              md += (isOrdered ? (idx++ + '. ') : '- ');
              li.childNodes.forEach(walk);
              md += '\\n';
            });
            md += '\\n';
            break;
          case 'li': break; // handled by ul/ol
          case 'blockquote':
            const lines = [];
            node.childNodes.forEach(walk);
            break;
          case 'hr': md += '---\\n\\n'; break;
          case 'div':
            if (node.classList.contains('mermaid')) {
              md += '\`\`\`mermaid\\n' + node.textContent.trim() + '\\n\`\`\`\\n\\n';
            } else {
              node.childNodes.forEach(walk);
            }
            break;
          default: node.childNodes.forEach(walk); break;
        }
      };
      element.childNodes.forEach(walk);
      return md.replace(/\\n{3,}/g, '\\n\\n').trim();
    }

    async function copyPageAs(format) {
      const menu = document.getElementById('copy-page-menu');
      menu.classList.remove('show');
      const clone = await createExportClone(format);
      if (!clone) return;

      const htmlContent = buildCopyHtml(clone.innerHTML);
      const textContent = clone.innerText;

      try {
        if (format === 'default') {
          await navigator.clipboard.write([
            new ClipboardItem({
              'text/html': new Blob([htmlContent], { type: 'text/html' }),
              'text/plain': new Blob([textContent], { type: 'text/plain' })
            })
          ]);
        } else if (format === 'html') {
          await navigator.clipboard.writeText(htmlContent);
        } else if (format === 'markdown') {
          await navigator.clipboard.writeText(htmlToMarkdown(clone));
        } else {
          await navigator.clipboard.writeText(textContent);
        }
      } catch (err) {
        await navigator.clipboard.writeText(textContent);
      }

      showCopyFeedback();
    }

    async function downloadPageAsPdf() {
      const menu = document.getElementById('copy-page-menu');
      if (menu) menu.classList.remove('show');
      const originalTitle = document.title;
      const pdfTitle = (pageTitle || document.title || 'document').replace(/[\\/:*?"<>|]+/g, '-');
      const restoreTitle = () => {
        document.title = originalTitle;
        window.removeEventListener('afterprint', restoreTitle);
      };
      document.title = pdfTitle;
      window.addEventListener('afterprint', restoreTitle);
      window.print();
    }

    function showCopyFeedback() {
      if (!copyButton) return;
      const pageActions = document.getElementById('page-actions');
      const originalIcon = copyButton.innerHTML;
      copyButton.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';
      copyButton.classList.add('copied');
      if (pageActions) pageActions.classList.add('copied');
      copyButton.title = 'Copied!';
      setTimeout(() => {
        copyButton.innerHTML = originalIcon;
        copyButton.classList.remove('copied');
        if (pageActions) pageActions.classList.remove('copied');
        copyButton.title = 'Copy document';
      }, 2000);
    }

    function isMobileSidebar() {
      return window.matchMedia('(max-width: 960px)').matches;
    }

    function isCompactDocsLayout() {
      return window.matchMedia('(max-width: 1200px)').matches;
    }

    function getMobileDrawerFocusables() {
      if (!sidebarEl) return [];
      return Array.from(sidebarEl.querySelectorAll(drawerFocusSelector)).filter(
        (el) => !el.hasAttribute('disabled') && el.getAttribute('aria-hidden') !== 'true',
      );
    }

    function focusMobileDrawerStart() {
      const focusables = getMobileDrawerFocusables();
      if (focusables.length > 0) {
        focusables[0].focus();
        return;
      }
      sidebarEl?.focus();
    }

    function restoreMobileNavFocus() {
      const target = mobileNavLastFocusedEl && typeof mobileNavLastFocusedEl.focus === 'function'
        ? mobileNavLastFocusedEl
        : mobileNavToggleButton;
      mobileNavLastFocusedEl = null;
      target?.focus();
    }

    function syncMobileDrawerState() {
      const mobile = isMobileSidebar();
      const navOpen = document.body.classList.contains('mobile-nav-open');
      const overlayOpen = navOpen;

      if (mobileOverlayScrimEl) {
        mobileOverlayScrimEl.classList.toggle('active', overlayOpen && mobile);
      }

      if (mobileNavToggleButton) {
        mobileNavToggleButton.setAttribute('aria-expanded', navOpen ? 'true' : 'false');
        mobileNavToggleButton.setAttribute('aria-label', navOpen ? 'Close menu' : 'Open menu');
        mobileNavToggleButton.setAttribute('title', navOpen ? 'Close menu' : 'Open menu');
      }

      if (sidebarEl) {
        sidebarEl.setAttribute('aria-hidden', mobile ? (navOpen ? 'false' : 'true') : 'false');
        if (mobile) {
          sidebarEl.setAttribute('role', 'dialog');
          sidebarEl.setAttribute('aria-modal', navOpen ? 'true' : 'false');
          sidebarEl.setAttribute('aria-label', 'Navigation menu');
        } else {
          sidebarEl.removeAttribute('role');
          sidebarEl.removeAttribute('aria-modal');
          sidebarEl.removeAttribute('aria-label');
        }
      }

      if (mainEl) {
        mainEl.toggleAttribute('inert', mobile && navOpen);
        mainEl.setAttribute('aria-hidden', mobile && navOpen ? 'true' : 'false');
      }

      if (tocSidebarEl) {
        tocSidebarEl.setAttribute('aria-hidden', 'false');
      }
    }

    function closeMobileDrawers() {
      const wasOpen = document.body.classList.contains('mobile-nav-open');
      document.body.classList.remove('mobile-nav-open');
      syncMobileDrawerState();
      if (wasOpen) restoreMobileNavFocus();
    }

    function closeMobileNav() {
      const wasOpen = document.body.classList.contains('mobile-nav-open');
      document.body.classList.remove('mobile-nav-open');
      syncMobileDrawerState();
      if (wasOpen) restoreMobileNavFocus();
    }

    function toggleMobileNav(forceState) {
      if (!isMobileSidebar()) return;
      const shouldOpen = typeof forceState === 'boolean'
        ? forceState
        : !document.body.classList.contains('mobile-nav-open');
      if (shouldOpen) {
        mobileNavLastFocusedEl = document.activeElement instanceof HTMLElement
          ? document.activeElement
          : mobileNavToggleButton;
      }
      document.body.classList.toggle('mobile-nav-open', shouldOpen);
      syncMobileDrawerState();
      if (shouldOpen) {
        requestAnimationFrame(focusMobileDrawerStart);
      } else {
        restoreMobileNavFocus();
      }
    }

    function getStoredNavState() {
      try {
        return JSON.parse(localStorage.getItem(NAV_STATE_STORAGE_KEY) || '{}');
      } catch (e) {
        return {};
      }
    }

    function saveStoredNavState(state) {
      try {
        localStorage.setItem(NAV_STATE_STORAGE_KEY, JSON.stringify(state));
      } catch (e) {
        // Ignore storage errors
      }
    }

    function getSidebarScrollState() {
      try {
        return JSON.parse(localStorage.getItem(SIDEBAR_SCROLL_STORAGE_KEY) || '{}');
      } catch (e) {
        return {};
      }
    }

    function saveSidebarScrollState(state) {
      try {
        localStorage.setItem(SIDEBAR_SCROLL_STORAGE_KEY, JSON.stringify(state));
      } catch (e) {
        // Ignore storage errors
      }
    }

    function getSidebarScrollKey() {
      return projectId || 'dashboard';
    }

    function persistSidebarScroll() {
      if (!sidebarContentEl) return;
      const state = getSidebarScrollState();
      state[getSidebarScrollKey()] = sidebarContentEl.scrollTop;
      saveSidebarScrollState(state);
    }

    function restoreSidebarScroll() {
      if (!sidebarContentEl) return false;
      const state = getSidebarScrollState();
      const savedScrollTop = state[getSidebarScrollKey()];
      if (typeof savedScrollTop !== 'number' || savedScrollTop <= 0) return false;

      requestAnimationFrame(() => {
        sidebarContentEl.scrollTop = savedScrollTop;
      });
      return true;
    }

    function showAddProject() {
      document.getElementById('project-id').value = '';
      document.getElementById('project-name-input').value = '';
      document.getElementById('project-path-input').value = '';
      document.getElementById('project-modal').classList.add('active');
    }

    function showProjectModal() {
      if (!projectId) {
        showAddProject();
        return;
      }

      document.getElementById('project-id').value = projectId;
      document.getElementById('project-name-input').value = currentProjectName || '';
      document.getElementById('project-path-input').value = currentProjectPath || '';
      document.getElementById('project-modal').classList.add('active');
    }

    function hideProjectModal() {
      document.getElementById('project-modal').classList.remove('active');
    }

    async function renameProject(id, currentName) {
      const name = prompt('Rename project to:', currentName);
      if (name && name !== currentName) await updateProject(id, { name });
    }

    function renameCurrentProject() {
      if (!projectId) return;
      renameProject(projectId, currentProjectName || 'Project');
    }

    async function updateProject(id, data) {
      const res = await fetch('/api/projects/' + id, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (res.ok) location.reload();
    }

    async function deleteProject(id) {
      if (!confirm('Remove this project?')) return;
      const res = await fetch('/api/projects/' + id, { method: 'DELETE' });
      if (res.ok) location.href = '/';
    }

    function deleteCurrentProject() {
      if (!projectId) return;
      deleteProject(projectId);
    }

    function normalizeFavoritePath(pathname) {
      if (!pathname || pathname === '/') return '';
      return pathname.replace(/^\\/+/, '').replace(/\\/+$/, '');
    }

    function getFavoriteForPath(pathValue) {
      const currentPath = normalizeFavoritePath(pathValue);
      if (!currentPath && currentPath !== '') return null;
      return favorites.find((favorite) => normalizeFavoritePath(favorite.path) === currentPath);
    }

    function getCurrentFavorite() {
      if (favoritePath === null) return null;
      return getFavoriteForPath(favoritePath);
    }

    function updateFavoriteButtons() {
      document.querySelectorAll('.docs-nav-favorite-button').forEach((button) => {
        const buttonPath = button.dataset.favoritePath || '';
        const favorite = getFavoriteForPath(buttonPath);
        const isFavorite = !!favorite;
        button.classList.toggle('is-favorite', isFavorite);
        button.closest('.docs-nav-leaf-item')?.classList.toggle('is-favorited', isFavorite);
        button.setAttribute('aria-pressed', isFavorite ? 'true' : 'false');
        button.setAttribute('aria-label', isFavorite ? 'Remove from pinned' : 'Add to pinned');
        button.title = isFavorite ? 'Remove from pinned' : 'Add to pinned';
        button.textContent = isFavorite ? '★' : '☆';
      });
    }

    async function toggleFavorite() {
      if (!projectId || favoritePath === null) return;
      const currentFavorite = getCurrentFavorite();
      if (currentFavorite) {
        await removeFavorite(projectId, currentFavorite.id);
      } else {
        await addFavorite(projectId, favoritePath, pageTitle || 'Untitled');
      }
    }

    async function toggleFavoritePath(pathValue, name) {
      if (!projectId) return;
      const normalizedPath = normalizeFavoritePath(pathValue);
      const currentFavorite = getFavoriteForPath(normalizedPath);
      if (currentFavorite) {
        await removeFavorite(projectId, currentFavorite.id);
      } else {
        await addFavorite(projectId, normalizedPath, name || 'Untitled');
      }
    }

    async function addFavorite(id, targetPath, targetName) {
      const payload = {
        name: targetName || pageTitle || 'Untitled',
        path: normalizeFavoritePath(targetPath),
      };
      const res = await fetch('/api/projects/' + id + '/favorites', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (res.ok) location.reload();
    }

    async function renameFavorite(projectId, favoriteId, currentName) {
      const name = prompt('Rename favorite to:', currentName);
      if (name && name !== currentName) {
        const res = await fetch(
          '/api/projects/' + projectId + '/favorites/' + favoriteId,
          {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name }),
          },
        );
        if (res.ok) location.reload();
      }
    }

    async function removeFavorite(projectId, favoriteId) {
      const res = await fetch(
        '/api/projects/' + projectId + '/favorites/' + favoriteId,
        { method: 'DELETE' },
      );
      if (res.ok) location.reload();
    }

    async function deleteFavorite(projectId, favoriteId) {
      if (!confirm('Remove this favorite?')) return;
      await removeFavorite(projectId, favoriteId);
    }

    async function saveProject() {
      const id = document.getElementById('project-id').value;
      const name = document.getElementById('project-name-input').value;
      const path = document.getElementById('project-path-input').value;
      if (!name || !path) return alert('Name and Path are required');
      const res = await fetch('/api/projects' + (id ? '/' + id : ''), {
        method: id ? 'PATCH' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, path })
      });
      if (res.ok) location.reload();
    }

    async function toggleBrowser() {
      const browser = document.getElementById('file-browser');
      if (browser.style.display === 'none') {
        browser.style.display = 'block';
        await browseTo(document.getElementById('project-path-input').value || '');
      } else {
        browser.style.display = 'none';
      }
    }

    async function browseTo(path) {
      const res = await fetch('/api/browse?path=' + encodeURIComponent(path));
      if (!res.ok) return;
      const data = await res.json();
      document.getElementById('project-path-input').value = data.currentPath;
      const container = document.getElementById('file-browser');
      container.innerHTML = '';
      if (data.parentPath && data.parentPath !== data.currentPath) {
        const item = document.createElement('div');
        item.className = 'browser-item';
        item.innerHTML = '📁 .. (Up)';
        item.onclick = () => browseTo(data.parentPath);
        container.appendChild(item);
      }
      data.entries.filter(e => e.isDirectory).forEach(entry => {
        const item = document.createElement('div');
        item.className = 'browser-item';
        item.innerHTML = '📁 ' + entry.name;
        item.onclick = () => browseTo(entry.path);
        container.appendChild(item);
      });
    }

    if (projectId) {
      function connectSSE() {
        if (evtSource) {
          evtSource.close();
          evtSource = null;
        }
        
        evtSource = new EventSource('/__reload?projectId=' + projectId);
        
        evtSource.onmessage = (e) => {
          if (e.data === 'reload') {
            document.getElementById('reload-indicator').classList.add('show');
            saveLiveReloadScrollPosition();
            evtSource.close();
            evtSource = null;
            setTimeout(() => location.reload(), 500);
          }
        };
        
        evtSource.onerror = () => {
          // Connection lost, close and don't reconnect automatically
          if (evtSource) {
            evtSource.close();
            evtSource = null;
          }
        };
      }
      
      connectSSE();
      
      // Close connection when navigating away
      window.addEventListener('beforeunload', () => {
        if (evtSource) {
          evtSource.close();
          evtSource = null;
        }
      });
      
      // Also close on pagehide (for bfcache)
      window.addEventListener('pagehide', () => {
        if (evtSource) {
          evtSource.close();
          evtSource = null;
        }
      });
    }

    const modal = document.getElementById('diagram-modal');
    const modalContent = document.getElementById('modal-content');
    const modalClose = document.getElementById('modal-close');
    function openModal(content) {
      if (typeof content === 'string') {
        modalContent.innerHTML = content;
      } else {
        modalContent.innerHTML = '';
        modalContent.appendChild(content);
      }
      modal.style.display = 'flex';
      const svg = modalContent.querySelector('svg');
      if (svg) {
        svg.removeAttribute('width'); svg.removeAttribute('height');
        svg.style.width = '100%'; svg.style.height = 'auto';
      }
    }

    function openImageModal(sourceImage) {
      const enlargedImage = document.createElement('img');
      enlargedImage.src = sourceImage.currentSrc || sourceImage.src;
      enlargedImage.alt = sourceImage.alt || '';
      enlargedImage.style.maxWidth = '100%';
      enlargedImage.style.height = 'auto';
      enlargedImage.style.display = 'block';
      enlargedImage.style.margin = '0 auto';
      openModal(enlargedImage);
    }

    document.addEventListener('click', (e) => {
      const mermaid = e.target.closest('.mermaid');
      if (mermaid) {
        openModal(mermaid.innerHTML);
        return;
      }

      const image = e.target.closest('.content-body img, .editor-preview img');
      if (image && !modalContent.contains(image)) {
        e.preventDefault();
        const imageLink = image.closest('a');
        if (imageLink) {
          e.stopPropagation();
        }
        openImageModal(image);
      }
    });
    modalClose.onclick = () => { modal.style.display = 'none'; };
    modal.onclick = (e) => { if (e.target === modal) modalClose.onclick(); };
    window.addEventListener('popstate', (event) => {
      const active = !!(event.state && event.state.contentOnly);
      contentOnlyHistoryActive = active;
      setContentOnlyMode(active);
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (modal.style.display === 'flex') modalClose.onclick();
        hideProjectModal();
        closeThemeMenu();
        if (document.body.classList.contains('mobile-nav-open')) {
          closeMobileDrawers();
          return;
        }
        if (searchModal && searchModal.classList.contains('active')) return;
        if (exitContentOnlyMode()) return;
      }

      if (e.key === 'Tab' && isMobileSidebar() && document.body.classList.contains('mobile-nav-open')) {
        const focusables = getMobileDrawerFocusables();
        if (focusables.length === 0) {
          e.preventDefault();
          sidebarEl?.focus();
          return;
        }

        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        const activeEl = document.activeElement;

        if (e.shiftKey && (activeEl === first || activeEl === sidebarEl)) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && activeEl === last) {
          e.preventDefault();
          first.focus();
        }
      }
    });

    function applyStoredNavState() {
      const storedState = getStoredNavState();
      document.querySelectorAll('[data-doc-branch]').forEach((branch) => {
        const path = branch.dataset.path || '';
        if (!(path in storedState)) return;
        if (branch.querySelector('.docs-nav-link.is-active, .docs-nav-row.is-active')) return;
        const isOpen = !!storedState[path];
        branch.open = isOpen;
      });
    }

    function bindDocsNavigation() {
      const navRoot = document.querySelector('.docs-nav-panel');
      if (!navRoot) return;

      applyStoredNavState();

      document.querySelectorAll('[data-doc-branch]').forEach((branch) => {
        branch.addEventListener('toggle', () => {
          branch.classList.toggle('is-open', branch.open);
          const storedState = getStoredNavState();
          storedState[branch.dataset.path || ''] = branch.open;
          saveStoredNavState(storedState);
        });
      });

      navRoot.addEventListener('click', (event) => {
        const favoriteToggle = event.target.closest('.docs-nav-favorite-button');
        if (favoriteToggle) {
          event.preventDefault();
          event.stopPropagation();
          toggleFavoritePath(
            favoriteToggle.dataset.favoritePath || '',
            favoriteToggle.dataset.favoriteName || 'Untitled',
          );
          return;
        }
        if (isMobileSidebar()) {
          const link = event.target.closest('.docs-nav-link, .project-link, .favorite-link');
          if (link) {
            closeMobileNav();
          }
        }
      });

      const restoredSidebarScroll = restoreSidebarScroll();
      const activeLeaf = navRoot.querySelector('.docs-nav-link.is-active, .docs-nav-row.is-active .docs-nav-link');
      if (activeLeaf && !restoredSidebarScroll) {
        requestAnimationFrame(() => {
          activeLeaf.scrollIntoView({ block: 'nearest' });
        });
      }
    }

    function generateTOC() {
      if (!tocSidebarEl) return;
      tocSidebarEl.innerHTML = '';

      const headings = document.querySelectorAll('.content-body h2, .content-body h3');
      if (headings.length < 2) return;

      tocSidebarEl.innerHTML = '<details class="toc-details" open><summary class="toc-summary"><span class="toc-summary-label">On this page</span><span class="toc-summary-current"></span></summary><div class="toc-panel"><div class="toc-title">On this page</div><ul class="toc-list"></ul></div></details>';
      const tocDetailsEl = tocSidebarEl.querySelector('.toc-details');
      const tocSummaryCurrentEl = tocSidebarEl.querySelector('.toc-summary-current');
      const list = tocSidebarEl.querySelector('ul');
      let previousCompactLayout = isCompactDocsLayout();

      const syncTocLayout = (force = false) => {
        if (!tocDetailsEl) return;
        const compactLayout = isCompactDocsLayout();

        if (compactLayout) {
          if (force || compactLayout !== previousCompactLayout) {
            tocDetailsEl.open = false;
          }
        } else {
          tocDetailsEl.open = true;
        }

        previousCompactLayout = compactLayout;
      };

      const overviewLink = document.createElement('a');
      overviewLink.href = '#_top';
      overviewLink.textContent = 'Overview';
      overviewLink.dataset.target = '_top';
      const overviewItem = document.createElement('li');
      overviewItem.appendChild(overviewLink);
      list.appendChild(overviewItem);

      headings.forEach(h => {
        const a = document.createElement('a');
        a.href = '#' + h.id;
        a.textContent = h.textContent.replace(/#$/, '');
        a.dataset.target = h.id;
        if (h.tagName === 'H3') a.classList.add('toc-h3');
        const li = document.createElement('li');
        li.appendChild(a);
        list.appendChild(li);
      });
      const tocLinks = tocSidebarEl.querySelectorAll('a');
      tocSidebarEl.onclick = (event) => {
        if (isCompactDocsLayout() && event.target.closest('a')) {
          tocDetailsEl?.removeAttribute('open');
        }
      };
      const syncTocSummary = () => {
        const activeLink = tocSidebarEl.querySelector('.toc-list a.active') || tocLinks[0];
        if (tocSummaryCurrentEl && activeLink) {
          tocSummaryCurrentEl.textContent = activeLink.textContent;
        }
      };
      mainEl.addEventListener('scroll', () => {
        let current = '_top';
        headings.forEach(h => { if (h.getBoundingClientRect().top <= 100) current = h.id; });
        tocLinks.forEach(link => link.classList.toggle('active', link.dataset.target === current));
        syncTocSummary();
      }, { passive: true });
      window.addEventListener('resize', () => {
        syncTocLayout();
      });
      syncTocLayout(true);
      syncTocSummary();
    }

    mainEl.addEventListener('scroll', () => {
      const st = mainEl.scrollTop;
      const sh = mainEl.scrollHeight - mainEl.clientHeight;
      const percent = sh > 0 ? (st / sh) * 100 : 0;
      document.getElementById('progress-bar').style.width = percent + '%';
      document.getElementById('scroll-status').innerText = Math.round(percent) + '% READ';
    }, { passive: true });

    generateTOC();
    bindDocsNavigation();
    setThemeMode(SERVER_THEME_MODE, false, false);
    setThemePreset(SERVER_THEME_PRESET);
    syncContentOnlyButton();
    enhanceScannability(document.querySelector('.content-body'));
    hljs.highlightAll();
    restoreLiveReloadScrollPosition();
    if (copyButton) copyButton.addEventListener('click', () => copyPageAs('default'));
    const copyToggle = document.getElementById('copy-page-toggle');
    if (copyToggle) copyToggle.addEventListener('click', toggleCopyPageMenu);
    if (themePresetSelect) {
      themePresetSelect.addEventListener('change', (event) => {
        setThemePreset(event.target.value, true);
      });
    }
    colorSchemeMediaQuery.addEventListener('change', () => {
      const activeMode = document.documentElement.dataset.themeMode || SERVER_THEME_MODE;
      applyThemeMode(activeMode);
      applyMermaidTheme(themePresetSelect ? themePresetSelect.value : SERVER_THEME_PRESET);
    });
    if (projectSwitcher) {
      projectSwitcher.addEventListener('change', (event) => {
        const nextProjectId = event.target.value;
        if (!nextProjectId) return;
        persistSidebarScroll();
        window.location.href = '/p/' + nextProjectId + '/';
      });
    }
    if (sidebarContentEl) {
      sidebarContentEl.addEventListener('scroll', persistSidebarScroll, { passive: true });
    }
    syncMobileDrawerState();
    window.addEventListener('resize', () => {
      if (!isMobileSidebar()) {
        closeMobileDrawers();
      }
    });
    updateFavoriteButtons();
    if (gitDiffButton) loadGitDiffState();

    // Editor functionality
    const editorTextarea = document.getElementById('editor-textarea');
    const editorPreview = document.getElementById('editor-preview');
    const editorStatus = document.getElementById('editor-status');
    const editorLineCount = document.getElementById('editor-line-count');
    const editorNavSaveButton = document.getElementById('editor-nav-save-button');
    const editorToolbarSaveButton = document.getElementById('editor-toolbar-save-button');
    let previewDebounce = null;
    let isEditing = false;
    let editorSaveInProgress = false;

    function setEditorSavingState(isSaving) {
      [editorNavSaveButton, editorToolbarSaveButton].forEach((button) => {
        if (!button) return;
        button.disabled = isSaving;
        button.classList.toggle('is-saving', isSaving);
        button.innerHTML = isSaving
          ? '<span class="button-spinner" aria-hidden="true"></span><span>Saving</span>'
          : 'Save';
      });
    }

    async function openEditor() {
      if (!projectId || !filePath) return;
      if (!editorStatus) return;
      editorStatus.className = 'editor-status';
      editorStatus.innerHTML = '<span>Loading...</span>';
      document.body.classList.add('editing');
      document.body.classList.remove('show-preview');
      syncEditorPreviewToggle();
      isEditing = true;
      try {
        const res = await fetch('/api/file?projectId=' + projectId + '&path=' + encodeURIComponent(filePath));
        if (!res.ok) throw new Error('Failed to load file');
        const data = await res.json();
        editorTextarea.value = data.content;
        editorDirty = false;
        updateEditorPreview();
        updateLineCount();
        editorStatus.innerHTML = '<span>Press Ctrl+S to save</span>';
        // Set cursor to beginning and scroll to top
        editorTextarea.setSelectionRange(0, 0);
        editorTextarea.focus();
        editorTextarea.scrollTop = 0;
      } catch (e) {
        editorStatus.className = 'editor-status error';
        editorStatus.innerHTML = '<span>Error: ' + e.message + '</span>';
      }
    }

    function closeEditor() {
      if (editorDirty && !confirm('You have unsaved changes. Discard them?')) return;
      document.body.classList.remove('editing');
      document.body.classList.remove('show-preview');
      syncEditorPreviewToggle();
      isEditing = false;
      editorDirty = false;
      // Reload to show updated content
      if (editorTextarea && editorTextarea.value) {
        location.reload();
      }
    }

    async function saveFile() {
      if (!projectId || !filePath || editorSaveInProgress) return;
      editorSaveInProgress = true;
      setEditorSavingState(true);
      editorStatus.className = 'editor-status saving';
      editorStatus.innerHTML = '<span class="status-spinner" aria-hidden="true"></span><span>Saving changes...</span>';
      try {
        const res = await fetch('/api/file?projectId=' + projectId + '&path=' + encodeURIComponent(filePath), {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ content: editorTextarea.value })
        });
        if (!res.ok) throw new Error('Failed to save file');
        editorDirty = false;
        await loadGitDiffState();
        editorStatus.className = 'editor-status saving';
        editorStatus.innerHTML = '<span class="status-spinner" aria-hidden="true"></span><span>Saving changes...</span>';
      } catch (e) {
        editorStatus.className = 'editor-status error';
        editorStatus.innerHTML = '<span>Error: ' + e.message + '</span>';
        editorSaveInProgress = false;
        setEditorSavingState(false);
      } finally {
        if (editorStatus.classList.contains('error')) {
          editorSaveInProgress = false;
          setEditorSavingState(false);
        }
      }
    }

    function updateEditorPreview() {
      // Simple markdown preview - marked library is loaded via CDN
      try {
        editorPreview.innerHTML = marked.parse(editorTextarea.value);
        enhanceScannability(editorPreview);
        renderMermaidDiagrams(editorPreview);
        // Highlight code blocks
        editorPreview.querySelectorAll('pre code').forEach(block => {
          hljs.highlightElement(block);
        });
      } catch (e) {
        editorPreview.innerHTML = '<p style="color:#ef4444;">Preview error: ' + e.message + '</p>';
      }
    }

    function updateLineCount() {
      const lines = editorTextarea.value.split('\\n').length;
      editorLineCount.textContent = lines + ' line' + (lines !== 1 ? 's' : '');
    }

    function insertAtCursor(before, after = '', placeholder = '') {
      const scrollTop = editorTextarea.scrollTop;
      const start = editorTextarea.selectionStart;
      const end = editorTextarea.selectionEnd;
      const text = editorTextarea.value;
      const selectedText = text.substring(start, end) || placeholder;
      const newText = text.substring(0, start) + before + selectedText + after + text.substring(end);
      editorTextarea.value = newText;
      // Position cursor appropriately
      if (text.substring(start, end)) {
        // Had selection, move cursor to end
        editorTextarea.selectionStart = editorTextarea.selectionEnd = start + before.length + selectedText.length + after.length;
      } else {
        // No selection, select the placeholder
        editorTextarea.selectionStart = start + before.length;
        editorTextarea.selectionEnd = start + before.length + placeholder.length;
      }
      // Restore scroll position and focus
      editorTextarea.scrollTop = scrollTop;
      editorTextarea.focus();
      editorDirty = true;
      updateLineCount();
      if (previewDebounce) clearTimeout(previewDebounce);
      previewDebounce = setTimeout(updateEditorPreview, 300);
    }

    function insertHeading(level) {
      const scrollTop = editorTextarea.scrollTop;
      const prefix = '#'.repeat(level) + ' ';
      const start = editorTextarea.selectionStart;
      const text = editorTextarea.value;
      // Find start of current line
      let lineStart = start;
      while (lineStart > 0 && text[lineStart - 1] !== '\\n') lineStart--;
      // Check if line already has heading
      const lineEnd = text.indexOf('\\n', start);
      const line = text.substring(lineStart, lineEnd === -1 ? text.length : lineEnd);
      const existingHeading = line.match(/^#{1,6}\\s*/);
      if (existingHeading) {
        // Replace existing heading level
        const newLine = prefix + line.substring(existingHeading[0].length);
        editorTextarea.value = text.substring(0, lineStart) + newLine + text.substring(lineEnd === -1 ? text.length : lineEnd);
      } else {
        // Insert heading prefix
        editorTextarea.value = text.substring(0, lineStart) + prefix + text.substring(lineStart);
      }
      // Restore scroll position and focus
      editorTextarea.scrollTop = scrollTop;
      editorTextarea.focus();
      editorDirty = true;
      updateLineCount();
      if (previewDebounce) clearTimeout(previewDebounce);
      previewDebounce = setTimeout(updateEditorPreview, 300);
    }

    function insertFormat(type) {
      switch (type) {
        case 'bold':
          insertAtCursor('**', '**', 'bold text');
          break;
        case 'italic':
          insertAtCursor('*', '*', 'italic text');
          break;
        case 'link':
          insertAtCursor('[', '](url)', 'link text');
          break;
        case 'image':
          insertAtCursor('![', '](image-url)', 'alt text');
          break;
        case 'code':
          insertAtCursor('\\n\`\`\`\\n', '\\n\`\`\`\\n', 'code here');
          break;
        case 'mermaid':
          insertAtCursor('\\n\`\`\`mermaid\\n', '\\n\`\`\`\\n', 'graph TD\\n    A[Start] --> B[End]');
          break;
        case 'bullet':
          insertAtCursor('\\n- ', '', 'List item');
          break;
        case 'numbered':
          insertAtCursor('\\n1. ', '', 'List item');
          break;
        case 'blockquote':
          insertAtCursor('\\n> ', '', 'Quote text');
          break;
        case 'table':
          insertAtCursor('\\n| Header 1 | Header 2 | Header 3 |\\n|----------|----------|----------|\\n| Cell 1   | Cell 2   | Cell 3   |\\n| Cell 4   | Cell 5   | Cell 6   |\\n', '', '');
          break;
        case 'hr':
          insertAtCursor('\\n---\\n', '', '');
          break;
      }
    }

    function toggleEditorPreview() {
      document.body.classList.toggle('show-preview');
      syncEditorPreviewToggle();
    }

    function syncEditorPreviewToggle() {
      if (!editorPreviewToggle) return;
      const showingPreview = document.body.classList.contains('show-preview');
      editorPreviewToggle.textContent = showingPreview ? 'Write' : 'Preview';
      editorPreviewToggle.classList.toggle('active', showingPreview);
    }

    if (editorTextarea) {
      editorTextarea.addEventListener('input', () => {
        editorDirty = true;
        updateLineCount();
        if (previewDebounce) clearTimeout(previewDebounce);
        previewDebounce = setTimeout(updateEditorPreview, 300);
      });
      // Handle Tab key for indentation
      editorTextarea.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
          e.preventDefault();
          const start = editorTextarea.selectionStart;
          const end = editorTextarea.selectionEnd;
          editorTextarea.value = editorTextarea.value.substring(0, start) + '  ' + editorTextarea.value.substring(end);
          editorTextarea.selectionStart = editorTextarea.selectionEnd = start + 2;
          editorDirty = true;
        }
      });
    }

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      if (gitDiffModal && gitDiffModal.classList.contains('active') && e.key === 'Escape') {
        e.preventDefault();
        closeGitDiff();
        return;
      }
      if (isEditing) {
        if (e.key === 'Escape') {
          e.preventDefault();
          closeEditor();
        } else if ((e.ctrlKey || e.metaKey) && e.key === 's') {
          e.preventDefault();
          saveFile();
        } else if ((e.ctrlKey || e.metaKey) && e.key === 'b') {
          e.preventDefault();
          insertFormat('bold');
        } else if ((e.ctrlKey || e.metaKey) && e.key === 'i') {
          e.preventDefault();
          insertFormat('italic');
        }
      }
    });

    // Warn before leaving with unsaved changes
    window.addEventListener('beforeunload', (e) => {
      if (editorDirty) {
        e.preventDefault();
        e.returnValue = '';
      }
    });

    // Search functionality (Command Palette)
    const searchModal = document.getElementById('search-modal');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    const searchEmpty = document.getElementById('search-empty');
    let searchDebounce = null;
    let searchSelectedIndex = -1;
    let currentSearchResults = [];

    function openSearch() {
      if (isEditing) return; // Don't open search while editing
      searchModal.classList.add('active');
      searchInput.value = '';
      searchInput.focus();
      searchResults.innerHTML = '';
      searchResults.appendChild(searchEmpty);
      searchEmpty.style.display = 'block';
      searchEmpty.textContent = 'Type to search for files and content';
      searchSelectedIndex = -1;
      currentSearchResults = [];
    }

    function closeSearch() {
      searchModal.classList.remove('active');
      searchInput.value = '';
      searchSelectedIndex = -1;
      currentSearchResults = [];
    }

    function highlightMatch(text, query) {
      if (!query) return text;
      // Split query into words and highlight each
      const words = query.trim().split(/\\s+/).filter(w => w.length > 0);
      let result = text;
      for (const word of words) {
        const escapedWord = word.replace(/[.*+?^\${}()|[\\]\\\\]/g, '\\\\$&');
        const regex = new RegExp('(' + escapedWord + ')', 'gi');
        result = result.replace(regex, '<mark>$1</mark>');
      }
      return result;
    }

    function renderSearchResults(results, query) {
      currentSearchResults = results;
      searchResults.innerHTML = '';
      
      if (results.length === 0) {
        searchEmpty.textContent = 'No results found for "' + query + '"';
        searchEmpty.style.display = 'block';
        searchResults.appendChild(searchEmpty);
        return;
      }

      searchEmpty.style.display = 'none';
      
      results.forEach((result, index) => {
        const item = document.createElement('div');
        item.className = 'search-result-item' + (index === searchSelectedIndex ? ' selected' : '');
        item.dataset.index = index;
        
        // Different icons for different result types
        let icon;
        if (result.type === 'filename') {
          icon = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>';
        } else if (result.type === 'title') {
          icon = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12h8"></path><path d="M4 18V6"></path><path d="M12 18V6"></path><path d="M21 12h-5"></path><path d="M21 6l-5 6 5 6"></path></svg>';
        } else {
          icon = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>';
        }
        
        const projectLabel = !projectId && result.projectName 
          ? '<span style="color: var(--text-muted); font-size: 0.75rem; margin-left: 0.5rem;">' + result.projectName + '</span>' 
          : '';
        
        // Show snippet for title and content matches
        const snippetHtml = (result.type === 'content' || result.type === 'title') && result.snippet
          ? '<div class="search-result-snippet">' + highlightMatch(result.snippet, query) + '</div>'
          : '';
        
        // Type labels
        const typeLabels = { filename: 'File', title: 'Title', content: 'Content' };
        const typeLabel = typeLabels[result.type] || 'Match';
        
        item.innerHTML = 
          '<div class="search-result-icon">' + icon + '</div>' +
          '<div class="search-result-content">' +
            '<div class="search-result-title">' + highlightMatch(result.name, query) + projectLabel + '</div>' +
            '<div class="search-result-path">' + result.path + (result.line ? ':' + result.line : '') + '</div>' +
            snippetHtml +
          '</div>' +
          '<span class="search-result-type">' + typeLabel + '</span>';
        
        item.addEventListener('click', () => navigateToResult(result));
        item.addEventListener('mouseenter', () => {
          searchSelectedIndex = index;
          updateSelectedResult();
        });
        
        searchResults.appendChild(item);
      });
    }

    function updateSelectedResult() {
      const items = searchResults.querySelectorAll('.search-result-item');
      items.forEach((item, i) => {
        item.classList.toggle('selected', i === searchSelectedIndex);
      });
      // Scroll selected item into view
      if (searchSelectedIndex >= 0 && items[searchSelectedIndex]) {
        items[searchSelectedIndex].scrollIntoView({ block: 'nearest' });
      }
    }

    function navigateToResult(result) {
      const targetProjectId = result.projectId || projectId;
      if (!targetProjectId) return;
      
      closeSearch();
      window.location.href = '/p/' + targetProjectId + '/' + result.path;
    }

    async function performSearch(query) {
      if (!query || query.trim().length === 0) {
        searchResults.innerHTML = '';
        searchEmpty.textContent = 'Type to search for files and content';
        searchEmpty.style.display = 'block';
        searchResults.appendChild(searchEmpty);
        currentSearchResults = [];
        searchSelectedIndex = -1;
        return;
      }

      // Show loading state
      searchResults.innerHTML = '<div class="search-results-loading">Searching...</div>';
      
      try {
        const params = new URLSearchParams({ q: query });
        if (projectId) params.set('projectId', projectId);
        
        const res = await fetch('/api/search?' + params.toString());
        if (!res.ok) throw new Error('Search failed');
        
        const data = await res.json();
        searchSelectedIndex = data.results.length > 0 ? 0 : -1;
        renderSearchResults(data.results, query);
      } catch (e) {
        searchResults.innerHTML = '<div class="search-results-empty">Search error: ' + e.message + '</div>';
        currentSearchResults = [];
      }
    }

    // Search input handling
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const query = e.target.value;
        if (searchDebounce) clearTimeout(searchDebounce);
        searchDebounce = setTimeout(() => performSearch(query), 200);
      });

      searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          if (currentSearchResults.length > 0) {
            searchSelectedIndex = Math.min(searchSelectedIndex + 1, currentSearchResults.length - 1);
            updateSelectedResult();
          }
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          if (currentSearchResults.length > 0) {
            searchSelectedIndex = Math.max(searchSelectedIndex - 1, 0);
            updateSelectedResult();
          }
        } else if (e.key === 'Enter') {
          e.preventDefault();
          if (searchSelectedIndex >= 0 && currentSearchResults[searchSelectedIndex]) {
            navigateToResult(currentSearchResults[searchSelectedIndex]);
          }
        } else if (e.key === 'Escape') {
          e.preventDefault();
          closeSearch();
        }
      });
    }

    // Close search when clicking outside
    if (searchModal) {
      searchModal.addEventListener('click', (e) => {
        if (e.target === searchModal) {
          closeSearch();
        }
      });
    }

    // Global keyboard shortcut for search (Cmd/Ctrl + K)
    document.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (searchModal.classList.contains('active')) {
          closeSearch();
        } else {
          openSearch();
        }
      }
    });
  </script>
</body>
</html>
`;
};

module.exports = {
  html,
};
