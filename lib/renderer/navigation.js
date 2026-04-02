const { escapeHtml } = require('./markdown');

const normalizeDocPath = (docPath) => {
  if (!docPath || docPath === '/') return '';
  const normalized = docPath.replace(/^\/+/, '').replace(/\/+$/, '');
  if (normalized.toLowerCase() === 'readme.md') return '';
  if (normalized.toLowerCase().endsWith('/readme.md')) {
    return normalized.slice(0, -'/README.md'.length);
  }
  return normalized;
};

const getDocHref = (projectId, docPath) => {
  if (!projectId) return '/';
  const normalizedPath = normalizeDocPath(docPath);
  return normalizedPath ? `/p/${projectId}/${normalizedPath}` : `/p/${projectId}/`;
};

const isDocSectionActive = (currentPath, sectionPath) => {
  const current = normalizeDocPath(currentPath);
  const section = normalizeDocPath(sectionPath);
  return current === section || (!!section && current.startsWith(section + '/'));
};

const isDirNodeActive = (currentPath, node) => {
  const current = normalizeDocPath(currentPath);
  const sectionPath = normalizeDocPath(node.path);
  const indexPath = normalizeDocPath(node.indexPath || '');

  return (
    current === indexPath ||
    current === sectionPath ||
    (!!sectionPath && current.startsWith(sectionPath + '/'))
  );
};

const renderDocsTree = (projectId, nodes, currentPath, favoritePaths = new Set(), level = 0) => {
  if (!projectId || !Array.isArray(nodes) || nodes.length === 0) return '';

  const items = nodes
    .map((node) => {
      const isDir = node.type === 'dir';
      const isActive = isDir
        ? isDirNodeActive(currentPath, node)
        : normalizeDocPath(currentPath) === normalizeDocPath(node.path);
      const isOpen = isDir && isDocSectionActive(currentPath, node.path);
      const hasChildren = isDir && Array.isArray(node.children) && node.children.length > 0;
      const href = getDocHref(projectId, isDir ? node.indexPath || node.path : node.path);
      const childTree = hasChildren
        ? `<div class="docs-nav-children">${renderDocsTree(projectId, node.children, currentPath, favoritePaths, 0)}</div>`
        : '';

      if (isDir) {
        const sectionLabel = `<span class="docs-nav-link docs-nav-section-link">${escapeHtml(node.label)}</span>`;
        return `
        <li class="docs-nav-item docs-nav-branch-item" style="--nav-level:${level}">
          <details class="docs-nav-branch ${isOpen ? 'is-open' : ''}" data-doc-branch data-path="${escapeHtml(node.path)}" ${isOpen ? 'open' : ''}>
            <summary class="docs-nav-row">
              ${sectionLabel}
              ${hasChildren ? `<span class="docs-nav-toggle" data-doc-toggle aria-hidden="true">›</span>` : ''}
            </summary>
            ${childTree}
          </details>
        </li>`;
      }

      const normalizedNodePath = normalizeDocPath(node.path);
      const isFavorited = favoritePaths.has(normalizedNodePath);
      return `
      <li class="docs-nav-item docs-nav-leaf-item ${isFavorited ? 'is-favorited' : ''}" style="--nav-level:${level}">
        <div class="docs-nav-leaf-row">
          <a href="${href}" class="docs-nav-link docs-nav-leaf ${isActive ? 'is-active' : ''}" data-doc-leaf>${escapeHtml(node.label)}</a>
          <button
            type="button"
            class="docs-nav-favorite-button ${isFavorited ? 'is-favorite' : ''}"
            data-favorite-path="${escapeHtml(normalizedNodePath)}"
            data-favorite-name="${escapeHtml(node.label)}"
            title="${isFavorited ? 'Remove from pinned' : 'Add to pinned'}"
            aria-label="${isFavorited ? 'Remove from pinned' : 'Add to pinned'}"
            aria-pressed="${isFavorited ? 'true' : 'false'}"
          >${isFavorited ? '★' : '☆'}</button>
        </div>
      </li>`;
    })
    .join('');

  return `<ul class="docs-nav-level docs-nav-level-${level}">${items}</ul>`;
};

const renderDocPagination = (lastEditedAt) => {
  if (!lastEditedAt) return '';

  const date = new Date(lastEditedAt);
  if (Number.isNaN(date.getTime())) return '';

  const formatted = new Intl.DateTimeFormat('en', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(date);

  return `<footer class="doc-pagination"><span class="doc-pagination-eyebrow">Last edited</span><time class="doc-pagination-title" datetime="${date.toISOString()}">${escapeHtml(formatted)}</time></footer>`;
};

module.exports = {
  normalizeDocPath,
  getDocHref,
  renderDocsTree,
  renderDocPagination,
};
