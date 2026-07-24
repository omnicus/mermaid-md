module.exports = `
    :root {
      --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
      --font-mono: "IBM Plex Mono", monospace;
    }

    body {
      background: #f8f8f7;
      color: #2f2f35;
    }

    .hidden-control {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }

    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }

    .brand-mark {
      display: inline-flex;
      align-items: center;
      color: #2f2f35;
      font-family: var(--font-mono);
      font-size: 1.85rem;
      font-weight: 600;
      letter-spacing: -0.05em;
      text-decoration: none;
      text-transform: lowercase;
      white-space: nowrap;
      line-height: 1;
    }

    .header-brand {
      flex: 1;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 20px;
    }

    #sidebar-toggle {
      position: static;
      top: auto;
      left: auto;
      z-index: auto;
      flex-shrink: 0;
      width: 38px;
      height: 38px;
      box-shadow: none;
      border-radius: 10px;
    }

    .sidebar-brand-block {
      display: grid;
      gap: 0.35rem;
      margin-bottom: 0.65rem;
    }

    #sidebar {
      width: 300px;
      background: #fdfcfc;
      border-right: 1px solid #d9d8d8;
    }

    .sidebar-content {
      gap: 0;
      padding: 24px 0 32px;
    }

    .sidebar-section,
    .sidebar-panel {
      border: 0;
      border-radius: 0;
      background: transparent;
      box-shadow: none;
      padding: 0;
    }

    .sidebar-workspace-shell {
      padding: 0 24px 16px;
      border-bottom: 1px solid #e3e2e2;
      margin-bottom: 16px;
    }

    .sidebar-workspace-section {
      padding-bottom: 0;
    }

    .sidebar-subsection + .sidebar-subsection {
      margin-top: 16px;
    }

    .shell-header,
    .content-header {
      position: sticky;
      top: 0;
      left: auto;
      right: auto;
      z-index: 1100;
      padding: 0;
      background: rgba(249, 249, 247, 0.92);
      backdrop-filter: blur(10px);
      border-bottom-color: #dfdfdc;
      box-shadow: 0 1px 0 rgba(223, 223, 220, 0.72);
    }

    .shell-header-inner {
      display: block;
      min-height: var(--shell-header-height);
      width: 100%;
      max-width: none;
      padding-left: 24px;
      padding-right: 24px;
      margin: 0;
      box-sizing: border-box;
    }

    .shell-header-sidebar {
      min-width: 0;
      border-right-color: #dfdfdc;
      background: rgba(249, 249, 247, 0.92);
    }

    .shell-header-main {
      min-width: 0;
    }

    .docs-main-container {
      width: min(1520px, 100%);
      padding-left: max(44px, 3vw);
      padding-right: max(44px, 3vw);
    }

    .header-nav {
      display: grid;
      grid-template-columns: 260px minmax(0, 1fr) auto;
      min-height: var(--shell-header-height);
      align-items: center;
      column-gap: 1rem;
    }

    .header-brand {
      flex: 0 0 auto;
      min-width: auto;
      font-size: 20px;
      font-weight: 700;
      letter-spacing: -0.03em;
      color: #202024;
    }

    .header-context {
      display: flex;
      align-items: center;
      gap: 1rem;
      min-width: 0;
      flex: 1 1 auto;
    }

    .back-link,
    .header-actions,
    .header-actions .scroll-status {
      min-height: var(--shell-header-height);
      height: var(--shell-header-height);
    }

    .back-link {
      display: flex;
      align-items: center;
      min-width: 0;
      overflow: hidden;
      white-space: nowrap;
      flex: 1 1 auto;
    }

    .back-link a,
    .back-link span {
      color: #5f6470;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .header-actions {
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
      min-width: 0;
      flex: 0 0 auto;
      justify-content: flex-end;
    }

    .search-trigger {
      min-width: 132px;
      max-width: 132px;
      background: rgba(255, 255, 255, 0.9);
      border-color: #d8d8d4;
      color: #6d6d74;
      flex-shrink: 0;
    }

    .search-trigger:hover {
      background: #ffffff;
      border-color: #c9c9c2;
    }

    .search-trigger-shortcut,
    .search-shortcut,
    .search-footer-hint kbd {
      border-radius: 0;
      background: #f3f3f1;
      border-color: #ddddda;
      color: #7b7b84;
      box-shadow: none;
    }

    .scroll-status {
      font-family: var(--font-mono);
      color: #9d9da5;
    }

    .search-trigger-compact {
      width: auto;
      min-width: 142px;
      max-width: 180px;
    }

    .docs-layout {
      grid-template-columns: minmax(0, 760px) minmax(200px, 240px);
      gap: 4.5rem;
    }

    .sidebar-panel-label {
      font-size: 0.63rem;
      letter-spacing: 0.16em;
      color: #666670;
      margin-bottom: 0.1rem;
    }

    .project-dropdown-row {
      margin-top: 0.55rem;
      gap: 0.45rem;
    }

    .project-dropdown-actions {
      margin-top: 0;
      gap: 0.4rem;
    }

    .project-dropdown-shell {
      border-radius: 0;
    }

    .project-manage-button-primary {
      border-color: #202024;
      background: #202024;
      color: #f8f7f4;
    }

    .project-manage-button-primary:hover {
      border-color: #111214;
      background: #111214;
      color: #ffffff;
    }

    .project-manage-button-danger {
      color: #8c4343;
    }

    .project-manage-button-danger:hover {
      border-color: #d8b5b5;
      background: #fff5f5;
      color: #7a2626;
    }

    .project-dropdown,
    .project-manage-button {
      font-size: 0.88rem;
    }

    .favorite-list-compact {
      margin-top: 0.45rem;
    }

    .sidebar-favorites-section {
      padding-top: 1rem;
    }

    .favorite-item {
      margin-bottom: 0;
      border: 0;
      border-radius: 0;
      padding: 0;
      gap: 0.35rem;
    }

    .favorite-item:hover {
      background: transparent;
    }

    .favorite-link {
      padding: 4px 0;
      border-radius: 0;
      font-size: 14px;
      line-height: 1.4;
      color: #201d1d;
    }

    .favorite-link:hover {
      background: transparent;
    }

    .favorite-name {
      color: #201d1d;
    }

    .favorite-actions button {
      width: 1.45rem;
      height: 1.45rem;
      border-radius: 999px;
    }

    .docs-nav-panel {
      padding: 0;
    }

    .docs-nav-panel > .sidebar-panel-label {
      padding: 0 24px;
      margin-bottom: 0.45rem;
    }

    .docs-nav-level {
      margin-top: 0;
    }

    .docs-nav-item + .docs-nav-item {
      margin-top: 4px;
    }

    .docs-nav-branch {
      gap: 0;
    }

    .docs-nav-children::before {
      display: none;
    }

    .docs-nav-branch-item > .docs-nav-branch > .docs-nav-row {
      margin: 20px 0 8px;
      padding: 4px 24px;
    }

    .docs-nav-link {
      padding-top: 4px;
      padding-bottom: 4px;
      font-size: 14px;
      color: #201d1d;
      border-radius: 0;
      border-left: 2px solid transparent;
      box-shadow: none;
    }

    .docs-nav-section-link {
      padding: 0;
      font-size: 14px;
      font-weight: 600;
      color: #646262;
    }

    .docs-nav-leaf {
      font-size: 14px;
      font-weight: 400;
      padding-left: calc(24px + (var(--nav-level, 0) * 12px));
      padding-right: 8px;
      flex: 1;
    }

    .docs-nav-leaf-row {
      display: flex;
      align-items: center;
      gap: 0.2rem;
      padding-right: 16px;
      border-left: 2px solid transparent;
      transition: background 0.18s ease, border-color 0.18s ease;
    }

    .docs-nav-favorite-button {
      width: 24px;
      height: 24px;
      padding: 0;
      border: 0;
      background: transparent;
      color: #b6b0a7;
      font-size: 0.92rem;
      line-height: 1;
      cursor: pointer;
      opacity: 0;
      transform: translateX(3px) scale(0.96);
      transition: opacity 0.2s ease, color 0.18s ease, transform 0.2s ease;
      flex-shrink: 0;
    }

    .docs-nav-leaf-item:hover .docs-nav-favorite-button,
    .docs-nav-leaf-item.is-favorited .docs-nav-favorite-button,
    .docs-nav-favorite-button:focus-visible {
      opacity: 1;
      transform: translateX(0) scale(1);
    }

    .docs-nav-favorite-button:hover,
    .docs-nav-favorite-button:focus-visible,
    .docs-nav-favorite-button.is-favorite {
      color: #d29a16;
      transform: scale(1.04);
    }

    .docs-nav-leaf-item:has(.docs-nav-leaf.is-active) .docs-nav-leaf-row {
      border-left-color: #201d1d;
    }

    .docs-nav-leaf-row:hover,
    .docs-nav-leaf-item:focus-within .docs-nav-leaf-row,
    .docs-nav-leaf-item:has(.docs-nav-leaf.is-active) .docs-nav-leaf-row {
      background: #f8f7f7;
    }

    .docs-nav-link:hover,
    .docs-nav-leaf.is-active {
      background: transparent;
      color: #201d1d;
    }

    .docs-nav-leaf.is-active {
      font-weight: 600;
      border-left-color: #201d1d;
      box-shadow: none;
    }

    .docs-nav-link.is-active::before {
      display: none;
    }

    .docs-nav-toggle {
      width: auto;
      height: auto;
      margin-right: 24px;
      color: #201d1d;
      font-size: 13px;
      font-weight: 600;
      border-radius: 0;
    }

    .docs-nav-toggle:hover {
      background: transparent;
      color: #201d1d;
    }

    .toc-title {
      margin-bottom: 0.8rem;
      font-size: 0.88rem;
      font-weight: 500;
      color: #2f2f35;
    }

    .toc-list a {
      padding-top: 0.18rem;
      padding-bottom: 0.18rem;
      padding-left: 0.65rem;
      font-size: 12.5px;
      line-height: 1.45;
      color: #9a9aa2;
    }

    .toc-list a:hover,
    .toc-list a.active {
      color: #2f2f35;
    }

    .toc-list a.toc-h3 {
      padding-left: 1.35rem;
      font-size: 12px;
    }

    .content-body {
      padding-top: 2rem;
      color: #66666d;
    }

    .content-body p,
    .content-body li,
    .content-body table,
    .content-body blockquote,
    .content-body code,
    .content-body pre {
      font-family: var(--font-mono);
    }

    .content-body h1,
    .content-body h2,
    .content-body h3,
    .content-body h4,
    .content-body h5,
    .content-body h6 {
      font-family: var(--font-mono);
      color: #2c2c31;
      font-weight: 500;
    }

    .content-body h1 {
      font-size: 2.2rem;
      letter-spacing: -0.04em;
      margin-bottom: 0.45rem;
    }

    .content-body h2 {
      font-size: 1.55rem;
      border-bottom-color: #e2e2de;
    }

    .content-body a {
      color: #2f2f35;
    }

    .content-body img {
      display: block;
      max-width: 100%;
      border: 1px solid #d7d7d2;
      border-radius: 18px;
      box-shadow: 0 28px 70px rgba(32, 32, 35, 0.12);
      margin: 2rem auto;
    }

    .code-block-wrapper,
    .table-wrap,
    .doc-callout,
    blockquote {
      border-radius: 18px;
      overflow: hidden;
    }

    .code-block-wrapper {
      position: relative;
      margin: 1.75rem 0;
      border: 1px solid #d8d8d4;
      border-radius: 0;
      background: #fbfbfa;
      box-shadow: none;
      overflow: hidden;
    }

    .code-block-wrapper pre {
      margin: 0;
      padding: 1rem 1.2rem 1.15rem;
      background: #fbfbfa;
      border: 0;
      border-radius: 0;
      overflow-x: auto;
    }

    .code-block-wrapper code {
      font-family: var(--font-mono);
      font-size: 0.84rem;
      line-height: 1.75;
      color: #24292e;
    }

    .code-block-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      min-height: 3.2rem;
      padding: 0.72rem 0.7rem 0.72rem 1rem;
      background: #f3f3f1;
      border-bottom: 1px solid #d8d8d4;
      position: relative;
    }

    .code-block-header::before {
      content: "";
      display: inline-block;
      width: 0.7rem;
      height: 0.7rem;
      border-radius: 999px;
      background: #d6d6d2;
      box-shadow: 1.1rem 0 0 #d6d6d2, 2.2rem 0 0 #d6d6d2;
      margin-right: 2.9rem;
      flex-shrink: 0;
    }

    .code-block-lang {
      color: #6b7280;
      font-size: 0.72rem;
      font-family: var(--font-mono);
      text-transform: none;
      letter-spacing: 0;
      font-weight: 500;
      text-align: left;
      min-width: 0;
      flex: 1;
    }

    .code-block-header .copy {
      position: static;
      display: flex;
      align-items: center;
      gap: 0.3rem;
      opacity: 1;
      pointer-events: auto;
      transform: none;
      flex-shrink: 0;
    }

    .copy-status {
      display: none;
      color: #6b7280;
      font-family: var(--font-mono);
      font-size: 0.68rem;
      pointer-events: none;
    }

    .copy-button {
      position: relative;
      width: 1.8rem;
      height: 1.8rem;
      padding: 0;
      border-radius: 6px;
      background: transparent;
      border: 1px solid transparent;
      color: #52525b;
      box-shadow: none;
    }

    .copy-button > div,
    .copy-button::before {
      content: "";
      position: absolute;
      width: 0.65rem;
      height: 0.65rem;
      border: 1.4px solid currentColor;
      border-radius: 2px;
    }

    .copy-button::before {
      top: 0.4rem;
      left: 0.5rem;
      opacity: 0.7;
    }

    .copy-button > div {
      top: 0.6rem;
      left: 0.7rem;
      background: #f3f3f1;
    }

    .copy-button:hover {
      background: rgba(255, 255, 255, 0.9);
      color: #111827;
      border-color: #d8d8d4;
    }

    .copy-button.copied {
      color: #065f46;
      background: #ecfdf5;
      border-color: #a7f3d0;
    }

    .code-block-wrapper .hljs {
      background: transparent;
      color: #24292e;
    }

    .code-block-wrapper .hljs-comment,
    .code-block-wrapper .hljs-quote {
      color: #6a737d;
    }

    .code-block-wrapper .hljs-keyword,
    .code-block-wrapper .hljs-selector-tag,
    .code-block-wrapper .hljs-literal,
    .code-block-wrapper .hljs-section,
    .code-block-wrapper .hljs-link {
      color: #6f42c1;
    }

    .code-block-wrapper .hljs-string,
    .code-block-wrapper .hljs-title,
    .code-block-wrapper .hljs-name,
    .code-block-wrapper .hljs-type,
    .code-block-wrapper .hljs-attribute,
    .code-block-wrapper .hljs-symbol,
    .code-block-wrapper .hljs-bullet,
    .code-block-wrapper .hljs-addition {
      color: #032f62;
    }

    .code-block-wrapper .hljs-number,
    .code-block-wrapper .hljs-variable,
    .code-block-wrapper .hljs-template-variable,
    .code-block-wrapper .hljs-regexp,
    .code-block-wrapper .hljs-meta,
    .code-block-wrapper .hljs-built_in,
    .code-block-wrapper .hljs-builtin-name {
      color: #005cc5;
    }

    .code-block-wrapper .hljs-operator,
    .code-block-wrapper .hljs-punctuation,
    .code-block-wrapper .hljs-subst,
    .code-block-wrapper .hljs-deletion {
      color: #bf3441;
    }

    .docs-nav-link,
    .docs-nav-section-link,
    .docs-nav-leaf,
    .toc-list a,
    .favorite-link,
    .file-list a {
      font-family: var(--font-mono);
    }

    .docs-nav-row,
    .docs-nav-link,
    .docs-nav-leaf {
      border-left-width: 2px;
    }

    .docs-nav-row.is-active {
      background: transparent;
      color: #202024;
      border-left-color: transparent;
    }

    .docs-nav-leaf.is-active {
      background: #f8f7f7;
      color: #202024;
      border-left-color: #201d1d;
      box-shadow: none;
    }

    .toc-sidebar {
      top: 6rem;
    }

    .toc-list a {
      border-left-color: #dfdfdc;
    }

    .toc-list a:hover,
    .toc-list a.active {
      border-left-color: #2f2f35;
    }

    .page-actions {
      position: static;
      top: auto;
      margin-top: 1rem;
      opacity: 0.88;
      display: inline-flex;
      align-items: center;
      justify-content: flex-end;
      gap: 0.55rem;
    }

    .page-action-button,
    .copy-page-toggle {
      border-radius: 12px;
    }

    .theme-mode-button {
      position: relative;
    }

    .theme-menu-dropdown {
      position: relative;
      display: inline-flex;
      align-items: center;
    }

    .theme-menu {
      display: none;
      position: absolute;
      top: calc(100% + 10px);
      right: 0;
      min-width: 220px;
      border: 1px solid #ddddda;
      border-radius: 14px;
      background: #ffffff;
      box-shadow: 0 18px 40px rgba(15, 18, 23, 0.08);
      padding: 0.45rem;
      z-index: 2600;
    }

    .theme-menu.show {
      display: block;
    }

    .theme-menu-section {
      display: grid;
      gap: 0.2rem;
    }

    .theme-menu-title {
      font-family: var(--font-mono);
      font-size: 0.66rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: #8a8a92;
      padding: 0.25rem 0.5rem;
    }

    .theme-menu-divider {
      height: 1px;
      margin: 0.25rem 0;
      background: #e7e6e3;
    }

    .theme-menu-option {
      position: relative;
      width: 100%;
      border: 0;
      border-radius: 10px;
      background: transparent;
      color: #2f2f35;
      text-align: left;
      font-family: var(--font-mono);
      font-size: 0.78rem;
      padding: 0.65rem 0.7rem 0.65rem 1.65rem;
      cursor: pointer;
      transition: background 0.15s ease, color 0.15s ease;
    }

    .theme-menu-option::before {
      content: "\\2713";
      position: absolute;
      left: 0.62rem;
      top: 50%;
      transform: translateY(-50%);
      opacity: 0;
      color: #1f5d8a;
      font-size: 0.74rem;
    }

    .theme-menu-option:hover {
      background: #f5f5f3;
      color: #1f1f24;
    }

    .theme-menu-option.is-active {
      background: #edf4f9;
      color: #17476b;
      font-weight: 600;
    }

    .theme-menu-option.is-active::before {
      opacity: 1;
    }

    .theme-mode-icon {
      display: none;
      line-height: 0;
    }

    .theme-mode-text {
      font-family: var(--font-mono);
      font-size: 0.72rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }

    :root[data-theme-mode='system'] .theme-mode-icon-system,
    :root[data-theme-mode='light'] .theme-mode-icon-sun,
    :root[data-theme-mode='dark'] .theme-mode-icon-moon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    :root[data-theme-mode='light'] .theme-mode-icon-system,
    :root[data-theme-mode='dark'] .theme-mode-icon-system,
    :root[data-theme-mode='system'] .theme-mode-icon-sun,
    :root[data-theme-mode='system'] .theme-mode-icon-moon {
      display: none;
    }

    .file-list {
      display: grid;
      gap: 0.8rem;
      margin-top: 1.6rem;
    }

    .file-list li {
      margin: 0;
    }

    .file-list a {
      border-radius: 16px;
      background: rgba(255, 255, 255, 0.82);
      border-color: #e1e1dc;
      padding: 0.95rem 1rem;
    }

    .doc-callout,
    blockquote.doc-callout-note,
    blockquote.doc-callout-info,
    blockquote.doc-callout-api,
    blockquote.doc-callout-example,
    blockquote.doc-callout-tip,
    blockquote.doc-callout-decision,
    blockquote.doc-callout-important,
    blockquote.doc-callout-warning,
    blockquote.doc-callout-caution,
    blockquote.doc-callout-gotcha,
    blockquote.doc-callout-danger,
    blockquote.doc-callout-recommended,
    blockquote {
      display: grid;
      grid-template-columns: auto minmax(0, 1fr);
      align-items: start;
      gap: 0.95rem;
      margin: 1.5rem 0;
      padding: 1rem 1.2rem;
      border: 0;
      border-radius: 0;
      background: #f3f3f1;
      color: #2f2f35;
      font-size: 0.95rem;
      line-height: 1.7;
      box-shadow: none;
    }

    .doc-callout::before,
    blockquote::before {
      display: none;
      content: none;
    }

    .doc-callout-heading {
      display: inline-flex;
      align-items: center;
      gap: 0.55rem;
      margin-top: 0.05rem;
      font-family: var(--font-mono);
      font-size: 0.92rem;
      font-weight: 700;
      letter-spacing: 0.04em;
      white-space: nowrap;
      text-transform: uppercase;
    }

    .doc-callout-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 1.15rem;
      height: 1.15rem;
      color: currentColor;
      line-height: 1;
      flex-shrink: 0;
    }

    .doc-callout-icon svg {
      width: 100%;
      height: 100%;
      stroke: currentColor;
      fill: none;
      stroke-width: 1.8;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    .doc-callout-title {
      font-weight: 800;
      letter-spacing: 0.05em;
    }

    .doc-callout-body {
      min-width: 0;
      color: rgba(0, 0, 0, 0.82);
    }

    .doc-callout-body code {
      color: inherit;
      font-weight: 700;
    }

    .doc-callout-body > :first-child {
      margin-top: 0;
    }

    .doc-callout-body > :last-child {
      margin-bottom: 0;
    }

    .doc-callout-body p:last-child,
    blockquote p:last-child {
      margin-bottom: 0;
    }

    .doc-callout a,
    blockquote a {
      color: inherit;
    }

    blockquote.doc-callout-note,
    blockquote.doc-callout-info {
      background: #d9dcff;
      color: #23379f;
    }

    blockquote.doc-callout-tip,
    blockquote.doc-callout-important,
    blockquote.doc-callout-recommended {
      background: #e7ccfb;
      color: #7c1faf;
    }

    blockquote.doc-callout-warning,
    blockquote.doc-callout-caution,
    blockquote.doc-callout-gotcha {
      background: #fbe8b2;
      color: #8b6516;
    }

    blockquote.doc-callout-danger {
      background: #ffd9d9;
      color: #a53333;
    }

    blockquote.doc-callout-api,
    blockquote.doc-callout-example,
    blockquote.doc-callout-decision,
    blockquote {
      background: #f3f3f1;
      color: #44444c;
    }

    @media (max-width: 720px) {
      .doc-callout,
      blockquote.doc-callout-note,
      blockquote.doc-callout-info,
      blockquote.doc-callout-api,
      blockquote.doc-callout-example,
      blockquote.doc-callout-tip,
      blockquote.doc-callout-decision,
      blockquote.doc-callout-important,
      blockquote.doc-callout-warning,
      blockquote.doc-callout-caution,
      blockquote.doc-callout-gotcha,
      blockquote.doc-callout-danger,
      blockquote.doc-callout-recommended,
      blockquote {
        grid-template-columns: minmax(0, 1fr);
        gap: 0.55rem;
      }

      .doc-callout-heading {
        white-space: normal;
      }
    }

    .table-wrap {
      margin: 1.75rem 0;
      overflow: hidden;
      border: 1px solid #e4e4e1;
      border-radius: 18px;
      background: rgba(255, 255, 255, 0.88);
      box-shadow: 0 12px 28px rgba(15, 18, 23, 0.04);
    }

    .table-wrap table {
      min-width: 100%;
      font-size: 0.88rem;
      line-height: 1.55;
    }

    .table-wrap th,
    .table-wrap td {
      padding: 0.8rem 1rem;
      border-top: 1px solid #ecece8;
      color: #4e4e55;
      background: transparent;
    }

    .table-wrap thead th {
      border-top: 0;
    }

    .table-wrap th {
      position: static;
      background: #f7f7f5;
      color: #34343a;
      font-weight: 600;
    }

    .table-wrap tbody tr:nth-child(even) {
      background: #fbfbfa;
    }

    .table-wrap tbody tr:hover {
      background: #f4f4f2;
    }

    .copy-page-menu {
      margin-top: 10px;
      border: 1px solid #ddddda;
      border-radius: 14px;
      box-shadow: 0 18px 40px rgba(15, 18, 23, 0.08);
      padding: 0.35rem;
      min-width: 190px;
    }

    .copy-page-menu button {
      border-radius: 10px;
      font-family: var(--font-mono);
      font-size: 0.8rem;
      padding: 0.72rem 0.85rem;
    }

    .copy-page-menu button + button {
      border-top: 0;
    }

    .copy-page-menu button:hover {
      background: #f5f5f3;
      color: #2f2f35;
    }

    .intro-hero {
      margin: 2rem 0 2.75rem;
    }

    .terminal-demo {
      margin: 0;
      background: #141416;
      border: 1px solid #2a2c36;
      border-radius: 22px;
      overflow: hidden;
      box-shadow: 0 35px 90px rgba(15, 18, 23, 0.24);
    }

    .terminal-demo-header {
      display: flex;
      align-items: center;
      gap: 0.7rem;
      padding: 0.9rem 1rem;
      background: #2f3341;
      color: #c5c8d3;
      font-family: var(--font-mono);
      font-size: 0.78rem;
    }

    .terminal-demo-dots {
      display: inline-flex;
      gap: 0.45rem;
      margin-right: 0.25rem;
    }

    .terminal-demo-dots span {
      width: 0.72rem;
      height: 0.72rem;
      border-radius: 999px;
    }

    .terminal-demo-dots span:nth-child(1) { background: #ff5f57; }
    .terminal-demo-dots span:nth-child(2) { background: #febc2e; }
    .terminal-demo-dots span:nth-child(3) { background: #28c840; }

    .terminal-demo pre {
      margin: 0;
      padding: 1.3rem 1.4rem 1.5rem;
      color: #f2f2f2;
      font-size: 0.92rem;
      line-height: 1.75;
      overflow-x: auto;
    }

    .workspace-list {
      margin-top: 2rem;
    }

    .workspace-list h2 {
      margin-top: 0;
    }

    @media (max-width: 960px) {
      .shell-header-inner {
        grid-template-columns: minmax(0, 1fr);
      }

      .shell-header-sidebar {
        justify-content: space-between;
      }

      #sidebar {
        top: 64px;
      }
    }

    @media (max-width: 720px) {
      .docs-main-container {
        padding-left: 22px;
        padding-right: 22px;
      }

      .search-trigger {
        min-width: auto;
        max-width: none;
      }

      .search-trigger-text {
        display: none;
      }

      .scroll-status {
        display: none;
      }
    }

    .header-page-actions {
      position: static;
      top: auto;
      margin: 0;
      min-height: 48px;
      padding-right: 0;
      gap: 0.35rem;
      opacity: 1;
      display: inline-flex;
      align-items: center;
      flex-wrap: nowrap;
      flex-shrink: 0;
      order: 2;
    }

    .header-actions .scroll-status {
      order: 1;
      min-width: 78px;
      justify-content: flex-end;
      margin-right: 0.25rem;
    }

    .editor-nav-actions {
      order: 3;
    }

    .copy-page-dropdown {
      display: inline-flex;
      align-items: center;
      gap: 0;
      border: 1px solid #ddddda;
      border-radius: 12px;
      overflow: visible;
      background: #f9fafb;
    }

    .copy-page-dropdown .page-action-button {
      border-radius: 12px 0 0 12px;
      border: 0;
      border-right: 1px solid #ddddda;
      box-shadow: none;
    }

    .copy-page-toggle {
      width: 36px;
      padding: 0;
      border-radius: 0 12px 12px 0;
      border: 0;
      background: transparent;
      box-shadow: none;
      flex-shrink: 0;
    }

    .copy-page-dropdown:hover {
      border-color: #cfcfc9;
      background: #ffffff;
    }

    .header-page-actions .page-action-button,
    .header-page-actions .copy-page-toggle {
      box-shadow: none;
    }

    .header-page-actions {
      opacity: 1;
    }

    .theme-mode-button {
      width: auto;
      min-width: 92px;
      padding: 0 0.85rem;
      gap: 0.5rem;
    }

    .header-page-actions #git-diff-button {
      margin-left: 0.15rem;
    }

    .header-page-actions .page-action-button:focus-visible,
    .header-page-actions .copy-page-toggle:focus-visible {
      outline: 2px solid rgba(29, 78, 216, 0.24);
      outline-offset: 1px;
    }

    .copy-page-menu {
      top: calc(100% + 10px);
    }

    .editor-nav-actions {
      display: none;
      align-items: center;
      gap: 0.55rem;
    }

    .editor-nav-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 42px;
      padding: 0 0.95rem;
      border: 1px solid #d8d8d4;
      background: rgba(255, 255, 255, 0.92);
      color: #505058;
      border-radius: 999px;
      font-family: var(--font-mono);
      font-size: 0.78rem;
      cursor: pointer;
      transition: border-color 0.18s ease, background 0.18s ease, color 0.18s ease;
    }

    .editor-nav-button:hover,
    .editor-nav-button.active {
      border-color: #202024;
      color: #202024;
      background: #ffffff;
    }

    .editor-nav-save {
      background: #202024;
      color: #ffffff;
      border-color: #202024;
    }

    .editor-nav-save:hover {
      background: #111114;
      color: #ffffff;
      border-color: #111114;
    }

    .editor-nav-save.is-saving {
      gap: 0.5rem;
      padding: 0 0.9rem;
      background: #111114;
      color: #ffffff;
      border-color: #111114;
    }

    body.editing .search-trigger,
    body.editing .header-page-actions,
    body.editing .scroll-status {
      display: none;
    }

    body.editing .editor-nav-actions {
      display: inline-flex;
    }

    body.editing .editor-preview-toggle {
      display: none;
    }

    body.editing .content-header {
      display: block;
    }

    body.editing #sidebar {
      display: none;
    }

    body.editing .shell-header-inner {
      grid-template-columns: 300px minmax(0, 1fr);
    }

    body.editing .shell-header-sidebar {
      border-right-color: #ecece8;
    }

    body.editing #main {
      padding: 0;
      overflow: hidden;
    }

    body.editing .docs-main-container {
      width: min(100%, 100%);
    }

    .edit-mode {
      display: none;
      flex-direction: column;
      height: calc(100vh - 64px);
      overflow: hidden;
      padding: 0 max(28px, 2.5vw) max(1.25rem, env(safe-area-inset-bottom));
      background: linear-gradient(180deg, #f8f8f7 0%, #f3f3f1 100%);
    }

    body.editing #view-mode,
    body.editing .toc-sidebar {
      display: none;
    }

    body.editing .edit-mode {
      display: flex;
    }

    .editor-toolbar {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 0.45rem;
      margin: 1.1rem 0 0.85rem;
      padding: 0.85rem 1rem;
      background: rgba(255, 255, 255, 0.85);
      border: 1px solid #e1e1dc;
      border-radius: 18px;
      box-shadow: 0 14px 30px rgba(15, 18, 23, 0.05);
      backdrop-filter: blur(10px);
    }

    .toolbar-group {
      display: flex;
      align-items: center;
      gap: 2px;
    }

    .toolbar-divider {
      width: 1px;
      height: 24px;
      background: #e2e2de;
      margin: 0 0.35rem;
    }

    .toolbar-spacer {
      flex: 1;
    }

    .editor-toolbar button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      border: 1px solid transparent;
      color: #595963;
      border-radius: 12px;
      background: transparent;
      box-shadow: none;
      cursor: pointer;
      font-size: 0.75rem;
      font-weight: 600;
      transition: all 0.15s;
    }

    .editor-toolbar button:hover {
      background: #ffffff;
      color: #202024;
      border-color: #ddddda;
      box-shadow: 0 6px 14px rgba(15, 18, 23, 0.06);
    }

    .toolbar-btn-text,
    .toolbar-btn-primary {
      display: none !important;
    }

    .toolbar-btn-primary.is-saving {
      width: auto !important;
      padding: 0 14px !important;
      gap: 0.5rem;
      opacity: 0.9;
    }

    .editor-panes {
      flex: 1;
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(360px, 46%);
      gap: 1rem;
      overflow: hidden;
      min-height: 0;
    }

    .editor-pane-editor,
    .editor-pane-preview {
      min-width: 0;
      min-height: 0;
      border: 1px solid #e1e1dc;
      border-radius: 24px;
      overflow: hidden;
      background: rgba(255, 255, 255, 0.88);
      box-shadow: 0 18px 40px rgba(15, 18, 23, 0.06);
    }

    .editor-pane-editor {
      display: flex;
      flex-direction: column;
      background: linear-gradient(180deg, #fbfbfa 0%, #f7f7f5 100%);
    }

    .editor-pane-preview {
      border-left: 1px solid #e1e1dc;
      background: rgba(255, 255, 255, 0.95);
    }

    .editor-textarea {
      flex: 1;
      border: none;
      padding: 1.5rem 1.6rem;
      resize: none;
      outline: none;
      background: transparent;
      color: #27272d;
      font-family: var(--font-mono);
      font-size: 0.94rem;
      line-height: 1.8;
    }

    .editor-textarea:focus {
      background: rgba(255, 255, 255, 0.35);
    }

    .editor-preview {
      flex: 1;
      padding: 1.7rem 1.8rem 2.4rem;
      max-width: none;
      margin: 0;
      height: 100%;
      overflow-y: auto;
      background: transparent;
    }

    .editor-preview .content-body,
    .editor-preview h1,
    .editor-preview h2,
    .editor-preview h3,
    .editor-preview h4,
    .editor-preview p,
    .editor-preview li,
    .editor-preview table,
    .editor-preview blockquote {
      font-family: var(--font-mono);
    }

    .editor-preview h1,
    .editor-preview h2,
    .editor-preview h3,
    .editor-preview h4 {
      color: #2c2c31;
      font-weight: 500;
    }

    .editor-preview p,
    .editor-preview li {
      color: #66666d;
    }

    .editor-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 0.85rem;
      padding: 0.95rem 1.2rem;
      border: 1px solid #e1e1dc;
      border-radius: 18px;
      background: rgba(255, 255, 255, 0.82);
      box-shadow: 0 10px 24px rgba(15, 18, 23, 0.04);
      font-family: var(--font-mono);
      font-size: 0.74rem;
      color: #7b7b84;
    }

    .editor-status {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .editor-status.saving,
    .editor-status.saved,
    .editor-status.error {
      font-family: var(--font-mono);
    }

    .status-spinner,
    .button-spinner {
      width: 0.9rem;
      height: 0.9rem;
      border-radius: 999px;
      border: 2px solid currentColor;
      border-right-color: transparent;
      animation: editor-spin 0.7s linear infinite;
      flex-shrink: 0;
    }

    .button-spinner {
      width: 0.82rem;
      height: 0.82rem;
      border-width: 1.8px;
    }

    .editor-toolbar button.is-saving,
    .editor-nav-button.is-saving {
      cursor: wait;
    }

    @keyframes editor-spin {
      to { transform: rotate(360deg); }
    }

    @media (max-width: 1100px) {
      body.editing .editor-preview-toggle {
        display: inline-flex;
      }

      .editor-panes {
        grid-template-columns: minmax(0, 1fr);
      }

      .editor-pane-preview {
        display: none;
      }

      body.editing.show-preview .editor-pane-editor {
        display: none;
      }

      body.editing.show-preview .editor-pane-preview {
        display: block;
      }
    }

    @media (max-width: 960px) {
      body.editing .shell-header-inner {
        grid-template-columns: minmax(0, 1fr);
      }

      body.editing .shell-header-sidebar {
        display: none;
      }

      .edit-mode {
        height: calc(100vh - 64px);
        padding-left: 18px;
        padding-right: 18px;
      }

      .header-actions {
        gap: 0.45rem;
      }
    }

    @media (max-width: 720px) {
      .header-context {
        gap: 0.65rem;
      }

      .editor-toolbar {
        overflow-x: auto;
        flex-wrap: nowrap;
      }

      .editor-nav-button {
        min-height: 38px;
        padding: 0 0.75rem;
      }

      .header-page-actions {
        gap: 0.3rem;
      }

      .header-actions .scroll-status {
        display: none;
      }

      .page-action-button,
      .copy-page-toggle {
        width: 38px;
        height: 38px;
        min-height: 38px;
        min-width: 38px;
        padding: 0;
      }

      .page-action-button .page-action-label,
      .page-action-button.page-action-pill .page-action-label {
        display: none;
      }

      .theme-mode-button {
        min-width: 38px;
        width: 38px;
        padding: 0;
        gap: 0;
      }

      .theme-mode-text {
        display: none;
      }
    }

    .mobile-overlay-scrim {
      position: fixed;
      inset: var(--shell-header-height) 0 0;
      background: rgba(15, 23, 42, 0.22);
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.2s ease;
      z-index: 1650;
    }

    .mobile-overlay-scrim.active {
      opacity: 1;
      pointer-events: auto;
    }

    .mobile-header-button,
    .mobile-drawer-action,
    .mobile-drawer-select {
      font-family: var(--font-mono);
    }

    .mobile-header-button {
      display: none;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 48px;
      border: 1px solid #ddddda;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.92);
      color: #505058;
      cursor: pointer;
      transition: border-color 0.18s ease, background 0.18s ease, color 0.18s ease;
    }

    .mobile-header-button:hover {
      border-color: #202024;
      background: #ffffff;
      color: #202024;
    }

    .mobile-header-button:disabled {
      opacity: 0.45;
      cursor: default;
    }

    .mobile-drawer-panel {
      display: none;
    }

    .mobile-drawer-actions-panel {
      border-top: 1px solid #e3e2e2;
      margin-top: 1.25rem;
      padding: 1.1rem 20px 0;
    }

    .mobile-drawer-actions-panel .sidebar-panel-label {
      margin-bottom: 0.55rem;
    }

    .mobile-drawer-actions-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 0.6rem;
      margin-top: 0;
    }

    .mobile-drawer-action,
    .mobile-drawer-select {
      min-height: 3rem;
      border: 1px solid #ddddda;
      background: rgba(255, 255, 255, 0.92);
      color: #2f2f35;
      border-radius: 14px;
      padding: 0 1rem;
      font-size: 0.8rem;
    }

    .mobile-drawer-action {
      cursor: pointer;
      text-align: center;
      transition: border-color 0.18s ease, background 0.18s ease, color 0.18s ease, transform 0.18s ease;
    }

    .mobile-drawer-action:hover {
      border-color: #202024;
      background: #ffffff;
      color: #17171b;
      transform: translateY(-1px);
    }

    .mobile-drawer-field {
      display: grid;
      gap: 0.35rem;
      min-width: 0;
    }

    .mobile-drawer-field-label {
      font-size: 0.68rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #8a8a92;
    }

    .mobile-drawer-select {
      width: 100%;
      appearance: none;
    }

    @media (min-width: 961px) {
      .mobile-overlay-scrim,
      .mobile-header-button,
      .mobile-drawer-panel {
        display: none !important;
      }
    }

    @media (max-width: 960px) {
      .docs-main-frame {
        flex-direction: column;
      }

      .docs-main-frame > .docs-main-container {
        flex: 1 1 auto;
        width: 100%;
        max-width: none;
      }

      #main > .docs-main-container,
      .docs-main-frame > .docs-main-container {
        padding: 24px 24px 0;
      }

      .mobile-header-button {
        display: inline-flex;
      }

      .mobile-drawer-panel {
        display: block;
      }

      .shell-header-inner {
        padding-left: 24px;
        padding-right: 24px;
        padding-bottom: 0;
      }

      .header-nav {
        grid-template-columns: minmax(0, 1fr) auto;
        grid-template-areas:
          "brand actions";
        align-items: center;
      }

      .header-brand {
        grid-area: brand;
      }

      .header-context {
        display: contents;
      }

      .back-link {
        display: none;
      }

      .search-trigger {
        display: none;
      }

      .header-actions {
        grid-area: actions;
      }

      .header-actions {
        grid-area: actions;
        height: auto;
        min-height: auto;
        margin-left: auto;
      }

      .header-page-actions,
      .header-actions .scroll-status,
      .hidden-control {
        display: none !important;
      }

      #sidebar {
        position: fixed;
        top: var(--shell-header-height);
        right: 0;
        bottom: 0;
        left: auto;
        width: min(380px, calc(100vw - 1rem));
        max-width: 100vw;
        border-right: 0;
        border-left: 1px solid #dfdfdc;
        transform: translateX(100%);
        transition: transform 0.24s ease;
        z-index: 1700;
        box-shadow: -24px 0 48px rgba(15, 18, 23, 0.12);
      }

      body.mobile-nav-open #sidebar {
        transform: translateX(0);
      }

      .sidebar-content {
        gap: 0;
        padding-top: 18px;
        padding-bottom: calc(24px + env(safe-area-inset-bottom, 0px));
      }

      .sidebar-workspace-shell {
        padding-left: 20px;
        padding-right: 20px;
        padding-bottom: 20px;
        margin-bottom: 0;
      }

      .sidebar-workspace-section {
        padding-bottom: 0;
      }

      .sidebar-empty-state {
        padding: 0 20px 20px;
      }

      .docs-nav-panel {
        padding-bottom: 12px;
      }

      .docs-nav-panel > .sidebar-panel-label {
        padding-left: 20px;
        padding-right: 20px;
        margin-bottom: 0.55rem;
      }

      .project-dropdown-row {
        gap: 0.75rem;
      }

      .project-dropdown {
        min-height: 3.25rem;
        border-radius: 16px;
        padding-left: 1rem;
        padding-right: 2.7rem;
      }

      .project-dropdown-actions {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 0.65rem;
      }

      .project-manage-button {
        min-height: 3rem;
        border-radius: 16px;
        padding: 0.75rem 0.9rem;
      }

      .sidebar-subsection + .sidebar-subsection {
        margin-top: 20px;
      }

      .favorite-list-compact {
        margin-top: 0.7rem;
      }

      .favorite-link {
        padding: 8px 0;
      }

      .docs-nav-section-link,
      .docs-nav-leaf,
      .docs-nav-toggle {
        padding-right: 20px;
      }

      .docs-nav-section-link {
        padding-left: 0;
        padding-right: 0;
      }

      .docs-nav-leaf {
        padding-left: calc(20px + (var(--nav-level, 0) * 10px));
      }

      .docs-nav-branch-item > .docs-nav-branch > .docs-nav-row {
        padding-left: 20px;
        padding-right: 20px;
        min-height: 44px;
      }

      .docs-nav-toggle {
        margin-right: 20px;
        padding-right: 0;
      }

      .docs-nav-link {
        padding-top: 0.82rem;
        padding-bottom: 0.82rem;
      }

      .docs-nav-leaf {
        min-height: 44px;
      }

    }

    @media (max-width: 720px) {
      #main > .docs-main-container,
      .docs-main-frame > .docs-main-container {
        padding: 18px 22px 0;
      }

      .shell-header-inner {
        padding-left: 24px;
        padding-right: 24px;
        padding-bottom: 0;
      }

      .header-nav {
        gap: 0.75rem;
      }

      .header-actions {
        justify-content: flex-end;
        margin-left: auto;
      }

      .mobile-header-button {
        width: 44px;
        height: 44px;
      }

      #sidebar {
        width: min(100vw, 360px);
      }

      .toc-summary {
        padding-left: 12px;
        padding-right: 12px;
      }

      .toc-list a,
      .toc-list a.toc-h3 {
        padding-left: 12px;
        padding-right: 12px;
      }

      .mobile-drawer-actions-grid {
        grid-template-columns: minmax(0, 1fr);
      }

    }

    /* Docs shell layout */
    #main {
      overflow-x: hidden;
    }

    .docs-main-frame {
      display: flex;
      align-items: flex-start;
      width: 100%;
      min-width: 0;
      gap: 32px;
    }

    .docs-main-frame > .docs-main-container {
      flex: 0 1 auto;
      width: min(100%, 1053px);
      max-width: 1053px;
      min-width: 0;
      margin: 0;
      padding: 0 0 0;
    }

    .docs-layout {
      display: block;
      width: min(100%, 1053px);
      max-width: 1053px;
      margin: 0;
      padding: 0;
    }

    .docs-content-column,
    .docs-content-column .container,
    .content-body {
      width: 100%;
      max-width: 1053px;
      margin: 0;
    }

    .content-body {
      padding: 32px 48px;
    }

    .toc-sidebar {
      flex: 1 0 299px;
      box-sizing: border-box;
      position: sticky;
      width: auto;
      min-width: 299px;
      max-width: none;
      margin: 0;
      padding: 0 0 0 32px;
      top: var(--shell-header-height);
    }

    .toc-details {
      display: block;
    }

    .toc-summary {
      display: none;
      list-style: none;
    }

    .toc-summary::-webkit-details-marker {
      display: none;
    }

    .toc-panel {
      display: block;
    }

    @media (max-width: 1200px) {
      .docs-main-frame {
        flex-direction: column;
        gap: 0;
      }

      .toc-sidebar {
        order: -1;
      }

      .docs-main-frame > .docs-main-container,
      .docs-layout,
      .docs-content-column,
      .docs-content-column .container,
      .content-body,
      .toc-sidebar {
        width: 100%;
        max-width: none;
      }

      .docs-main-frame > .docs-main-container {
        padding: 24px 24px 0;
      }

      .content-body {
        padding: 0;
      }

      .toc-sidebar {
        display: block;
        flex: 0 0 auto;
        position: sticky;
        top: 0;
        z-index: 20;
        min-width: 0;
        padding: 0;
        margin: 0 0 1rem;
      }

      .toc-details {
        position: static;
        border-top: 1px solid #dfdfdc;
        border-bottom: 1px solid #dfdfdc;
        background: #f8f8f7;
      }

      .toc-summary {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        width: 100%;
        padding: 8px 16px;
        font-size: 13px;
        color: #646268;
        cursor: pointer;
      }

      .toc-summary::after {
        content: "▸";
        display: inline-block;
        order: 1;
        flex-shrink: 0;
        color: #8a8a92;
        transition: transform 0.18s ease;
      }

      .toc-details[open] .toc-summary::after {
        content: "▾";
        transform: none;
      }

      .toc-summary-label,
      .toc-summary-current {
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .toc-summary-label {
        color: #8a8a92;
      }

      .toc-summary-current {
        order: 2;
        min-width: 0;
        color: #2f2f35;
      }

      .toc-panel {
        padding: 0;
        border-top: 1px solid #e6e6e2;
        background: #ffffff;
      }

      .toc-title {
        display: none;
      }

      .toc-list {
        border-left: 0;
      }

      .toc-list li + li {
        border-top: 1px solid #f0f0ed;
      }

      .toc-list a,
      .toc-list a.toc-h3 {
        padding: 0.85rem 1rem;
        font-size: 0.85rem;
        border-left: 0;
      }

      .toc-list a.active {
        background: #f3f3f1;
      }

      .toc-details:not([open]) .toc-panel {
        display: none;
      }
    }

    @media (max-width: 960px) {
    }

    /* OpenCode v2 inspired documentation shell. */
    :root {
      --sidebar-width: 280px;
      --shell-header-height: 64px;
      --docs-main-width: 885px;
      --docs-copy-width: 672px;
      --docs-rail-width: 280px;
      --docs-border: #e5e7eb;
      --docs-muted: #737373;
      --docs-subtle: #f5f5f5;
    }

    body {
      background: #ffffff;
      color: #171717;
      font-family: var(--font-sans);
      font-size: 14px;
      line-height: 1.7;
    }

    .app-shell,
    .app-body,
    #main,
    .docs-main-frame,
    .docs-main-container,
    .docs-layout,
    .docs-content-column,
    #view-mode,
    .content-body {
      background: #ffffff;
    }

    .shell-header,
    .content-header {
      height: var(--shell-header-height);
      min-height: var(--shell-header-height);
      border-bottom: 0;
      background: rgba(255, 255, 255, 0.9);
      box-shadow: none;
      backdrop-filter: blur(12px);
    }

    .shell-header-inner {
      min-height: var(--shell-header-height);
      padding: 0 24px;
    }

    .header-nav {
      grid-template-columns: 240px minmax(0, 1fr) auto;
      min-height: var(--shell-header-height);
      column-gap: 12px;
    }

    .header-brand {
      color: #171717;
      font-family: var(--font-mono);
      font-size: 16px;
      font-weight: 600;
      letter-spacing: -0.06em;
    }

    .back-link,
    .header-actions,
    .header-actions .scroll-status {
      height: var(--shell-header-height);
      min-height: var(--shell-header-height);
    }

    .back-link a,
    .back-link span {
      color: #525252;
      font-family: var(--font-sans);
      font-size: 13px;
    }

    .header-actions {
      gap: 6px;
    }

    .header-actions .scroll-status {
      display: none;
    }

    .search-trigger,
    .search-trigger-compact {
      width: 190px;
      min-width: 190px;
      max-width: 190px;
      min-height: 32px;
      height: 32px;
      padding: 0 10px;
      border: 1px solid var(--docs-border);
      border-radius: 999px;
      background: #ffffff;
      color: #737373;
      font-family: var(--font-sans);
      font-size: 12px;
    }

    .search-trigger-shortcut {
      border: 0;
      background: transparent;
      color: #737373;
      padding: 0;
      font-family: var(--font-sans);
      font-size: 10px;
    }

    .header-page-actions {
      gap: 4px;
      min-height: 32px;
    }

    .header-page-actions .page-action-button,
    .header-page-actions .copy-page-toggle,
    .theme-mode-button {
      width: 32px;
      min-width: 32px;
      height: 32px;
      min-height: 32px;
      padding: 0;
      border: 0;
      border-radius: 999px;
      background: transparent;
      color: #525252;
      box-shadow: none;
      transform: none;
    }

    .header-page-actions .page-action-button:hover,
    .header-page-actions .copy-page-toggle:hover,
    .theme-mode-button:hover {
      border: 0;
      background: #f5f5f5;
      color: #171717;
      transform: none;
    }

    .theme-mode-button {
      gap: 0;
    }

    .theme-mode-text {
      display: none;
    }

    .copy-page-dropdown {
      border: 0;
      border-radius: 999px;
      background: transparent;
    }

    .copy-page-dropdown .page-action-button {
      border-right: 0;
      border-radius: 999px 0 0 999px;
    }

    .copy-page-toggle {
      border-radius: 0 999px 999px 0;
    }

    #sidebar {
      width: var(--sidebar-width);
      background: #ffffff;
      border-right: 0;
    }

    .sidebar-content {
      gap: 0;
      padding: 16px 0 24px;
    }

    .sidebar-workspace-shell {
      margin: 0 0 12px;
      padding: 0 16px 14px;
      border-bottom: 1px solid #f0f0f0;
    }

    .sidebar-panel-label {
      margin: 0 0 6px;
      color: #262626;
      font-family: var(--font-sans);
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0;
      text-transform: none;
    }

    .project-dropdown-row {
      gap: 6px;
      margin-top: 0;
    }

    .project-dropdown-shell {
      border: 1px solid var(--docs-border);
      border-radius: 6px;
    }

    .project-dropdown {
      min-height: 34px;
      padding: 5px 30px 5px 9px;
      font-family: var(--font-sans);
      font-size: 12px;
    }

    .project-dropdown-actions {
      gap: 4px;
    }

    .project-manage-button {
      min-height: 30px;
      padding: 0 7px;
      border-color: var(--docs-border);
      border-radius: 6px;
      font-family: var(--font-sans);
      font-size: 11px;
    }

    .project-manage-button-primary {
      border-color: #e5e5e5;
      background: #f5f5f5;
      color: #171717;
    }

    .project-manage-button-primary:hover {
      border-color: #d4d4d4;
      background: #eeeeee;
      color: #171717;
    }

    .sidebar-favorites-section {
      padding-top: 12px;
    }

    .favorite-link,
    .docs-nav-link,
    .docs-nav-section-link,
    .docs-nav-leaf {
      font-family: var(--font-sans);
    }

    .favorite-link {
      color: #525252;
      font-size: 12px;
    }

    .docs-nav-panel > .sidebar-panel-label {
      display: none;
    }

    .docs-nav-item + .docs-nav-item {
      margin-top: 0;
    }

    .docs-nav-branch-item > .docs-nav-branch > .docs-nav-row {
      min-height: auto;
      margin: 20px 16px 8px;
      padding: 0;
    }

    .docs-nav-level > .docs-nav-branch-item:first-child > .docs-nav-branch > .docs-nav-row {
      margin-top: 0;
    }

    .docs-nav-section-link {
      padding: 0 10px;
      color: #262626;
      font-size: 14px;
      font-weight: 600;
      line-height: 20px;
    }

    .docs-nav-toggle {
      margin-right: 4px;
      color: #737373;
      font-family: var(--font-sans);
      font-size: 13px;
      font-weight: 400;
    }

    .docs-nav-leaf-row {
      margin: 0 16px;
      padding-right: 4px;
      border: 0;
      border-radius: 6px;
    }

    .docs-nav-leaf {
      min-height: auto;
      padding: 6px 10px;
      color: #737373;
      border: 0;
      border-radius: 6px;
      font-size: 14px;
      line-height: 20px;
    }

    .docs-nav-link:hover,
    .docs-nav-leaf-row:hover,
    .docs-nav-leaf-item:focus-within .docs-nav-leaf-row,
    .docs-nav-leaf-item:has(.docs-nav-leaf.is-active) .docs-nav-leaf-row,
    .docs-nav-leaf.is-active {
      border: 0;
      background: #f2f2f2;
      color: #171717;
      box-shadow: none;
    }

    .docs-nav-leaf.is-active {
      font-weight: 500;
    }

    .docs-nav-favorite-button {
      width: 22px;
      height: 22px;
      font-size: 12px;
    }

    .sidebar-empty-state {
      padding: 10px 16px;
    }

    .sidebar-empty-state h3 {
      font-size: 13px;
      font-weight: 600;
    }

    .sidebar-empty-state p {
      color: #737373;
      font-size: 12px;
      line-height: 1.6;
    }

    .mobile-doc-context {
      display: none;
    }

    .docs-main-frame {
      display: flex;
      align-items: flex-start;
      gap: 0;
      width: 100%;
    }

    .docs-main-frame > .docs-main-container {
      flex: 1 1 auto;
      width: auto;
      max-width: none;
      margin: 0;
      padding: 0;
    }

    .docs-layout,
    .docs-content-column,
    .docs-content-column .container {
      width: 100%;
      max-width: none;
      margin: 0;
      padding: 0;
    }

    .content-body {
      width: min(100%, var(--docs-copy-width));
      max-width: var(--docs-copy-width);
      margin: 0 auto;
      padding: 52px 0 64px;
      color: #737373;
      font-family: var(--font-sans);
      font-size: 14px;
      line-height: 1.7;
      letter-spacing: 0;
    }

    .content-body p,
    .content-body li,
    .content-body table,
    .content-body blockquote {
      color: #737373;
      font-family: var(--font-sans);
      letter-spacing: 0;
    }

    .content-body p {
      margin: 16px 0;
    }

    .content-body h1 + p {
      margin: 8px 0 20px;
      font-size: 18px;
      line-height: 28px;
    }

    .content-body ul,
    .content-body ol {
      margin: 16px 0;
      padding-left: 20px;
    }

    .content-body li {
      margin-bottom: 4px;
      line-height: 1.7;
    }

    .content-body h1,
    .content-body h2,
    .content-body h3,
    .content-body h4,
    .content-body h5,
    .content-body h6 {
      color: #171717;
      font-family: var(--font-mono);
      font-weight: 500;
      letter-spacing: -0.025em;
    }

    .content-body h1 {
      margin: 0 0 16px;
      font-size: 48px;
      line-height: 1.1;
      letter-spacing: -0.04em;
    }

    .content-body h2 {
      margin: 48px 0 30px;
      padding: 0;
      border: 0;
      background: transparent;
      font-size: 30px;
      line-height: 1.2;
    }

    .content-body h3 {
      margin: 32px 0 12px;
      font-size: 20px;
      line-height: 1.35;
    }

    .content-body h4 {
      margin: 28px 0 7px;
      color: #737373;
      font-size: 14px;
      line-height: 1.4;
    }

    .heading-anchor {
      position: static;
      margin-left: 5px;
      color: #a3a3a3;
      opacity: 0;
      font-size: 0.8em;
      text-decoration: none;
    }

    .content-body h1:hover .heading-anchor,
    .content-body h2:hover .heading-anchor,
    .content-body h3:hover .heading-anchor,
    .content-body h4:hover .heading-anchor,
    .heading-anchor:focus-visible {
      opacity: 1;
    }

    .content-body a {
      color: #171717;
      font-weight: 500;
      text-decoration-thickness: 1px;
      text-underline-offset: 2px;
    }

    .content-body hr {
      margin: 32px 0;
      border: 0;
      border-top: 1px solid var(--docs-border);
    }

    .content-body code {
      border-radius: 0;
      background: #f5f5f5;
      color: #262626;
      font-family: var(--font-mono);
      font-size: 0.92em;
    }

    .code-block-wrapper {
      margin: 20px 0;
      border: 1px solid var(--docs-border);
      border-radius: 0;
      background: #ffffff;
    }

    .code-block-header {
      min-height: 36px;
      padding: 8px 10px;
      border-bottom: 1px solid var(--docs-border);
      background: #ffffff;
      line-height: 18px;
    }

    .code-block-header::before {
      display: none;
    }

    .code-block-lang {
      color: #525252;
      font-size: 11px;
      font-weight: 500;
    }

    .code-block-wrapper pre {
      padding: 16px 20px;
      border: 0;
      background: #ffffff;
    }

    .code-block-wrapper code,
    .code-block-wrapper .hljs {
      color: #24292e;
      font-family: var(--font-mono);
      font-size: 13px;
      line-height: 1.55;
    }

    .copy-button {
      width: 26px;
      height: 26px;
      border-radius: 4px;
    }

    .copy-button > div {
      background: #ffffff;
    }

    .doc-callout,
    blockquote.doc-callout-note,
    blockquote.doc-callout-info,
    blockquote.doc-callout-api,
    blockquote.doc-callout-example,
    blockquote.doc-callout-tip,
    blockquote.doc-callout-decision,
    blockquote.doc-callout-important,
    blockquote.doc-callout-warning,
    blockquote.doc-callout-caution,
    blockquote.doc-callout-gotcha,
    blockquote.doc-callout-danger,
    blockquote.doc-callout-recommended,
    blockquote {
      grid-template-columns: 16px minmax(0, 1fr);
      gap: 10px;
      margin: 20px 0;
      padding: 12px 16px;
      border: 1px solid #e5e5e5;
      border-radius: 0;
      background: #f5f5f5;
      color: #737373;
      font-size: 14px;
      line-height: 1.7;
    }

    .doc-callout-heading {
      margin-top: 3px;
      font-size: 14px;
    }

    .doc-callout-title {
      display: none;
    }

    .content-body blockquote:not(.doc-callout),
    .editor-preview blockquote:not(.doc-callout) {
      display: block;
      color: #686868;
    }

    .content-body blockquote p,
    .editor-preview blockquote p {
      color: inherit;
    }

    blockquote.doc-callout-note,
    blockquote.doc-callout-info,
    blockquote.doc-callout-tip,
    blockquote.doc-callout-important,
    blockquote.doc-callout-recommended {
      border-color: #bfdbfe;
      background: #eff6ff;
      color: #525252;
    }

    blockquote.doc-callout-warning,
    blockquote.doc-callout-caution,
    blockquote.doc-callout-gotcha {
      border-color: #fed7aa;
      background: #fff7ed;
      color: #525252;
    }

    blockquote.doc-callout-danger {
      border-color: #fecaca;
      background: #fef2f2;
      color: #525252;
    }

    .doc-callout-body {
      color: inherit;
    }

    .table-wrap,
    .content-body img,
    .mermaid,
    .file-list a {
      border-radius: 0;
      box-shadow: none;
    }

    .table-wrap {
      margin: 20px 0;
      border-color: var(--docs-border);
      background: #ffffff;
    }

    .table-wrap table {
      font-size: 13px;
    }

    .table-wrap th,
    .table-wrap td {
      padding: 9px 12px;
      border-color: var(--docs-border);
    }

    .table-wrap th {
      background: #fafafa;
      color: #262626;
    }

    .content-body img {
      margin: 24px auto;
      border-color: var(--docs-border);
    }

    .mermaid {
      margin: 20px 0;
      padding: 24px;
      border-color: var(--docs-border);
      background: #ffffff;
    }

    .toc-sidebar {
      flex: 0 0 var(--docs-rail-width);
      height: calc(100vh - var(--shell-header-height));
      width: var(--docs-rail-width);
      min-width: var(--docs-rail-width);
      max-width: var(--docs-rail-width);
      max-height: calc(100vh - var(--shell-header-height));
      margin: 0;
      padding: 24px 16px 40px;
      right: auto;
      top: 0;
      background: #ffffff;
    }

    .toc-title {
      margin-bottom: 12px;
      color: #262626;
      font-family: var(--font-sans);
      font-size: 14px;
      font-weight: 600;
      line-height: 20px;
    }

    .toc-list a,
    .toc-list a.toc-h3 {
      padding: 6px 0;
      border-left: 0;
      color: #737373;
      font-family: var(--font-sans);
      font-size: 14px;
      line-height: 20px;
    }

    .toc-list li {
      margin: 0;
    }

    .toc-list a.toc-h3 {
      padding-left: 12px;
    }

    .toc-list a:hover,
    .toc-list a.active {
      border-left: 0;
      color: #171717;
      font-weight: 500;
    }

    .doc-pagination {
      margin-top: 48px;
      border-color: var(--docs-border);
    }

    .doc-pagination-eyebrow,
    .doc-pagination-title {
      font-family: var(--font-sans);
      font-size: 12px;
    }

    .terminal-demo,
    .editor-toolbar,
    .editor-pane-editor,
    .editor-pane-preview,
    .editor-footer {
      border-radius: 0;
      box-shadow: none;
    }

    .terminal-demo {
      border-color: #27272a;
    }

    .file-list {
      gap: 8px;
    }

    .file-list a {
      padding: 10px 12px;
      border-color: var(--docs-border);
      background: #ffffff;
      font-family: var(--font-sans);
      font-size: 13px;
    }

    @media (max-width: 1200px) {
      .docs-main-frame {
        flex-direction: column;
      }

      .docs-main-frame > .docs-main-container,
      .docs-layout,
      .docs-content-column,
      .docs-content-column .container,
      .content-body {
        width: 100%;
        max-width: none;
      }

      .docs-main-frame > .docs-main-container {
        padding: 0 32px;
      }

      .content-body {
        max-width: var(--docs-copy-width);
      }

      .toc-sidebar {
        flex: 0 0 auto;
        align-self: stretch;
        height: auto;
        width: calc(100% - 64px);
        min-width: 0;
        max-width: var(--docs-copy-width);
        max-height: none;
        margin: 24px auto 0;
        padding: 0;
        background: transparent;
      }

      .toc-details {
        border: 1px solid var(--docs-border);
        background: #ffffff;
      }

      .toc-summary {
        min-height: 46px;
        padding: 10px 16px;
        color: #171717;
        font-family: var(--font-sans);
        font-size: 13px;
        font-weight: 500;
      }

      .toc-summary-label {
        color: #171717;
      }

      .toc-summary-current {
        display: none;
      }

      .toc-panel {
        border-top-color: var(--docs-border);
      }
    }

    @media (max-width: 960px) {
      .shell-header-inner {
        padding: 0 16px;
      }

      .header-nav {
        display: grid;
        grid-template-columns: 40px minmax(0, 1fr) 40px;
        grid-template-areas: "menu brand search";
        gap: 8px;
      }

      #mobile-nav-toggle {
        grid-area: menu;
      }

      .header-brand {
        grid-area: brand;
      }

      .header-context {
        display: contents;
      }

      .back-link {
        display: none;
      }

      .search-trigger,
      .search-trigger-compact {
        display: inline-flex;
        grid-area: search;
        width: 40px;
        min-width: 40px;
        max-width: 40px;
        height: 40px;
        min-height: 40px;
        padding: 0;
        justify-content: center;
      }

      .search-trigger-text,
      .search-trigger-shortcut {
        display: none;
      }

      .header-actions {
        display: none;
      }

      .mobile-header-button {
        display: inline-flex;
        width: 40px;
        height: 40px;
        border: 0;
        border-radius: 999px;
        background: transparent;
      }

      #sidebar {
        top: var(--shell-header-height);
        right: auto;
        left: 0;
        width: min(280px, 85vw);
        border-right: 1px solid var(--docs-border);
        border-left: 0;
        transform: translateX(-105%);
        box-shadow: 20px 0 40px rgba(0, 0, 0, 0.08);
      }

      body.mobile-nav-open #sidebar {
        transform: translateX(0);
      }

      .mobile-doc-context {
        display: block;
        margin: 22px 24px 0;
        color: #737373;
        font-family: var(--font-sans);
        font-size: 13px;
      }

      .toc-sidebar {
        width: calc(100% - 48px);
        max-width: none;
        margin: 8px 24px 0;
      }

      .docs-main-frame > .docs-main-container {
        padding: 0 24px;
      }

      .content-body {
        padding: 28px 0 56px;
      }

      .content-body h1 {
        font-size: 38px;
        line-height: 1.1;
      }

      .content-body h2 {
        margin-top: 44px;
        margin-bottom: 24px;
        font-size: 28px;
      }

      .content-body h3 {
        font-size: 19px;
      }

      .mobile-drawer-panel {
        display: block;
      }

      .mobile-drawer-action,
      .project-dropdown,
      .project-manage-button {
        border-radius: 6px;
      }
    }

    @media (max-width: 560px) {
      .header-brand {
        font-size: 15px;
      }

      .mobile-doc-context,
      .toc-sidebar,
      .docs-main-frame > .docs-main-container {
        margin-left: 24px;
        margin-right: 24px;
      }

      .docs-main-frame > .docs-main-container {
        width: calc(100% - 48px);
        padding: 0;
      }

      .doc-callout,
      blockquote.doc-callout-note,
      blockquote.doc-callout-info,
      blockquote.doc-callout-api,
      blockquote.doc-callout-example,
      blockquote.doc-callout-tip,
      blockquote.doc-callout-decision,
      blockquote.doc-callout-important,
      blockquote.doc-callout-warning,
      blockquote.doc-callout-caution,
      blockquote.doc-callout-gotcha,
      blockquote.doc-callout-danger,
      blockquote.doc-callout-recommended,
      blockquote {
        grid-template-columns: 16px minmax(0, 1fr);
      }

      .code-block-wrapper {
        margin-left: 0;
        margin-right: 0;
      }
    }

    :root[data-theme-mode='dark'] body,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] body {
      background: #131010;
      color: #b8b2b2;
    }

    :root[data-theme-mode='dark'] .brand-mark,
    :root[data-theme-mode='dark'] .header-brand,
    :root[data-theme-mode='dark'] .docs-nav-link,
    :root[data-theme-mode='dark'] .docs-nav-link:hover,
    :root[data-theme-mode='dark'] .docs-nav-toggle,
    :root[data-theme-mode='dark'] .docs-nav-toggle:hover,
    :root[data-theme-mode='dark'] .favorite-link,
    :root[data-theme-mode='dark'] .favorite-name,
    :root[data-theme-mode='dark'] .content-body a,
    :root[data-theme-mode='dark'] .toc-list a:hover,
    :root[data-theme-mode='dark'] .toc-list a.active,
    :root[data-theme-mode='dark'] .toc-summary-current,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .brand-mark,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .header-brand,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .docs-nav-link,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .docs-nav-link:hover,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .docs-nav-toggle,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .docs-nav-toggle:hover,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .favorite-link,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .favorite-name,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .content-body a,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .toc-list a:hover,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .toc-list a.active,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .toc-summary-current {
      color: #ebe3db;
    }

    :root[data-theme-mode='dark'] #main,
    :root[data-theme-mode='dark'] .docs-main-frame,
    :root[data-theme-mode='dark'] .docs-main-container,
    :root[data-theme-mode='dark'] .docs-layout,
    :root[data-theme-mode='dark'] .docs-content-column,
    :root[data-theme-mode='dark'] #view-mode,
    :root[data-theme-mode='dark'] .content-body,
    :root[data-theme-mode='dark'] .toc-sidebar,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] #main,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .docs-main-frame,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .docs-main-container,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .docs-layout,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .docs-content-column,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] #view-mode,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .content-body,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .toc-sidebar {
      background: #131010;
    }

    :root[data-theme-mode='dark'] #sidebar,
    :root[data-theme-mode='dark'] .shell-header,
    :root[data-theme-mode='dark'] .content-header,
    :root[data-theme-mode='dark'] .shell-header-sidebar,
    :root[data-theme-mode='dark'] .sidebar-workspace-shell,
    :root[data-theme-mode='dark'] .toc-details,
    :root[data-theme-mode='dark'] .toc-panel,
    :root[data-theme-mode='dark'] .mobile-drawer-actions-panel,
    :root[data-theme-mode='dark'] .edit-mode,
    :root[data-theme-mode='dark'] .editor-toolbar,
    :root[data-theme-mode='dark'] .editor-pane-editor,
    :root[data-theme-mode='dark'] .editor-pane-preview,
    :root[data-theme-mode='dark'] .editor-footer,
    :root[data-theme-mode='dark'] .mobile-header-button,
    :root[data-theme-mode='dark'] .mobile-drawer-action,
    :root[data-theme-mode='dark'] .mobile-drawer-select,
    :root[data-theme-mode='dark'] .search-trigger,
    :root[data-theme-mode='dark'] .project-dropdown-shell,
    :root[data-theme-mode='dark'] .project-dropdown,
    :root[data-theme-mode='dark'] .project-manage-button,
    :root[data-theme-mode='dark'] .editor-nav-button,
    :root[data-theme-mode='dark'] .file-list a,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] #sidebar,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .shell-header,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .content-header,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .shell-header-sidebar,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .sidebar-workspace-shell,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .toc-details,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .toc-panel,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .mobile-drawer-actions-panel,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .edit-mode,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .editor-toolbar,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .editor-pane-editor,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .editor-pane-preview,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .editor-footer,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .mobile-header-button,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .mobile-drawer-action,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .mobile-drawer-select,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .search-trigger,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .project-dropdown-shell,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .project-dropdown,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .project-manage-button,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .editor-nav-button,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .file-list a {
      background: #191514;
      border-color: #34302d;
      color: #b8b2b2;
      box-shadow: none;
    }

    :root[data-theme-mode='dark'] .sidebar-workspace-shell,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .sidebar-workspace-shell {
      background: transparent;
      border-color: #2b2b2b;
    }

    :root[data-theme-mode='dark'] .project-dropdown-shell,
    :root[data-theme-mode='dark'] .project-dropdown,
    :root[data-theme-mode='dark'] .project-manage-button,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .project-dropdown-shell,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .project-dropdown,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .project-manage-button {
      background: #111111;
      border-color: #2b2b2b;
      color: #b8b8b8;
    }

    :root[data-theme-mode='dark'] #sidebar,
    :root[data-theme-mode='dark'] .shell-header,
    :root[data-theme-mode='dark'] .content-header,
    :root[data-theme-mode='dark'] .shell-header-sidebar,
    :root[data-theme-mode='dark'] .sidebar-workspace-shell,
    :root[data-theme-mode='dark'] body.editing .shell-header-sidebar,
    :root[data-theme-mode='dark'] .mobile-drawer-actions-panel,
    :root[data-theme-mode='dark'] .toc-details,
    :root[data-theme-mode='dark'] .toc-panel,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] #sidebar,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .shell-header,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .content-header,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .shell-header-sidebar,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .sidebar-workspace-shell,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] body.editing .shell-header-sidebar,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .mobile-drawer-actions-panel,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .toc-details,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .toc-panel {
      border-color: #34302d;
    }

    :root[data-theme-mode='dark'] .shell-header,
    :root[data-theme-mode='dark'] .content-header,
    :root[data-theme-mode='dark'] .shell-header-sidebar,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .shell-header,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .content-header,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .shell-header-sidebar {
      background: rgba(19, 16, 16, 0.94);
      box-shadow: 0 1px 0 rgba(52, 48, 45, 0.88);
    }

    :root[data-theme-mode='dark'] .sidebar-panel-label,
    :root[data-theme-mode='dark'] .toc-list a,
    :root[data-theme-mode='dark'] .scroll-status,
    :root[data-theme-mode='dark'] .back-link a,
    :root[data-theme-mode='dark'] .back-link span,
    :root[data-theme-mode='dark'] .docs-nav-section-link,
    :root[data-theme-mode='dark'] .mobile-drawer-field-label,
    :root[data-theme-mode='dark'] .toc-summary,
    :root[data-theme-mode='dark'] .toc-summary-label,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .sidebar-panel-label,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .toc-list a,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .scroll-status,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .back-link a,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .back-link span,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .docs-nav-section-link,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .mobile-drawer-field-label,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .toc-summary,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .toc-summary-label {
      color: #8a8282;
    }

    :root[data-theme-mode='dark'] .search-trigger-shortcut,
    :root[data-theme-mode='dark'] .search-shortcut,
    :root[data-theme-mode='dark'] .search-footer-hint kbd,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .search-trigger-shortcut,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .search-shortcut,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .search-footer-hint kbd {
      background: #221d1b;
      border-color: #34302d;
      color: #8a8282;
    }

    :root[data-theme-mode='dark'] .search-trigger,
    :root[data-theme-mode='dark'] .header-page-actions .page-action-button,
    :root[data-theme-mode='dark'] .header-page-actions .copy-page-toggle,
    :root[data-theme-mode='dark'] .theme-mode-button,
    :root[data-theme-mode='dark'] .theme-menu,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .search-trigger,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .header-page-actions .page-action-button,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .header-page-actions .copy-page-toggle,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .theme-mode-button,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .theme-menu {
      background: #161211;
      border-color: #34302d;
      color: #b8b2b2;
    }

    :root[data-theme-mode='dark'] .search-trigger:hover,
    :root[data-theme-mode='dark'] .header-page-actions .page-action-button:hover,
    :root[data-theme-mode='dark'] .header-page-actions .copy-page-toggle:hover,
    :root[data-theme-mode='dark'] .theme-mode-button:hover,
    :root[data-theme-mode='dark'] .theme-menu-option:hover,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .search-trigger:hover,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .header-page-actions .page-action-button:hover,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .header-page-actions .copy-page-toggle:hover,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .theme-mode-button:hover,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .theme-menu-option:hover {
      background: #1d1817;
      border-color: #555962;
      color: #ebe3db;
    }

    :root[data-theme-mode='dark'] .theme-menu-title,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .theme-menu-title {
      color: #8a8282;
    }

    :root[data-theme-mode='dark'] .theme-menu-divider,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .theme-menu-divider {
      background: #34302d;
    }

    :root[data-theme-mode='dark'] .theme-menu-option,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .theme-menu-option {
      color: #b8b2b2;
    }

    :root[data-theme-mode='dark'] .theme-menu-option.is-active,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .theme-menu-option.is-active {
      background: #13202b;
      color: #cfe6fb;
    }

    :root[data-theme-mode='dark'] .theme-menu-option::before,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .theme-menu-option::before {
      color: #93c5fd;
    }

    :root[data-theme-mode='dark'] .header-page-actions .page-action-button:disabled,
    :root[data-theme-mode='dark'] .header-page-actions .page-action-button:disabled:hover,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .header-page-actions .page-action-button:disabled,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .header-page-actions .page-action-button:disabled:hover {
      background: #161211;
      border-color: #34302d;
      color: #6f6767;
    }

    :root[data-theme-mode='dark'] .search-trigger:hover,
    :root[data-theme-mode='dark'] .project-dropdown-shell:hover,
    :root[data-theme-mode='dark'] .project-dropdown:hover,
    :root[data-theme-mode='dark'] .project-manage-button:hover,
    :root[data-theme-mode='dark'] .mobile-header-button:hover,
    :root[data-theme-mode='dark'] .mobile-drawer-action:hover,
    :root[data-theme-mode='dark'] .editor-nav-button:hover,
    :root[data-theme-mode='dark'] .editor-nav-button.active,
    :root[data-theme-mode='dark'] .editor-toolbar button:hover,
    :root[data-theme-mode='dark'] .file-list a:hover,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .search-trigger:hover,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .project-dropdown-shell:hover,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .project-dropdown:hover,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .project-manage-button:hover,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .mobile-header-button:hover,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .mobile-drawer-action:hover,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .editor-nav-button:hover,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .editor-nav-button.active,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .editor-toolbar button:hover,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .file-list a:hover {
      background: #201b1a;
      border-color: #555962;
      color: #ebe3db;
    }

    :root[data-theme-mode='dark'] .project-manage-button-primary,
    :root[data-theme-mode='dark'] .editor-nav-save,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .project-manage-button-primary,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .editor-nav-save {
      background: #ebe3db;
      border-color: #ebe3db;
      color: #131010;
    }

    :root[data-theme-mode='dark'] .project-manage-button-primary:hover,
    :root[data-theme-mode='dark'] .editor-nav-save:hover,
    :root[data-theme-mode='dark'] .editor-nav-save.is-saving,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .project-manage-button-primary:hover,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .editor-nav-save:hover,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .editor-nav-save.is-saving {
      background: #f7f1e8;
      border-color: #f7f1e8;
      color: #131010;
    }

    :root[data-theme-mode='dark'] .project-manage-button-danger,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .project-manage-button-danger {
      color: #f1a8ab;
    }

    :root[data-theme-mode='dark'] .project-manage-button-danger:hover,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .project-manage-button-danger:hover {
      background: #281617;
      border-color: #593133;
      color: #f4b8bb;
    }

    :root[data-theme-mode='dark'] .favorite-actions button,
    :root[data-theme-mode='dark'] .docs-nav-leaf-row:hover,
    :root[data-theme-mode='dark'] .docs-nav-leaf-item:focus-within .docs-nav-leaf-row,
    :root[data-theme-mode='dark'] .docs-nav-leaf-item:has(.docs-nav-leaf.is-active) .docs-nav-leaf-row,
    :root[data-theme-mode='dark'] .docs-nav-leaf.is-active,
    :root[data-theme-mode='dark'] .copy-button:hover,
    :root[data-theme-mode='dark'] .code-block-header,
    :root[data-theme-mode='dark'] .doc-callout,
    :root[data-theme-mode='dark'] blockquote.doc-callout-api,
    :root[data-theme-mode='dark'] blockquote.doc-callout-example,
    :root[data-theme-mode='dark'] blockquote.doc-callout-decision,
    :root[data-theme-mode='dark'] blockquote,
    :root[data-theme-mode='dark'] .toc-list a.active,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .favorite-actions button,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .docs-nav-leaf-row:hover,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .docs-nav-leaf-item:focus-within .docs-nav-leaf-row,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .docs-nav-leaf-item:has(.docs-nav-leaf.is-active) .docs-nav-leaf-row,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .docs-nav-leaf.is-active,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .copy-button:hover,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .code-block-header,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .doc-callout,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] blockquote.doc-callout-api,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] blockquote.doc-callout-example,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] blockquote.doc-callout-decision,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] blockquote,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .toc-list a.active {
      background: #1d1817;
    }

    :root[data-theme-mode='dark'] .favorite-actions button,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .favorite-actions button {
      border-color: #34302d;
      color: #b8b2b2;
    }

    :root[data-theme-mode='dark'] .docs-nav-section-link,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .docs-nav-section-link {
      color: #9c9494;
    }

    :root[data-theme-mode='dark'] .docs-nav-favorite-button,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .docs-nav-favorite-button {
      color: #6f6767;
    }

    :root[data-theme-mode='dark'] .docs-nav-favorite-button:hover,
    :root[data-theme-mode='dark'] .docs-nav-favorite-button:focus-visible,
    :root[data-theme-mode='dark'] .docs-nav-favorite-button.is-favorite,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .docs-nav-favorite-button:hover,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .docs-nav-favorite-button:focus-visible,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .docs-nav-favorite-button.is-favorite {
      color: #d6b05f;
    }

    :root[data-theme-mode='dark'] .docs-nav-leaf-item:has(.docs-nav-leaf.is-active) .docs-nav-leaf-row,
    :root[data-theme-mode='dark'] .docs-nav-leaf.is-active,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .docs-nav-leaf-item:has(.docs-nav-leaf.is-active) .docs-nav-leaf-row,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .docs-nav-leaf.is-active {
      border-left-color: #555962;
    }

    :root[data-theme-mode='dark'] .toc-title,
    :root[data-theme-mode='dark'] .content-body h1,
    :root[data-theme-mode='dark'] .content-body h2,
    :root[data-theme-mode='dark'] .content-body h3,
    :root[data-theme-mode='dark'] .content-body h4,
    :root[data-theme-mode='dark'] .content-body h5,
    :root[data-theme-mode='dark'] .content-body h6,
    :root[data-theme-mode='dark'] .editor-preview h1,
    :root[data-theme-mode='dark'] .editor-preview h2,
    :root[data-theme-mode='dark'] .editor-preview h3,
    :root[data-theme-mode='dark'] .editor-preview h4,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .toc-title,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .content-body h1,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .content-body h2,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .content-body h3,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .content-body h4,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .content-body h5,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .content-body h6,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .editor-preview h1,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .editor-preview h2,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .editor-preview h3,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .editor-preview h4 {
      color: #ebe3db;
    }

    :root[data-theme-mode='dark'] .content-body,
    :root[data-theme-mode='dark'] .content-body p,
    :root[data-theme-mode='dark'] .content-body li,
    :root[data-theme-mode='dark'] .content-body table,
    :root[data-theme-mode='dark'] .content-body blockquote,
    :root[data-theme-mode='dark'] .doc-pagination-eyebrow,
    :root[data-theme-mode='dark'] .editor-preview p,
    :root[data-theme-mode='dark'] .editor-preview li,
    :root[data-theme-mode='dark'] .editor-footer,
    :root[data-theme-mode='dark'] .copy-status,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .content-body,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .content-body p,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .content-body li,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .content-body table,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .content-body blockquote,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .doc-pagination-eyebrow,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .editor-preview p,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .editor-preview li,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .editor-footer,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .copy-status {
      color: #b8b2b2;
    }

    :root[data-theme-mode='dark'] .doc-pagination-title,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .doc-pagination-title {
      color: #ebe3db;
    }

    :root[data-theme-mode='dark'] .content-body h2,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .content-body h2 {
      border-bottom-color: #34302d;
    }

    :root[data-theme-mode='dark'] .content-body img,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .content-body img {
      border-color: #34302d;
      box-shadow: none;
    }

    :root[data-theme-mode='dark'] .table-wrap,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .table-wrap {
      border-color: #34302d;
      background: #161211;
      box-shadow: none;
    }

    :root[data-theme-mode='dark'] .table-wrap th,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .table-wrap th {
      background: #1d1817;
      color: #ebe3db;
      border-top-color: #34302d;
    }

    :root[data-theme-mode='dark'] .table-wrap td,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .table-wrap td {
      color: #b8b2b2;
      border-top-color: #34302d;
    }

    :root[data-theme-mode='dark'] .table-wrap tbody tr:nth-child(even),
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .table-wrap tbody tr:nth-child(even) {
      background: #1a1514;
    }

    :root[data-theme-mode='dark'] .table-wrap tbody tr:hover,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .table-wrap tbody tr:hover {
      background: #221d1b;
    }

    :root[data-theme-mode='dark'] .code-block-wrapper,
    :root[data-theme-mode='dark'] .code-block-wrapper pre,
    :root[data-theme-mode='dark'] .editor-pane-editor,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .code-block-wrapper,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .code-block-wrapper pre,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .editor-pane-editor {
      background: #161211;
      border-color: #34302d;
    }

    :root[data-theme-mode='dark'] .code-block-header,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .code-block-header {
      border-bottom-color: #34302d;
    }

    :root[data-theme-mode='dark'] .code-block-header::before,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .code-block-header::before {
      background: #4b4541;
      box-shadow: 1.1rem 0 0 #4b4541, 2.2rem 0 0 #4b4541;
    }

    :root[data-theme-mode='dark'] .code-block-lang,
    :root[data-theme-mode='dark'] .copy-button,
    :root[data-theme-mode='dark'] .code-block-wrapper .hljs-comment,
    :root[data-theme-mode='dark'] .code-block-wrapper .hljs-quote,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .code-block-lang,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .copy-button,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .code-block-wrapper .hljs-comment,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .code-block-wrapper .hljs-quote {
      color: #8a8282;
    }

    :root[data-theme-mode='dark'] .copy-button > div,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .copy-button > div {
      background: #1d1817;
    }

    :root[data-theme-mode='dark'] .copy-button:hover,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .copy-button:hover {
      border-color: #34302d;
      color: #ebe3db;
    }

    :root[data-theme-mode='dark'] .copy-button.copied,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .copy-button.copied {
      background: #132019;
      border-color: #28543a;
      color: #9fd9b4;
    }

    :root[data-theme-mode='dark'] .code-block-wrapper code,
    :root[data-theme-mode='dark'] .code-block-wrapper .hljs,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .code-block-wrapper code,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .code-block-wrapper .hljs {
      color: #ebe3db;
    }

    :root[data-theme-mode='dark'] .code-block-wrapper .hljs-keyword,
    :root[data-theme-mode='dark'] .code-block-wrapper .hljs-selector-tag,
    :root[data-theme-mode='dark'] .code-block-wrapper .hljs-literal,
    :root[data-theme-mode='dark'] .code-block-wrapper .hljs-section,
    :root[data-theme-mode='dark'] .code-block-wrapper .hljs-link,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .code-block-wrapper .hljs-keyword,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .code-block-wrapper .hljs-selector-tag,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .code-block-wrapper .hljs-literal,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .code-block-wrapper .hljs-section,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .code-block-wrapper .hljs-link {
      color: #c4b5fd;
    }

    :root[data-theme-mode='dark'] .code-block-wrapper .hljs-string,
    :root[data-theme-mode='dark'] .code-block-wrapper .hljs-title,
    :root[data-theme-mode='dark'] .code-block-wrapper .hljs-name,
    :root[data-theme-mode='dark'] .code-block-wrapper .hljs-type,
    :root[data-theme-mode='dark'] .code-block-wrapper .hljs-attribute,
    :root[data-theme-mode='dark'] .code-block-wrapper .hljs-symbol,
    :root[data-theme-mode='dark'] .code-block-wrapper .hljs-bullet,
    :root[data-theme-mode='dark'] .code-block-wrapper .hljs-addition,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .code-block-wrapper .hljs-string,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .code-block-wrapper .hljs-title,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .code-block-wrapper .hljs-name,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .code-block-wrapper .hljs-type,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .code-block-wrapper .hljs-attribute,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .code-block-wrapper .hljs-symbol,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .code-block-wrapper .hljs-bullet,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .code-block-wrapper .hljs-addition {
      color: #93c5fd;
    }

    :root[data-theme-mode='dark'] .code-block-wrapper .hljs-number,
    :root[data-theme-mode='dark'] .code-block-wrapper .hljs-variable,
    :root[data-theme-mode='dark'] .code-block-wrapper .hljs-template-variable,
    :root[data-theme-mode='dark'] .code-block-wrapper .hljs-regexp,
    :root[data-theme-mode='dark'] .code-block-wrapper .hljs-meta,
    :root[data-theme-mode='dark'] .code-block-wrapper .hljs-built_in,
    :root[data-theme-mode='dark'] .code-block-wrapper .hljs-builtin-name,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .code-block-wrapper .hljs-number,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .code-block-wrapper .hljs-variable,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .code-block-wrapper .hljs-template-variable,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .code-block-wrapper .hljs-regexp,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .code-block-wrapper .hljs-meta,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .code-block-wrapper .hljs-built_in,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .code-block-wrapper .hljs-builtin-name {
      color: #67e8f9;
    }

    :root[data-theme-mode='dark'] .code-block-wrapper .hljs-operator,
    :root[data-theme-mode='dark'] .code-block-wrapper .hljs-punctuation,
    :root[data-theme-mode='dark'] .code-block-wrapper .hljs-subst,
    :root[data-theme-mode='dark'] .code-block-wrapper .hljs-deletion,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .code-block-wrapper .hljs-operator,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .code-block-wrapper .hljs-punctuation,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .code-block-wrapper .hljs-subst,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .code-block-wrapper .hljs-deletion {
      color: #fda4af;
    }

    :root[data-theme-mode='dark'] blockquote.doc-callout-note,
    :root[data-theme-mode='dark'] blockquote.doc-callout-info,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] blockquote.doc-callout-note,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] blockquote.doc-callout-info {
      background: #16202e;
      color: #a5c9ff;
    }

    :root[data-theme-mode='dark'] blockquote.doc-callout-tip,
    :root[data-theme-mode='dark'] blockquote.doc-callout-important,
    :root[data-theme-mode='dark'] blockquote.doc-callout-recommended,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] blockquote.doc-callout-tip,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] blockquote.doc-callout-important,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] blockquote.doc-callout-recommended {
      background: #23192c;
      color: #d9b8ff;
    }

    :root[data-theme-mode='dark'] blockquote.doc-callout-warning,
    :root[data-theme-mode='dark'] blockquote.doc-callout-caution,
    :root[data-theme-mode='dark'] blockquote.doc-callout-gotcha,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] blockquote.doc-callout-warning,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] blockquote.doc-callout-caution,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] blockquote.doc-callout-gotcha {
      background: #2a2114;
      color: #e7c98a;
    }

    :root[data-theme-mode='dark'] blockquote.doc-callout-danger,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] blockquote.doc-callout-danger {
      background: #2b1718;
      color: #f1a8ab;
    }

    :root[data-theme-mode='dark'] blockquote.doc-callout-api,
    :root[data-theme-mode='dark'] blockquote.doc-callout-example,
    :root[data-theme-mode='dark'] blockquote.doc-callout-decision,
    :root[data-theme-mode='dark'] blockquote,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] blockquote.doc-callout-api,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] blockquote.doc-callout-example,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] blockquote.doc-callout-decision,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] blockquote {
      color: #b8b2b2;
    }

    :root[data-theme-mode='dark'] .doc-callout-body,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .doc-callout-body {
      color: inherit;
    }

    :root[data-theme-mode='dark'] .edit-mode,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .edit-mode {
      background: linear-gradient(180deg, #131010 0%, #171312 100%);
    }

    :root[data-theme-mode='dark'] .editor-toolbar,
    :root[data-theme-mode='dark'] .editor-pane-preview,
    :root[data-theme-mode='dark'] .editor-footer,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .editor-toolbar,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .editor-pane-preview,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .editor-footer {
      background: rgba(25, 21, 20, 0.9);
    }

    :root[data-theme-mode='dark'] .toolbar-divider,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .toolbar-divider {
      background: #34302d;
    }

    :root[data-theme-mode='dark'] .editor-toolbar button,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .editor-toolbar button {
      color: #8a8282;
    }

    :root[data-theme-mode='dark'] .editor-textarea,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .editor-textarea {
      color: #ebe3db;
    }

    :root[data-theme-mode='dark'] .editor-textarea:focus,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .editor-textarea:focus {
      background: rgba(255, 255, 255, 0.03);
    }

    :root[data-theme-mode='dark'] .mobile-overlay-scrim,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .mobile-overlay-scrim {
      background: rgba(5, 5, 6, 0.5);
    }

    @media (max-width: 960px) {
      :root[data-theme-mode='dark'] #sidebar,
      :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] #sidebar {
        border-left-color: #34302d;
        box-shadow: -24px 0 48px rgba(0, 0, 0, 0.35);
      }
    }

    :root[data-theme-mode='dark'],
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] {
      --bg-color: #0a0a0a;
      --sidebar-bg: #0a0a0a;
      --surface-bg: #0a0a0a;
      --header-bg: rgba(10, 10, 10, 0.9);
      --border-color: #2b2b2b;
      --docs-border: #2b2b2b;
      --docs-muted: #a3a3a3;
      --docs-subtle: #171717;
      --text-main: #fafafa;
      --text-secondary: #b8b8b8;
      --text-muted: #737373;
      --inline-code-bg: #1c1c1c;
      --inline-code-color: #e5e5e5;
    }

    :root[data-theme-mode='dark'] body,
    :root[data-theme-mode='dark'] .app-shell,
    :root[data-theme-mode='dark'] .app-body,
    :root[data-theme-mode='dark'] #main,
    :root[data-theme-mode='dark'] #sidebar,
    :root[data-theme-mode='dark'] .docs-main-frame,
    :root[data-theme-mode='dark'] .docs-main-container,
    :root[data-theme-mode='dark'] .docs-layout,
    :root[data-theme-mode='dark'] .docs-content-column,
    :root[data-theme-mode='dark'] #view-mode,
    :root[data-theme-mode='dark'] .content-body,
    :root[data-theme-mode='dark'] .toc-sidebar,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] body,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .app-shell,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .app-body,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] #main,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] #sidebar,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .docs-main-frame,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .docs-main-container,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .docs-layout,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .docs-content-column,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] #view-mode,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .content-body,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .toc-sidebar {
      background: #0a0a0a;
      color: #fafafa;
    }

    :root[data-theme-mode='dark'] .shell-header,
    :root[data-theme-mode='dark'] .content-header,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .shell-header,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .content-header {
      background: rgba(10, 10, 10, 0.9);
      border-color: #2b2b2b;
      box-shadow: none;
    }

    :root[data-theme-mode='dark'] .brand-mark,
    :root[data-theme-mode='dark'] .header-brand,
    :root[data-theme-mode='dark'] .content-body h1,
    :root[data-theme-mode='dark'] .content-body h2,
    :root[data-theme-mode='dark'] .content-body h3,
    :root[data-theme-mode='dark'] .content-body a,
    :root[data-theme-mode='dark'] .toc-title,
    :root[data-theme-mode='dark'] .toc-list a:hover,
    :root[data-theme-mode='dark'] .toc-list a.active,
    :root[data-theme-mode='dark'] .docs-nav-section-link,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .brand-mark,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .header-brand,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .content-body h1,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .content-body h2,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .content-body h3,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .content-body a,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .toc-title,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .toc-list a:hover,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .toc-list a.active,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .docs-nav-section-link {
      color: #fafafa;
    }

    :root[data-theme-mode='dark'] .content-body,
    :root[data-theme-mode='dark'] .content-body p,
    :root[data-theme-mode='dark'] .content-body li,
    :root[data-theme-mode='dark'] .toc-list a,
    :root[data-theme-mode='dark'] .docs-nav-leaf,
    :root[data-theme-mode='dark'] .mobile-doc-context,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .content-body,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .content-body p,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .content-body li,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .toc-list a,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .docs-nav-leaf,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .mobile-doc-context {
      color: #a3a3a3;
    }

    :root[data-theme-mode='dark'] .docs-nav-leaf-row:hover,
    :root[data-theme-mode='dark'] .docs-nav-leaf-item:focus-within .docs-nav-leaf-row,
    :root[data-theme-mode='dark'] .docs-nav-leaf-item:has(.docs-nav-leaf.is-active) .docs-nav-leaf-row,
    :root[data-theme-mode='dark'] .docs-nav-leaf.is-active,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .docs-nav-leaf-row:hover,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .docs-nav-leaf-item:focus-within .docs-nav-leaf-row,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .docs-nav-leaf-item:has(.docs-nav-leaf.is-active) .docs-nav-leaf-row,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .docs-nav-leaf.is-active {
      background: #1c1c1c;
      color: #fafafa;
    }

    :root[data-theme-mode='dark'] .code-block-wrapper,
    :root[data-theme-mode='dark'] .code-block-wrapper pre,
    :root[data-theme-mode='dark'] .code-block-header,
    :root[data-theme-mode='dark'] .copy-button > div,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .code-block-wrapper,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .code-block-wrapper pre,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .code-block-header,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .copy-button > div {
      background: #111111;
      border-color: #2b2b2b;
    }

    :root[data-theme-mode='dark'] .code-block-wrapper code,
    :root[data-theme-mode='dark'] .code-block-wrapper .hljs,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .code-block-wrapper code,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .code-block-wrapper .hljs {
      color: #e5e5e5;
    }

    :root[data-theme-mode='dark'] .table-wrap,
    :root[data-theme-mode='dark'] .table-wrap th,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .table-wrap,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .table-wrap th {
      background: #111111;
      border-color: #2b2b2b;
    }

    :root[data-theme-mode='dark'] .toc-details,
    :root[data-theme-mode='dark'] .toc-panel,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .toc-details,
    :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] .toc-panel {
      background: #0a0a0a;
      border-color: #2b2b2b;
    }

    @media (max-width: 960px) {
      :root[data-theme-mode='dark'] #sidebar,
      :root[data-theme-mode='system'][data-resolved-theme-mode='dark'] #sidebar {
        border-right-color: #2b2b2b;
        border-left: 0;
        box-shadow: 20px 0 40px rgba(0, 0, 0, 0.32);
      }
    }

    body.editing .mobile-header-button,
    body.editing .mobile-overlay-scrim {
      display: none !important;
    }
`;
