const { escapeHtml } = require('./markdown');

const LARGE_BRANCH_SIZE = 30;

const normalizeDocPath = (docPath) => {
  if (!docPath || docPath === '/') return '';
  const normalized = docPath.replace(/^\/+/, '').replace(/\/+$/, '');
  if (normalized.toLowerCase() === 'readme.md') return '';
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
    (!!node.indexPath && current === indexPath) ||
    current === sectionPath ||
    (!!sectionPath && current.startsWith(sectionPath + '/'))
  );
};

const renderDocsLeaf = (
  projectId,
  node,
  currentPath,
  favoritePaths,
  level,
  overflow = false,
) => {
  const normalizedNodePath = normalizeDocPath(node.path);
  const isActive = normalizeDocPath(currentPath) === normalizedNodePath;
  const isFavorited = favoritePaths.has(normalizedNodePath);
  const href = getDocHref(projectId, node.path);

  return `
      <li class="docs-nav-item docs-nav-leaf-item ${isFavorited ? 'is-favorited' : ''}" style="--nav-level:${level}" data-doc-nav-label="${escapeHtml(String(node.label || '').toLowerCase())}" ${overflow && !isActive ? 'data-doc-overflow="true" hidden' : ''}>
        <div class="docs-nav-leaf-row">
          <a href="${href}" class="docs-nav-link docs-nav-leaf ${isActive ? 'is-active' : ''}" data-doc-leaf ${isActive ? 'aria-current="page"' : ''}>${escapeHtml(node.label)}</a>
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
};

const renderDocsTree = (projectId, nodes, currentPath, favoritePaths = new Set(), level = 0) => {
  if (!projectId || !Array.isArray(nodes) || nodes.length === 0) return '';

  const isLargeBranch = nodes.length > LARGE_BRANCH_SIZE;
  const items = nodes
    .map((node, index) => {
      const isDir = node.type === 'dir';
      const isActive = isDir
        ? isDirNodeActive(currentPath, node)
        : normalizeDocPath(currentPath) === normalizeDocPath(node.path);
      const isOpen = isDir && isDocSectionActive(currentPath, node.path);
      const hasChildren = isDir && Array.isArray(node.children) && node.children.length > 0;
      const isOverflow = isLargeBranch && index >= LARGE_BRANCH_SIZE;
      const href = getDocHref(projectId, isDir ? node.indexPath || node.path : node.path);

      if (isDir) {
        const isIndexActive = !!node.indexPath &&
          normalizeDocPath(currentPath) === normalizeDocPath(node.indexPath);
        if (node.indexPath && !hasChildren) {
          return renderDocsLeaf(
            projectId,
            { ...node, path: node.indexPath },
            currentPath,
            favoritePaths,
            level,
            isOverflow,
          );
        }

        const childrenId = `docs-nav-children-${encodeURIComponent(node.path)}`;
        const sectionLabel = node.indexPath
          ? `<a href="${href}" class="docs-nav-link docs-nav-section-link ${isIndexActive ? 'is-active' : ''}" data-doc-leaf ${isIndexActive ? 'aria-current="page"' : ''}>${escapeHtml(node.label)}</a>`
          : `<button type="button" class="docs-nav-link docs-nav-section-link docs-nav-section-button" data-doc-toggle aria-expanded="${isOpen ? 'true' : 'false'}" aria-controls="${childrenId}">${escapeHtml(node.label)}</button>`;
        return `
        <li class="docs-nav-item docs-nav-branch-item" style="--nav-level:${level}" data-doc-nav-label="${escapeHtml(String(node.label || '').toLowerCase())}" ${isOverflow && !isActive ? 'data-doc-overflow="true" hidden' : ''}>
          <div class="docs-nav-branch ${isOpen ? 'is-open' : ''}" data-doc-branch data-path="${escapeHtml(node.path)}">
            <div class="docs-nav-row ${isActive && !isIndexActive ? 'is-current-ancestor' : ''}">
              ${sectionLabel}
              <button type="button" class="docs-nav-toggle" data-doc-toggle aria-expanded="${isOpen ? 'true' : 'false'}" aria-controls="${childrenId}" aria-label="${isOpen ? 'Collapse' : 'Expand'} ${escapeHtml(node.label)}">
                ${node.children.length > LARGE_BRANCH_SIZE ? `<span class="docs-nav-child-count">${node.children.length}</span>` : ''}
                <span class="docs-nav-chevron" aria-hidden="true">›</span>
              </button>
            </div>
            <div id="${childrenId}" class="docs-nav-children" ${isOpen ? '' : 'hidden'}>${renderDocsTree(projectId, node.children, currentPath, favoritePaths, level + 1)}</div>
          </div>
        </li>`;
      }

      return renderDocsLeaf(
        projectId,
        node,
        currentPath,
        favoritePaths,
        level,
        isOverflow,
      );
    })
    .join('');

  const filter = isLargeBranch
    ? `<div class="docs-nav-filter" data-doc-filter>
        <input type="search" class="docs-nav-filter-input" placeholder="Filter ${nodes.length} items..." aria-label="Filter this section">
        <button type="button" class="docs-nav-show-all" data-doc-show-all>Show all ${nodes.length}</button>
        <span class="sr-only" aria-live="polite" data-doc-filter-status></span>
      </div>`
    : '';

  return `${filter}<ul class="docs-nav-level docs-nav-level-${level}" ${isLargeBranch ? 'data-doc-filter-list' : ''}>${items}</ul>`;
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
