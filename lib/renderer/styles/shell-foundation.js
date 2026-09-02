module.exports = `
    body {
      background: #fcfcfc;
      color: #202020;
      font-family: "IBM Plex Sans", "Avenir Next", "Segoe UI", sans-serif;
    }

    .app-shell {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      width: 100%;
    }

    .app-body {
      display: flex;
      flex: 1;
      min-height: 0;
    }

    #sidebar {
      width: 320px;
      background: #fafafa;
      border-right: 1px solid #e7e5e4;
      box-shadow: none;
      display: flex;
      flex-direction: column;
      flex-shrink: 0;
    }

    /* Sidebar shell: drawer backdrop, header, project controls, and panels. */
    .sidebar-scrim {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.22);
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.2s ease;
      z-index: 1500;
    }

    body.sidebar-open .sidebar-scrim {
      opacity: 1;
      pointer-events: auto;
    }

    .sidebar-panel-label {
      font-size: 0.68rem;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: #78716c;
    }

    .sidebar-header-button {
      border: 1px solid #d6d3d1;
      background: #ffffff;
      color: #57534e;
      border-radius: 999px;
      width: 2rem;
      height: 2rem;
      font-size: 1.1rem;
      line-height: 1;
      cursor: pointer;
    }

    .sidebar-content {
      padding-left: 1rem;
      padding-right: 1rem;
    }

    .shell-header {
      position: sticky;
      top: 0;
      z-index: 1100;
      background: rgba(255, 255, 255, 0.94);
      border-bottom: 1px solid #ece7e2;
    }

    .shell-header-inner {
      display: grid;
      grid-template-columns: 320px minmax(0, 1fr);
      min-height: 62px;
    }

    .shell-header-sidebar {
      display: flex;
      align-items: center;
      gap: 0.9rem;
      padding: 0.6rem 1rem;
      border-right: 1px solid #ece7e2;
      background: #ffffff;
    }

    .shell-project-row {
      flex: 1;
      margin-top: 0;
    }

    .shell-header-main {
      display: flex;
      align-items: center;
      min-width: 0;
    }

    .project-dropdown-row {
      display: grid;
      grid-template-columns: minmax(0, 1fr);
      margin-top: 0.7rem;
    }

    .project-dropdown-actions {
      display: flex;
      gap: 0.45rem;
      margin-top: 0.55rem;
    }

    .project-dropdown-shell {
      position: relative;
      display: block;
      width: 100%;
      border: 1px solid #e7e5e4;
      background: #ffffff;
      color: #1c1917;
      box-shadow: none;
      transition: background 0.2s, border-color 0.2s, color 0.2s;
    }

    .project-dropdown-shell::after {
      content: '';
      position: absolute;
      top: 50%;
      right: 0.95rem;
      width: 0.42rem;
      height: 0.42rem;
      border-right: 1.25px solid currentColor;
      border-bottom: 1.25px solid currentColor;
      transform: translateY(-58%) rotate(45deg);
      pointer-events: none;
      opacity: 0.72;
    }

    .project-dropdown {
      width: 100%;
      min-width: 0;
      min-height: 42px;
      border: 0;
      background: transparent;
      color: inherit;
      font-family: "IBM Plex Mono", "JetBrains Mono", monospace;
      font-size: 0.95rem;
      font-weight: 400;
      line-height: 1;
      padding: 0.65rem 2.35rem 0.65rem 0.75rem;
      appearance: none;
      -webkit-appearance: none;
      border-radius: 0;
      box-shadow: none;
      cursor: pointer;
    }

    .project-dropdown:focus {
      outline: none;
    }

    .project-dropdown-shell:hover {
      border-color: #d6d3d1;
      background: #fafaf9;
      color: #292524;
    }

    .project-dropdown-shell:focus-within {
      border-color: #111827;
      outline: 2px solid #111827;
      outline-offset: 1px;
    }

    .project-manage-button {
      flex: 1;
      min-width: 0;
      min-height: 2.75rem;
      border: 1px solid #e7e5e4;
      background: #ffffff;
      color: #57534e;
      font-size: 0.95rem;
      font-family: "IBM Plex Mono", "JetBrains Mono", monospace;
      line-height: 1;
      cursor: pointer;
      border-radius: 0;
      padding: 0 0.7rem;
    }

    .project-manage-button:hover {
      border-color: #d6d3d1;
      color: #111827;
      background: #fafaf9;
    }

    .sidebar-content {
      display: flex;
      flex-direction: column;
      gap: 0.65rem;
      overflow-y: auto;
      padding-top: 0.75rem;
      padding-bottom: 1rem;
    }

    .sidebar-panel {
      background: transparent;
      border: 1px solid #e6e6e2;
      border-radius: 18px;
      padding: 0.95rem 0.8rem 0.85rem;
      box-shadow: none;
    }

    .sidebar-empty-state h3 {
      margin: 0 0 0.5rem;
      font-size: 1rem;
    }

    .sidebar-empty-state p {
      margin: 0;
      font-size: 0.9rem;
      color: var(--text-secondary);
    }

    .favorite-list-compact {
      margin-top: 0.75rem;
    }

    .favorite-group {
      margin-left: 0;
      border-left: 0;
      padding-left: 0;
    }

    .favorite-item {
      border: 1px solid transparent;
      margin-bottom: 0.2rem;
      border-radius: 12px;
    }

    .favorite-item:hover {
      background: rgba(255, 255, 255, 0.9);
      border-color: #e3e3df;
    }

    .docs-nav-panel {
      padding-bottom: 0.45rem;
    }

    /* Sidebar docs tree: section rows, child pages, and expand/collapse chevrons. */
    .docs-nav-level {
      display: grid;
      gap: 0;
      margin-top: 0.6rem;
      list-style: none;
      padding: 0;
      margin-bottom: 0;
    }

    .docs-nav-item {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .docs-nav-branch {
      display: grid;
      gap: 0.05rem;
    }

    .docs-nav-children {
      display: grid;
      gap: 0;
      margin-top: 0;
      position: relative;
    }

    .docs-nav-children::before {
      content: "";
      position: absolute;
      left: 11px;
      top: 4px;
      bottom: 4px;
      width: 1px;
      background: #e6e6e2;
      opacity: 0.9;
    }

    .docs-nav-row {
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto;
      align-items: center;
      gap: 0;
      margin-left: 0;
      cursor: default;
      user-select: none;
    }

    .docs-nav-link {
      display: block;
      text-decoration: none;
      color: rgb(100, 98, 98);
      background: transparent;
      border-radius: 12px;
      padding: 0.42rem 0.7rem 0.42rem calc(0.85rem + (var(--nav-level, 0) * 0.9rem));
      font-size: 13px;
      font-family: "IBM Plex Mono", "JetBrains Mono", monospace;
      font-weight: 400;
      letter-spacing: 0;
      line-height: 1.45;
      transition: background 0.18s ease, color 0.18s ease, border-color 0.18s ease;
      border-left: 2px solid transparent;
      width: 100%;
      position: relative;
    }

    .docs-nav-section-link {
      font-size: 12px;
      font-weight: 600;
      color: #5f5f67;
      text-transform: none;
    }

    .docs-nav-row.is-current-ancestor {
      background: transparent;
    }

    .docs-nav-row.is-current-ancestor .docs-nav-section-link {
      color: #202024;
      font-weight: 600;
    }

    .docs-nav-row.is-current-ancestor .docs-nav-toggle {
      color: #8f8a86;
    }

    .docs-nav-section-button {
      border: 0;
      text-align: left;
      cursor: pointer;
    }

    .docs-nav-leaf {
      font-size: 13px;
      font-weight: 400;
      margin-left: 0;
      padding-left: calc(1.55rem + (var(--nav-level, 0) * 0.9rem));
    }

    .docs-nav-link:hover {
      background: rgba(255, 255, 255, 0.92);
      color: #202024;
    }

    .docs-nav-row:hover .docs-nav-section-link,
    .docs-nav-row:hover .docs-nav-toggle {
      background: transparent;
    }

    .docs-nav-link.is-active {
      background: rgba(255, 255, 255, 0.96);
      color: #202024;
      font-weight: 600;
      border-left-color: #202024;
      box-shadow: 0 6px 14px rgba(20, 22, 28, 0.05);
    }

    .docs-nav-link.is-active::before {
      content: "";
      position: absolute;
      left: -0.85rem;
      top: 50%;
      width: 2px;
      height: 1.2rem;
      transform: translateY(-50%);
      background: #202024;
      border-radius: 999px;
    }

    .docs-nav-toggle {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: transparent;
      color: #9a9aa2;
      width: 18px;
      height: 18px;
      border-radius: 999px;
      font-size: 16px;
      font-family: "IBM Plex Mono", "JetBrains Mono", monospace;
      font-weight: 400;
      line-height: 1;
      transition: transform 0.18s ease, background 0.18s ease, color 0.18s ease;
      padding: 0;
      margin-right: 6px;
      border: 0;
      cursor: pointer;
    }

    .docs-nav-toggle:hover {
      background: #ecece8;
      color: #4e4e55;
    }

    .docs-nav-children[hidden] {
      display: none;
    }

    .docs-nav-branch:not(.is-open) > .docs-nav-row .docs-nav-chevron {
      transform: rotate(0deg);
    }

    .docs-nav-branch.is-open > .docs-nav-row .docs-nav-chevron {
      display: inline-block;
      transform: rotate(90deg);
    }

    .docs-nav-empty {
      margin-top: 0.75rem;
      font-size: 0.875rem;
      color: #57534e;
    }

    #main {
      background: #ffffff;
    }

    .docs-main-container {
      width: min(1440px, 100%);
      margin: 0 auto;
      padding-left: max(48px, 3vw);
      padding-right: max(48px, 3vw);
    }

    .search-trigger,
    .theme-select,
    .density-toggle,
    .page-action-button,
    .copy-page-toggle,
    #sidebar-toggle,
    .btn-add {
      border-radius: 0;
      box-shadow: none;
    }

    .search-trigger {
      background: #ffffff;
      border-color: #e7e5e4;
      color: #78716c;
      font-family: "IBM Plex Mono", "JetBrains Mono", monospace;
      justify-content: flex-start;
      min-height: 42px;
      padding: 0.45rem 0.85rem;
      gap: 0.7rem;
      max-width: 100%;
    }

    .search-trigger svg {
      color: #78716c;
    }

    .search-trigger-text {
      flex: 1;
      text-align: left;
    }

    .search-trigger-shortcut {
      margin-left: auto;
    }

    .search-trigger:hover {
      background: #fafaf9;
      border-color: #d6d3d1;
      color: #292524;
    }

    .theme-select,
    .density-toggle {
      background: #ffffff;
      border-color: #e7e5e4;
      color: #57534e;
      font-family: "IBM Plex Mono", "JetBrains Mono", monospace;
      font-weight: 500;
      min-height: 42px;
      padding-top: 0.45rem;
      padding-bottom: 0.45rem;
      min-width: 132px;
      justify-content: center;
    }

    .density-toggle {
      min-width: 110px;
    }

    .page-action-button,
    .copy-page-toggle,
    #sidebar-toggle {
      background: #ffffff;
      border-color: #e7e5e4;
      color: #57534e;
    }

    .page-action-button:hover,
    .copy-page-toggle:hover,
    #sidebar-toggle:hover {
      background: #fafaf9;
      border-color: #d6d3d1;
      color: #1f2937;
    }

    .btn-add {
      background: #111827;
      color: #ffffff;
      font-family: "IBM Plex Mono", "JetBrains Mono", monospace;
      font-weight: 500;
    }

    .btn-add:hover {
      background: #000000;
    }

    .header-nav {
      grid-template-columns: minmax(0, 1fr) auto;
      min-height: 62px;
      gap: 0.9rem;
    }

    .header-context {
      display: flex;
      align-items: center;
      gap: 1rem;
      min-width: 0;
    }

    .back-link {
      display: flex;
      align-items: center;
      min-height: 62px;
    }

    .back-link a,
    .back-link span {
      font-family: "IBM Plex Sans", "Avenir Next", sans-serif;
      font-size: 0.85rem;
      color: #475569;
    }

    .header-actions {
      justify-self: end;
      display: flex;
      align-items: center;
      gap: 0.65rem;
      height: 62px;
    }

    .search-trigger-compact {
      width: auto;
      min-width: 142px;
      max-width: 180px;
    }

    .header-actions .scroll-status {
      display: inline-flex;
      align-items: center;
      min-height: 62px;
      font-size: 0.82rem;
      letter-spacing: 0;
      color: #94a3b8;
      min-width: 72px;
      justify-content: flex-end;
    }

    .page-actions {
      position: sticky;
      top: 4rem;
      z-index: 20;
      justify-content: flex-end;
      margin: 0.9rem 0 0.35rem;
      opacity: 1;
      padding-right: 0;
      gap: 0.55rem;
      min-height: 42px;
    }

    .page-action-button,
    .copy-page-toggle {
      width: 42px;
      height: 42px;
      min-height: 42px;
    }

    .docs-layout {
      display: grid;
      grid-template-columns: minmax(0, 760px) minmax(220px, 260px);
      justify-content: center;
      gap: 3.5rem;
      align-items: start;
      padding-bottom: 4rem;
    }

    .docs-content-column {
      min-width: 0;
    }

    .container {
      max-width: 760px;
      padding: 0;
    }

    .content-body {
      background: #ffffff;
      border: 0;
      border-radius: 0;
      box-shadow: none;
      padding: 2.1rem 0 3rem;
    }

    .content-body,
    .content-body p,
    .content-body li,
    .content-body table,
    .content-body blockquote {
      font-family: "IBM Plex Mono", "JetBrains Mono", "SFMono-Regular", monospace;
      letter-spacing: -0.01em;
    }

    .content-body {
      font-size: 14px;
      line-height: 1.8;
      color: rgb(100, 98, 98);
    }

    .content-body h1,
    .content-body h2,
    .content-body h3,
    .content-body h4,
    .content-body h5,
    .content-body h6 {
      font-family: "IBM Plex Mono", "JetBrains Mono", "SFMono-Regular", monospace;
      font-weight: 500;
      color: #1c1917;
      letter-spacing: -0.02em;
    }

    .content-body h1 {
      font-size: 2.15rem;
      margin-bottom: 0.6rem;
    }

    .content-body h2 {
      font-size: 1.65rem;
      margin-top: 3.2rem;
      margin-bottom: 1rem;
      padding: 0 0 1rem;
      border-bottom: 1px solid #e7e5e4;
      border-left: 0;
      background: transparent;
    }

    .content-body h3 {
      font-size: 1.2rem;
      margin-top: 2.3rem;
      margin-bottom: 0.75rem;
    }

    .content-body p {
      color: rgb(100, 98, 98);
      margin-bottom: 1.35rem;
    }

    .content-body a {
      color: rgb(32, 29, 29);
      text-underline-offset: 0.16em;
    }

    .content-body code {
      font-family: "IBM Plex Mono", "JetBrains Mono", "SFMono-Regular", monospace;
      font-size: 0.92em;
    }

    .content-body pre {
      border-radius: 0;
      border: 1px solid #e7e5e4;
    }

    .toc-sidebar {
      position: sticky;
      top: 6.4rem;
      width: auto;
      max-height: calc(100vh - 8rem);
      overflow-y: auto;
      padding: 0.25rem 0 0;
      border: 0;
      border-radius: 0;
      background: transparent;
      box-shadow: none;
    }

    .toc-title {
      margin-bottom: 0.95rem;
      font-family: "IBM Plex Mono", "JetBrains Mono", monospace;
      font-size: 0.95rem;
      font-weight: 500;
      letter-spacing: -0.01em;
      text-transform: none;
      color: #292524;
    }

    .toc-list {
      border-left: 0;
    }

    .toc-list a {
      padding: 0.22rem 0 0.22rem 0.7rem;
      margin-left: 0;
      border-left: 1px solid transparent;
      font-family: "IBM Plex Mono", "JetBrains Mono", monospace;
      font-size: 13px;
      color: #a8a29e;
    }

    .toc-list a:hover,
    .toc-list a.active {
      color: #292524;
      border-left-color: #292524;
      font-weight: 400;
    }

    .toc-sidebar:empty {
      display: none;
    }

    #main .container {
      margin-left: 0;
      margin-right: 0;
    }

    .doc-pagination {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 0.35rem;
      margin-top: 3rem;
      padding-top: 1.5rem;
      padding-bottom: max(1rem, env(safe-area-inset-bottom));
      border-top: 1px solid #ece7e2;
      text-align: right;
    }

    .doc-pagination-eyebrow {
      display: block;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: #78716c;
      margin-bottom: 0.35rem;
    }

    .doc-pagination-title {
      display: block;
      font-size: 1rem;
      font-weight: 500;
      color: #202020;
    }

    @media (max-width: 1200px) {
      .docs-main-container {
        width: min(100%, 100%);
      }

      .docs-layout {
        grid-template-columns: minmax(0, 1fr);
      }

      .toc-sidebar {
        display: none;
      }
    }

    @media (max-width: 960px) {
      .shell-header-inner {
        grid-template-columns: minmax(0, 1fr);
      }

      .shell-header-sidebar {
        border-right: 0;
        border-bottom: 1px solid #ece7e2;
      }

      #sidebar {
        position: fixed;
        top: 63px;
        bottom: 0;
        left: 0;
        z-index: 2000;
        max-width: calc(100vw - 2.5rem);
        transition: transform 0.24s ease;
      }

      #sidebar.hidden {
        margin-left: 0;
        transform: translateX(-100%);
      }

      body.sidebar-open #sidebar {
        transform: translateX(0);
      }

      .docs-main-container {
        width: min(100%, 100%);
      }

      .page-actions {
        top: 5rem;
      }
    }

    @media (max-width: 720px) {
      .content-body {
        border-radius: 20px;
        padding: 2rem 1.1rem;
      }

      .docs-main-container {
        padding-left: 48px;
        padding-right: 48px;
      }

    }

`;
