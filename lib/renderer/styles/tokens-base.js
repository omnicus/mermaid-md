module.exports = `
    @import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600&display=swap");

    :root,
    :root[data-theme-mode='light'] {
      color-scheme: light;
      --sidebar-width: 280px;
      --shell-header-height: 64px;
      --bg-color: #ffffff;
      --sidebar-bg: #f9fafb;
      --surface-bg: #ffffff;
      --header-bg: rgba(255, 255, 255, 0.85);
      --border-color: #e5e7eb;
      --primary-color: #6366f1;
      --primary-hover: #4f46e5;
      --info-color: #0f766e;
      --info-bg: #f0fdfa;
      --warn-color: #b45309;
      --warn-bg: #fffbeb;
      --danger-color: #b91c1c;
      --danger-bg: #fef2f2;
      --success-color: #166534;
      --success-bg: #f0fdf4;
      --callout-info-text: #134e4a;
      --callout-success-text: #14532d;
      --callout-warn-text: #78350f;
      --callout-danger-text: #7f1d1d;
      --text-main: #111827;
      --text-secondary: #4b5563;
      --text-muted: #9ca3af;
      --code-bg: #111827;
      --code-border-color: #374151;
      --code-header-bg: #0b1220;
      --code-header-border: #334155;
      --code-lang-color: #93a4b8;
      --code-text-color: #e5e7eb;
      --copy-btn-bg: #334155;
      --copy-btn-text: #e2e8f0;
      --copy-btn-hover-bg: var(--primary-color);
      --inline-code-bg: #f3f4f6;
      --inline-code-color: #1f2937;
      --radius-sm: 6px;
      --radius-md: 10px;
      --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
      --font-sans: ui-sans-serif, system-ui, -apple-system, sans-serif;
      --font-mono: ui-monospace, 'JetBrains Mono', 'SF Mono', monospace;
    }

    :root[data-theme-mode='dark'] {
      color-scheme: dark;
      --bg-color: #131010;
      --sidebar-bg: #131010;
      --surface-bg: #000000;
      --header-bg: rgba(19, 16, 16, 0.94);
      --border-color: #34302d;
      --info-bg: #141b22;
      --warn-bg: #241d10;
      --danger-bg: #2a1718;
      --success-bg: #132019;
      --callout-info-text: #9dc6ff;
      --callout-success-text: #9fd9b4;
      --callout-warn-text: #e1c383;
      --callout-danger-text: #f1a8ab;
      --text-main: #ebe3db;
      --text-secondary: #b8b2b2;
      --text-muted: #8a8282;
      --code-bg: #161211;
      --code-border-color: #34302d;
      --code-header-bg: #1d1817;
      --code-header-border: #34302d;
      --code-lang-color: #b8b2b2;
      --code-text-color: #ebe3db;
      --copy-btn-bg: #221d1b;
      --copy-btn-text: #d9d1c8;
      --inline-code-bg: #211c1b;
      --inline-code-color: #f0e6da;
      --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.35);
    }

    :root[data-theme-mode='dark'] .page-action-button,
    :root[data-theme-mode='dark'] .copy-page-toggle,
    :root[data-theme-mode='dark'] .copy-page-menu,
    :root[data-theme-mode='dark'] .modal,
    :root[data-theme-mode='dark'] .browser-container,
    :root[data-theme-mode='dark'] .search-modal,
    :root[data-theme-mode='dark'] .git-diff-modal,
    :root[data-theme-mode='dark'] .git-diff-modal-body,
    :root[data-theme-mode='dark'] .git-diff-viewport {
      box-shadow: none;
    }

    :root[data-theme-mode='dark'] .page-action-button,
    :root[data-theme-mode='dark'] .copy-page-toggle {
      background: rgba(25, 21, 20, 0.92);
    }

    :root[data-theme-mode='dark'] .page-action-soft,
    :root[data-theme-mode='dark'] .page-action-primary,
    :root[data-theme-mode='dark'] .page-action-primary:disabled,
    :root[data-theme-mode='dark'] .copy-page-menu,
    :root[data-theme-mode='dark'] .modal,
    :root[data-theme-mode='dark'] .browser-container,
    :root[data-theme-mode='dark'] .git-diff-modal,
    :root[data-theme-mode='dark'] .git-diff-modal-body,
    :root[data-theme-mode='dark'] .git-diff-viewport,
    :root[data-theme-mode='dark'] .git-diff-cell,
    :root[data-theme-mode='dark'] .search-modal {
      background: var(--surface-bg);
    }

    :root[data-theme-mode='dark'] .page-action-button:hover,
    :root[data-theme-mode='dark'] .copy-page-toggle:hover,
    :root[data-theme-mode='dark'] .page-action-button:disabled:hover {
      background: #201b1a;
    }

    :root[data-theme-mode='dark'] .page-action-primary.has-changes,
    :root[data-theme-mode='dark'] .page-action-primary.has-changes .page-action-git-mark {
      color: var(--text-main);
      border-color: #555962;
    }

    :root[data-theme-mode='dark'] .page-action-button.is-favorite {
      background: #2a2214;
    }

    :root[data-theme-mode='dark'] .copy-page-menu button:hover,
    :root[data-theme-mode='dark'] .browser-item:hover {
      background: #201b1a;
    }

    :root[data-theme-mode='dark'] .modal-overlay,
    :root[data-theme-mode='dark'] .search-modal-overlay {
      background: rgba(5, 5, 6, 0.6);
    }

    :root[data-theme-mode='dark'] .form-group input,
    :root[data-theme-mode='dark'] .btn-secondary,
    :root[data-theme-mode='dark'] .browser-container {
      background: #1c1817;
    }

    :root[data-theme-mode='dark'] .modal,
    :root[data-theme-mode='dark'] .form-group label,
    :root[data-theme-mode='dark'] .form-group input,
    :root[data-theme-mode='dark'] .btn,
    :root[data-theme-mode='dark'] .browser-item {
      color: var(--text-main);
    }

    :root[data-theme-mode='dark'] .form-group input::placeholder {
      color: var(--text-muted);
    }

    :root[data-theme-mode='dark'] .btn-secondary {
      color: var(--text-main);
      background: #1c1817;
      border-color: #34302d;
    }

    :root[data-theme-mode='dark'] .btn-primary {
      background: #4f46e5;
      border-color: #4f46e5;
      color: #ffffff;
    }

    :root[data-theme-mode='dark'] .browser-item {
      border-bottom-color: #2b2724;
    }

    :root[data-theme-mode='dark'] .git-diff-modal {
      border-color: #34302d;
    }

    :root[data-theme-mode='dark'] .git-diff-modal-header,
    :root[data-theme-mode='dark'] .git-diff-summary,
    :root[data-theme-mode='dark'] .git-diff-compact-summary,
    :root[data-theme-mode='dark'] .git-diff-columns {
      background: #1d1817;
      border-color: #34302d;
    }

    :root[data-theme-mode='dark'] .git-diff-column-header,
    :root[data-theme-mode='dark'] .git-diff-gutter,
    :root[data-theme-mode='dark'] .git-diff-code,
    :root[data-theme-mode='dark'] .git-diff-modal-path,
    :root[data-theme-mode='dark'] .git-diff-empty-state,
    :root[data-theme-mode='dark'] .git-diff-compact-label,
    :root[data-theme-mode='dark'] .git-diff-summary {
      color: var(--text-secondary);
    }

    :root[data-theme-mode='dark'] .git-diff-column-header,
    :root[data-theme-mode='dark'] .git-diff-cell,
    :root[data-theme-mode='dark'] .git-diff-gutter {
      border-color: #34302d;
    }

    :root[data-theme-mode='dark'] .git-diff-gutter {
      background: #181413;
    }

    :root[data-theme-mode='dark'] .git-diff-cell.is-empty .git-diff-code,
    :root[data-theme-mode='dark'] .git-diff-omitted-cell {
      background: #171312;
      color: var(--text-muted);
    }

    :root[data-theme-mode='dark'] .git-diff-close {
      border-color: #34302d;
      background: #1d1817;
      color: var(--text-secondary);
    }

    :root[data-theme-mode='dark'] .git-diff-close:hover {
      border-color: #555962;
      color: var(--text-main);
      background: #221d1b;
    }

    :root[data-theme-mode='dark'] .search-modal {
      border-color: #34302d;
    }

    :root[data-theme-mode='dark'] .search-input-wrapper,
    :root[data-theme-mode='dark'] .search-footer,
    :root[data-theme-mode='dark'] .search-result-item.selected,
    :root[data-theme-mode='dark'] .search-result-item:hover,
    :root[data-theme-mode='dark'] .search-result-item.selected,
    :root[data-theme-mode='dark'] .search-shortcut,
    :root[data-theme-mode='dark'] .search-result-type,
    :root[data-theme-mode='dark'] .search-footer-hint kbd,
    :root[data-theme-mode='dark'] .search-input-icon {
      background: #1d1817;
      border-color: #34302d;
    }

    :root[data-theme-mode='dark'] .search-input,
    :root[data-theme-mode='dark'] .search-empty-title,
    :root[data-theme-mode='dark'] .search-result-title,
    :root[data-theme-mode='dark'] .search-result-snippet mark {
      color: var(--text-main);
    }

    :root[data-theme-mode='dark'] .search-input::placeholder,
    :root[data-theme-mode='dark'] .search-results-empty,
    :root[data-theme-mode='dark'] .search-results-loading,
    :root[data-theme-mode='dark'] .search-result-icon,
    :root[data-theme-mode='dark'] .search-result-path,
    :root[data-theme-mode='dark'] .search-result-snippet,
    :root[data-theme-mode='dark'] .search-result-type,
    :root[data-theme-mode='dark'] .search-shortcut,
    :root[data-theme-mode='dark'] .search-footer,
    :root[data-theme-mode='dark'] .search-footer-hint kbd,
    :root[data-theme-mode='dark'] .search-input-icon {
      color: var(--text-secondary);
    }

    :root[data-theme-mode='dark'] .search-result-item:hover,
    :root[data-theme-mode='dark'] .search-result-item.selected {
      border-color: #414650;
    }

    :root[data-theme-mode='dark'] .search-result-snippet mark {
      background: #3a3220;
    }

    @media (prefers-color-scheme: dark) {
      :root[data-theme-mode='system'] {
        color-scheme: dark;
        --bg-color: #131010;
        --sidebar-bg: #131010;
        --surface-bg: #000000;
        --header-bg: rgba(19, 16, 16, 0.94);
        --border-color: #34302d;
        --info-bg: #141b22;
        --warn-bg: #241d10;
        --danger-bg: #2a1718;
        --success-bg: #132019;
        --callout-info-text: #9dc6ff;
        --callout-success-text: #9fd9b4;
        --callout-warn-text: #e1c383;
        --callout-danger-text: #f1a8ab;
        --text-main: #ebe3db;
        --text-secondary: #b8b2b2;
        --text-muted: #8a8282;
        --code-bg: #161211;
        --code-border-color: #34302d;
        --code-header-bg: #1d1817;
        --code-header-border: #34302d;
        --code-lang-color: #b8b2b2;
        --code-text-color: #ebe3db;
        --copy-btn-bg: #221d1b;
        --copy-btn-text: #d9d1c8;
        --inline-code-bg: #211c1b;
        --inline-code-color: #f0e6da;
        --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.35);
      }

      :root[data-theme-mode='system'] .page-action-button,
      :root[data-theme-mode='system'] .copy-page-toggle,
      :root[data-theme-mode='system'] .copy-page-menu,
      :root[data-theme-mode='system'] .modal,
      :root[data-theme-mode='system'] .browser-container,
      :root[data-theme-mode='system'] .search-modal,
      :root[data-theme-mode='system'] .git-diff-modal,
      :root[data-theme-mode='system'] .git-diff-modal-body,
      :root[data-theme-mode='system'] .git-diff-viewport {
        box-shadow: none;
      }

      :root[data-theme-mode='system'] .page-action-button,
      :root[data-theme-mode='system'] .copy-page-toggle {
        background: rgba(25, 21, 20, 0.92);
      }

      :root[data-theme-mode='system'] .page-action-soft,
      :root[data-theme-mode='system'] .page-action-primary,
      :root[data-theme-mode='system'] .page-action-primary:disabled,
      :root[data-theme-mode='system'] .copy-page-menu,
      :root[data-theme-mode='system'] .modal,
      :root[data-theme-mode='system'] .browser-container,
      :root[data-theme-mode='system'] .git-diff-modal,
      :root[data-theme-mode='system'] .git-diff-modal-body,
      :root[data-theme-mode='system'] .git-diff-viewport,
      :root[data-theme-mode='system'] .git-diff-cell,
      :root[data-theme-mode='system'] .search-modal {
        background: var(--surface-bg);
      }

      :root[data-theme-mode='system'] .page-action-button:hover,
      :root[data-theme-mode='system'] .copy-page-toggle:hover,
      :root[data-theme-mode='system'] .page-action-button:disabled:hover {
        background: #201b1a;
      }

      :root[data-theme-mode='system'] .page-action-primary.has-changes,
      :root[data-theme-mode='system'] .page-action-primary.has-changes .page-action-git-mark {
        color: var(--text-main);
        border-color: #555962;
      }

      :root[data-theme-mode='system'] .page-action-button.is-favorite {
        background: #2a2214;
      }

      :root[data-theme-mode='system'] .copy-page-menu button:hover,
      :root[data-theme-mode='system'] .browser-item:hover {
        background: #201b1a;
      }

      :root[data-theme-mode='system'] .modal-overlay,
      :root[data-theme-mode='system'] .search-modal-overlay {
        background: rgba(5, 5, 6, 0.6);
      }

      :root[data-theme-mode='system'] .form-group input,
      :root[data-theme-mode='system'] .btn-secondary,
      :root[data-theme-mode='system'] .browser-container {
        background: #1c1817;
      }

      :root[data-theme-mode='system'] .modal,
      :root[data-theme-mode='system'] .form-group label,
      :root[data-theme-mode='system'] .form-group input,
      :root[data-theme-mode='system'] .btn,
      :root[data-theme-mode='system'] .browser-item {
        color: var(--text-main);
      }

      :root[data-theme-mode='system'] .form-group input::placeholder {
        color: var(--text-muted);
      }

      :root[data-theme-mode='system'] .btn-secondary {
        color: var(--text-main);
        background: #1c1817;
        border-color: #34302d;
      }

      :root[data-theme-mode='system'] .btn-primary {
        background: #4f46e5;
        border-color: #4f46e5;
        color: #ffffff;
      }

      :root[data-theme-mode='system'] .browser-item {
        border-bottom-color: #2b2724;
      }

      :root[data-theme-mode='system'] .git-diff-modal {
        border-color: #34302d;
      }

      :root[data-theme-mode='system'] .git-diff-modal-header,
      :root[data-theme-mode='system'] .git-diff-summary,
      :root[data-theme-mode='system'] .git-diff-compact-summary,
      :root[data-theme-mode='system'] .git-diff-columns {
        background: #1d1817;
        border-color: #34302d;
      }

      :root[data-theme-mode='system'] .git-diff-column-header,
      :root[data-theme-mode='system'] .git-diff-gutter,
      :root[data-theme-mode='system'] .git-diff-code,
      :root[data-theme-mode='system'] .git-diff-modal-path,
      :root[data-theme-mode='system'] .git-diff-empty-state,
      :root[data-theme-mode='system'] .git-diff-compact-label,
      :root[data-theme-mode='system'] .git-diff-summary {
        color: var(--text-secondary);
      }

      :root[data-theme-mode='system'] .git-diff-column-header,
      :root[data-theme-mode='system'] .git-diff-cell,
      :root[data-theme-mode='system'] .git-diff-gutter {
        border-color: #34302d;
      }

      :root[data-theme-mode='system'] .git-diff-gutter {
        background: #181413;
      }

      :root[data-theme-mode='system'] .git-diff-cell.is-empty .git-diff-code,
      :root[data-theme-mode='system'] .git-diff-omitted-cell {
        background: #171312;
        color: var(--text-muted);
      }

      :root[data-theme-mode='system'] .git-diff-close {
        border-color: #34302d;
        background: #1d1817;
        color: var(--text-secondary);
      }

      :root[data-theme-mode='system'] .git-diff-close:hover {
        border-color: #555962;
        color: var(--text-main);
        background: #221d1b;
      }

      :root[data-theme-mode='system'] .search-modal {
        border-color: #34302d;
      }

      :root[data-theme-mode='system'] .search-input-wrapper,
      :root[data-theme-mode='system'] .search-footer,
      :root[data-theme-mode='system'] .search-result-item.selected,
      :root[data-theme-mode='system'] .search-result-item:hover,
      :root[data-theme-mode='system'] .search-result-item.selected,
      :root[data-theme-mode='system'] .search-shortcut,
      :root[data-theme-mode='system'] .search-result-type,
      :root[data-theme-mode='system'] .search-footer-hint kbd,
      :root[data-theme-mode='system'] .search-input-icon {
        background: #1d1817;
        border-color: #34302d;
      }

      :root[data-theme-mode='system'] .search-input,
      :root[data-theme-mode='system'] .search-empty-title,
      :root[data-theme-mode='system'] .search-result-title,
      :root[data-theme-mode='system'] .search-result-snippet mark {
        color: var(--text-main);
      }

      :root[data-theme-mode='system'] .search-input::placeholder,
      :root[data-theme-mode='system'] .search-results-empty,
      :root[data-theme-mode='system'] .search-results-loading,
      :root[data-theme-mode='system'] .search-result-icon,
      :root[data-theme-mode='system'] .search-result-path,
      :root[data-theme-mode='system'] .search-result-snippet,
      :root[data-theme-mode='system'] .search-result-type,
      :root[data-theme-mode='system'] .search-shortcut,
      :root[data-theme-mode='system'] .search-footer,
      :root[data-theme-mode='system'] .search-footer-hint kbd,
      :root[data-theme-mode='system'] .search-input-icon {
        color: var(--text-secondary);
      }

      :root[data-theme-mode='system'] .search-result-item:hover,
      :root[data-theme-mode='system'] .search-result-item.selected {
        border-color: #414650;
      }

      :root[data-theme-mode='system'] .search-result-snippet mark {
        background: #3a3220;
      }
    }

    body.theme-notebook {
      --bg-color: #ffffff;
      --surface-bg: #ffffff;
      --sidebar-bg: #f8fafc;
      --border-color: #e2e8f0;
      --primary-color: #4f46e5;
      --primary-hover: #4338ca;
      --text-main: #111827;
      --text-secondary: #475569;
      --text-muted: #94a3b8;
      --header-bg: rgba(255, 255, 255, 0.88);
      --info-color: #0f766e;
      --info-bg: #effcf9;
      --warn-color: #b45309;
      --warn-bg: #fff7e8;
      --danger-color: #b91c1c;
      --danger-bg: #fff1f2;
      --success-color: #166534;
      --success-bg: #effcf4;
      --callout-info-text: #0f4e4a;
      --callout-success-text: #1e4f2d;
      --callout-warn-text: #7a3f12;
      --callout-danger-text: #7f1d1d;
      --code-bg: #0f172a;
      --code-border-color: #273449;
      --code-header-bg: #0b1220;
      --code-header-border: #2f3f5d;
      --code-lang-color: #9fb0c8;
      --code-text-color: #e7edf7;
      --copy-btn-bg: #334155;
      --copy-btn-text: #e2e8f0;
      --copy-btn-hover-bg: #4f46e5;
      --inline-code-bg: #e8eef9;
      --inline-code-color: #2f3f5d;
    }

    body.theme-ops {
      --bg-color: #f8fafc;
      --surface-bg: #ffffff;
      --sidebar-bg: #f1f5f9;
      --border-color: #cbd5e1;
      --primary-color: #0369a1;
      --primary-hover: #075985;
      --text-main: #0f172a;
      --text-secondary: #334155;
      --text-muted: #64748b;
      --header-bg: rgba(248, 250, 252, 0.92);
      --info-color: #0c7489;
      --info-bg: #e6f6fb;
      --warn-color: #b45309;
      --warn-bg: #fff7e8;
      --danger-color: #be123c;
      --danger-bg: #ffe8ef;
      --success-color: #1d4d4f;
      --success-bg: #e7f6f6;
      --callout-info-text: #0a4e5e;
      --callout-success-text: #163a3d;
      --callout-warn-text: #7a3f12;
      --callout-danger-text: #831843;
      --code-bg: #0b1220;
      --code-border-color: #1e293b;
      --code-header-bg: #020617;
      --code-header-border: #334155;
      --code-lang-color: #93c5fd;
      --code-text-color: #e6edf6;
      --copy-btn-bg: #1e3a5f;
      --copy-btn-text: #dbeafe;
      --copy-btn-hover-bg: #0369a1;
      --inline-code-bg: #e6f0ff;
      --inline-code-color: #1e3a5f;
    }

    body.theme-blueprint {
      --bg-color: #f4f8fb;
      --surface-bg: #ffffff;
      --sidebar-bg: #eef4f8;
      --border-color: #cdd7e1;
      --primary-color: #0f766e;
      --primary-hover: #115e59;
      --text-main: #102a43;
      --text-secondary: #334e68;
      --text-muted: #627d98;
      --header-bg: rgba(244, 248, 251, 0.92);
      --info-color: #0f766e;
      --info-bg: #e8f7f5;
      --warn-color: #9a6700;
      --warn-bg: #fff8dc;
      --danger-color: #b91c1c;
      --danger-bg: #feeff0;
      --success-color: #0f766e;
      --success-bg: #e2f6f3;
      --callout-info-text: #0e5a54;
      --callout-success-text: #0f5c57;
      --callout-warn-text: #6f4e00;
      --callout-danger-text: #7f1d1d;
      --code-bg: #102a43;
      --code-border-color: #274764;
      --code-header-bg: #0b2239;
      --code-header-border: #2e516f;
      --code-lang-color: #8dc6e8;
      --code-text-color: #e5f2ff;
      --copy-btn-bg: #1e4f77;
      --copy-btn-text: #e0f2fe;
      --copy-btn-hover-bg: #0f766e;
      --inline-code-bg: #e6f4f8;
      --inline-code-color: #1e4f77;
    }

    body.theme-editorial {
      --bg-color: #f6f3ec;
      --surface-bg: #fffdf9;
      --sidebar-bg: #eee8de;
      --border-color: #d8cec0;
      --primary-color: #6c4e37;
      --primary-hover: #553d2b;
      --text-main: #2a241f;
      --text-secondary: #5e5349;
      --text-muted: #93857a;
      --header-bg: rgba(255, 253, 249, 0.92);
      --info-color: #5c6f7b;
      --info-bg: #eff3f5;
      --warn-color: #9b6b2d;
      --warn-bg: #fbf4e9;
      --danger-color: #9a4e43;
      --danger-bg: #f9eeeb;
      --success-color: #546b56;
      --success-bg: #eef3ee;
      --callout-info-text: #42535e;
      --callout-success-text: #425444;
      --callout-warn-text: #755127;
      --callout-danger-text: #74413a;
      --code-bg: #2d2a27;
      --code-border-color: #4a433d;
      --code-header-bg: #25211f;
      --code-header-border: #564f49;
      --code-lang-color: #d8cab7;
      --code-text-color: #f5efe6;
      --copy-btn-bg: #64584c;
      --copy-btn-text: #f5efe6;
      --copy-btn-hover-bg: #6c4e37;
      --inline-code-bg: #efe7dc;
      --inline-code-color: #5c4330;
      --font-sans: "Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif;
    }

    body.theme-corporate {
      --bg-color: #f4f7fa;
      --surface-bg: #ffffff;
      --sidebar-bg: #eaf0f4;
      --border-color: #c9d5df;
      --primary-color: #1f5d8a;
      --primary-hover: #17476b;
      --text-main: #163247;
      --text-secondary: #456074;
      --text-muted: #73879a;
      --header-bg: rgba(255, 255, 255, 0.94);
      --info-color: #1f5d8a;
      --info-bg: #edf4f9;
      --warn-color: #9d6700;
      --warn-bg: #fff6df;
      --danger-color: #b04a4a;
      --danger-bg: #fbeeee;
      --success-color: #2d6b57;
      --success-bg: #edf6f2;
      --callout-info-text: #214967;
      --callout-success-text: #245443;
      --callout-warn-text: #775100;
      --callout-danger-text: #823939;
      --code-bg: #102a3b;
      --code-border-color: #224457;
      --code-header-bg: #0d2230;
      --code-header-border: #35556a;
      --code-lang-color: #9fc2d9;
      --code-text-color: #e9f1f6;
      --copy-btn-bg: #2e5976;
      --copy-btn-text: #eef6fb;
      --copy-btn-hover-bg: #1f5d8a;
      --inline-code-bg: #eaf2f8;
      --inline-code-color: #1f4f72;
      --font-sans: "Avenir Next", "Segoe UI", "Helvetica Neue", Arial, sans-serif;
    }

    :root[data-theme-mode='dark'] body.theme-notebook,
    :root[data-theme-mode='dark'] body.theme-ops,
    :root[data-theme-mode='dark'] body.theme-blueprint,
    :root[data-theme-mode='dark'] body.theme-editorial,
    :root[data-theme-mode='dark'] body.theme-corporate {
      --bg-color: #131010;
      --sidebar-bg: #131010;
      --surface-bg: #000000;
      --header-bg: rgba(19, 16, 16, 0.94);
      --border-color: #34302d;
      --text-main: #ebe3db;
      --text-secondary: #b8b2b2;
      --text-muted: #8a8282;
      --code-bg: #161211;
      --code-border-color: #34302d;
      --code-header-bg: #1d1817;
      --code-header-border: #34302d;
      --code-lang-color: #b8b2b2;
      --code-text-color: #ebe3db;
      --copy-btn-bg: #221d1b;
      --copy-btn-text: #d9d1c8;
      --inline-code-bg: #211c1b;
      --inline-code-color: #f0e6da;
    }

    @media (prefers-color-scheme: dark) {
      :root[data-theme-mode='system'] body.theme-notebook,
      :root[data-theme-mode='system'] body.theme-ops,
      :root[data-theme-mode='system'] body.theme-blueprint,
      :root[data-theme-mode='system'] body.theme-editorial,
      :root[data-theme-mode='system'] body.theme-corporate {
        --bg-color: #131010;
        --sidebar-bg: #131010;
        --surface-bg: #000000;
        --header-bg: rgba(19, 16, 16, 0.94);
        --border-color: #34302d;
        --text-main: #ebe3db;
        --text-secondary: #b8b2b2;
        --text-muted: #8a8282;
        --code-bg: #161211;
        --code-border-color: #34302d;
        --code-header-bg: #1d1817;
        --code-header-border: #34302d;
        --code-lang-color: #b8b2b2;
        --code-text-color: #ebe3db;
        --copy-btn-bg: #221d1b;
        --copy-btn-text: #d9d1c8;
        --inline-code-bg: #211c1b;
        --inline-code-color: #f0e6da;
      }
    }

    * { box-sizing: border-box; }

    body {
      font-family: var(--font-sans);
      margin: 0;
      padding: 0;
      display: flex;
      height: 100vh;
      color: var(--text-main);
      background: var(--bg-color);
      overflow: hidden;
      line-height: 1.6;
    }

    :focus-visible {
      outline: 2px solid var(--primary-color);
      outline-offset: 2px;
    }

    /* Sidebar */
    #sidebar {
      width: var(--sidebar-width);
      flex-shrink: 0;
      background: var(--sidebar-bg);
      border-right: 1px solid var(--border-color);
      display: flex;
      flex-direction: column;
      transition: margin-left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      z-index: 1000;
    }
    #sidebar.hidden {
      margin-left: calc(-1 * var(--sidebar-width));
    }
    .sidebar-header {
      padding: 1.5rem 1rem;
      padding-left: 4.5rem;
      border-bottom: 1px solid var(--border-color);
      display: flex;
      justify-content: space-between;
      align-items: center;
      min-height: 64px;
    }
    .sidebar-header h2 {
      margin: 0;
      font-size: 0.875rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--text-secondary);
      font-weight: 600;
    }

    .project-list {
      flex: 1;
      overflow-y: auto;
      padding: 0.75rem 0.5rem;
    }
    .project-item {
      display: flex;
      align-items: center;
      padding: 0.625rem 0.75rem;
      gap: 0.5rem;
      cursor: pointer;
      border-radius: var(--radius-sm);
      margin-bottom: 2px;
      transition: all 0.2s;
    }
    .project-item:hover { background: #f3f4f6; }
    .project-item.active {
      background: #eef2ff;
      color: var(--primary-color);
    }
    .project-item.active .project-name { font-weight: 600; }

    .project-link {
      flex: 1;
      text-decoration: none;
      color: inherit;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 0.9375rem;
    }
    .project-actions {
      display: none;
      gap: 4px;
    }
    .project-item:hover .project-actions { display: flex; }
    .project-actions button {
      background: white;
      border: 1px solid var(--border-color);
      cursor: pointer;
      padding: 4px;
      color: var(--text-secondary);
      border-radius: 4px;
      line-height: 1;
      font-size: 0.875rem;
      box-shadow: var(--shadow-sm);
    }
    .project-actions button:hover { border-color: var(--primary-color); color: var(--primary-color); }

    .project-section {
      margin-bottom: 0.75rem;
    }
    .favorite-group {
      margin-left: 0.75rem;
      margin-top: 0.35rem;
      border-left: 2px solid #eef2ff;
      padding-left: 0.5rem;
    }
    .favorite-header {
      font-size: 0.6875rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--text-muted);
      margin: 0.35rem 0 0.4rem;
      font-weight: 600;
    }
    .favorite-list {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
    .favorite-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.45rem 0.5rem;
      border-radius: var(--radius-sm);
      transition: all 0.2s;
    }
    .favorite-item:hover { background: #f3f4f6; }
    .favorite-link {
      flex: 1;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
      color: var(--text-main);
      font-size: 0.875rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .favorite-icon {
      color: #f59e0b;
      font-size: 0.75rem;
    }
    .favorite-actions {
      display: flex;
      gap: 4px;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.2s ease;
    }
    .favorite-item:hover .favorite-actions {
      opacity: 1;
      visibility: visible;
    }
    .favorite-actions button {
      background: white;
      border: 1px solid var(--border-color);
      cursor: pointer;
      padding: 4px;
      color: var(--text-secondary);
      border-radius: 4px;
      line-height: 1;
      font-size: 0.875rem;
      box-shadow: var(--shadow-sm);
    }
    .favorite-actions button:hover { border-color: var(--primary-color); color: var(--primary-color); }

    .sidebar-footer {
      padding: 1rem;
      border-top: 1px solid var(--border-color);
    }
    .btn-add {
      width: 100%;
      padding: 0.625rem;
      background: var(--primary-color);
      color: white;
      border: none;
      border-radius: var(--radius-sm);
      cursor: pointer;
      font-weight: 500;
      font-size: 0.875rem;
      transition: background 0.2s;
    }
    .btn-add:hover { background: var(--primary-hover); }

    /* Main Content */
    #main {
      flex: 1;
      overflow-y: auto;
      padding: 0;
      position: relative;
    }
    .container {
      max-width: 720px;           /* ~65-70 characters per line at 18px */
      margin: 0 auto;
      padding: 0 2rem;
    }

    .content-header {
      position: sticky;
      top: 0;
      background: var(--header-bg);
      backdrop-filter: blur(12px);
      z-index: 100;
      padding: 1rem 0;
      border-bottom: 1px solid var(--border-color);
    }
    .header-nav {
      display: grid;
      grid-template-columns: minmax(140px, 1fr) minmax(220px, 360px) auto;
      grid-template-areas: "back search actions";
      align-items: center;
      gap: 0.75rem;
    }
    .header-actions {
      grid-area: actions;
      display: flex;
      align-items: center;
      gap: 0.75rem;
      justify-self: end;
      min-width: max-content;
    }
    .density-toggle {
      border: 1px solid var(--border-color);
      background: white;
      color: var(--text-secondary);
      border-radius: var(--radius-sm);
      padding: 0.35rem 0.6rem;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      cursor: pointer;
      transition: all 0.2s;
    }
    .density-toggle:hover {
      border-color: var(--primary-color);
      color: var(--primary-color);
      background: #f8faff;
    }
    .theme-select {
      border: 1px solid var(--border-color);
      border-radius: var(--radius-sm);
      background: var(--surface-bg);
      color: var(--text-secondary);
      padding: 0.35rem 1.6rem 0.35rem 0.55rem;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      cursor: pointer;
      appearance: none;
      background-image: linear-gradient(45deg, transparent 50%, currentColor 50%), linear-gradient(135deg, currentColor 50%, transparent 50%);
      background-position: calc(100% - 11px) calc(50% - 1px), calc(100% - 7px) calc(50% - 1px);
      background-size: 4px 4px, 4px 4px;
      background-repeat: no-repeat;
      transition: all 0.2s;
    }
    .theme-select:hover {
      border-color: var(--primary-color);
      color: var(--primary-color);
    }
    .header-actions .scroll-status {
      font-size: 0.75rem;
      color: var(--text-muted);
      font-weight: 500;
      min-width: 4.5rem;
      text-align: right;
    }

    .search-trigger {
      grid-area: search;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      padding: 0.375rem 0.75rem;
      background: var(--sidebar-bg);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-sm);
      color: var(--text-muted);
      font-size: 0.8125rem;
      cursor: pointer;
      transition: all 0.2s;
      width: 100%;
      max-width: 360px;
      justify-self: center;
    }
    .search-trigger:hover {
      border-color: var(--primary-color);
      color: var(--text-secondary);
      background: white;
    }
    .search-trigger svg {
      flex-shrink: 0;
    }
    .search-trigger-text {
      font-weight: 500;
    }
    .search-trigger-shortcut {
      font-family: var(--font-mono);
      font-size: 0.6875rem;
      background: white;
      border: 1px solid var(--border-color);
      padding: 0.125rem 0.375rem;
      border-radius: 4px;
      color: var(--text-muted);
    }
    .back-link {
      grid-area: back;
      min-width: 0;
    }

    @media (max-width: 600px) {
      .search-trigger-text,
      .search-trigger-shortcut {
        display: none;
      }
      .search-trigger {
        padding: 0.375rem;
      }
      .header-actions .scroll-status {
        display: none;
      }
      .header-actions {
        gap: 0.45rem;
      }
      .theme-select,
      .density-toggle {
        padding-top: 0.3rem;
        padding-bottom: 0.3rem;
      }
    }

    .progress-bar {
      position: absolute;
      bottom: -1px;
      left: 0;
      width: 0%;
      height: 2px;
      background: var(--primary-color);
      transition: width 0.1s;
    }

    #sidebar-toggle {
      position: fixed;
      top: 16px;
      left: 16px;
      z-index: 2000;
      background: #fff;
      border: 1px solid var(--border-color);
      border-radius: var(--radius-sm);
      width: 36px;
      height: 36px;
      cursor: pointer;
      box-shadow: var(--shadow-sm);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s;
    }
    #sidebar-toggle:hover {
      border-color: var(--primary-color);
      color: var(--primary-color);
    }

    .back-link {
      display: flex;
      align-items: center;
      gap: 1.5rem;
    }
    .back-link a {
      color: var(--text-secondary);
      text-decoration: none;
      font-size: 0.875rem;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
    }
    .back-link a:hover { color: var(--primary-color); }

    .file-list { list-style: none; padding: 0; margin: 1rem 0; }
    .file-list li { margin-bottom: 0.5rem; }
    .file-list a {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.75rem 1rem;
      color: var(--text-main);
      text-decoration: none;
      background: #f9fafb;
      border: 1px solid var(--border-color);
      border-radius: var(--radius-sm);
      transition: all 0.2s;
    }
    .file-list a:hover {
      border-color: var(--primary-color);
      background: #f5f7ff;
      color: var(--primary-color);
      transform: translateY(-1px);
      box-shadow: var(--shadow-sm);
    }

    /* Content Styling - Optimized for Reading */
    .content-body {
      padding: 3rem 0;
      font-size: 1.125rem;        /* 18px - optimal for long-form reading */
      line-height: 1.7;           /* Improved readability */
      letter-spacing: -0.01em;    /* Slightly tighter for body text */
    }
    h1, h2, h3, h4, h5, h6 {
      scroll-margin-top: 5rem;    /* Account for sticky header */
    }
    h1 {
      font-size: 2.5rem;          /* 40px */
      font-weight: 800;
      margin-bottom: 1.5rem;
      letter-spacing: -0.03em;
      line-height: 1.2;
    }
    h2 {
      font-size: 1.75rem;         /* 28px - clear hierarchy */
      font-weight: 700;
      margin: 3rem 0 1.25rem;     /* More breathing room above */
      padding-bottom: 0.5rem;
      border-bottom: 1px solid var(--border-color);
      background: linear-gradient(90deg, #f8fafc 0%, rgba(248, 250, 252, 0) 100%);
      padding-top: 0.3rem;
      padding-left: 0.5rem;
      border-left: 3px solid #e2e8f0;
      line-height: 1.3;
      letter-spacing: -0.02em;
    }
    h3 {
      font-size: 1.375rem;        /* 22px */
      font-weight: 600;
      margin: 2.5rem 0 1rem;
      line-height: 1.4;
      letter-spacing: -0.01em;
    }
    h4 {
      font-size: 1.125rem;        /* 18px */
      font-weight: 600;
      margin: 2rem 0 0.75rem;
      line-height: 1.4;
    }
    body.theme-editorial h1,
    body.theme-editorial h2,
    body.theme-editorial h3,
    body.theme-editorial h4,
    body.theme-editorial h5,
    body.theme-editorial h6 {
      font-family: "Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif;
      letter-spacing: 0;
    }
    body.theme-editorial h1 {
      border-bottom: 1px solid #d8cec0;
      padding-bottom: 0.4rem;
      margin-bottom: 1.25rem;
    }
    body.theme-editorial h2 {
      background: none;
      border-left: none;
      border-bottom: 1px solid #d8cec0;
      padding: 0 0 0.35rem;
      color: #3a3028;
    }
    body.theme-editorial blockquote,
    body.theme-editorial .doc-callout {
      background: #f8f4ee;
    }
    body.theme-corporate h1,
    body.theme-corporate h2,
    body.theme-corporate h3,
    body.theme-corporate h4,
    body.theme-corporate h5,
    body.theme-corporate h6 {
      font-family: "Avenir Next", "Segoe UI", "Helvetica Neue", Arial, sans-serif;
    }
    body.theme-corporate h1 {
      border-bottom: 2px solid #1f5d8a;
      padding-bottom: 0.45rem;
      margin-bottom: 1.35rem;
    }
    body.theme-corporate h2 {
      background: none;
      border-left: none;
      border-bottom: 1px solid #b8cad8;
      padding: 0 0 0.4rem;
      color: #17476b;
    }
    body.theme-corporate blockquote,
    body.theme-corporate .doc-callout {
      background: #f4f8fb;
    }
    p {
      margin-bottom: 1.5rem;      /* More space between paragraphs */
      color: #374151;
    }

    /* List styling for better readability */
    ul, ol {
      margin: 1.5rem 0;
      padding-left: 1.5rem;
    }
    li {
      margin-bottom: 0.5rem;
      line-height: 1.7;
    }
    li > ul, li > ol {
      margin: 0.5rem 0;
    }

    /* Code & Mermaid */
    .mermaid {
      background: #fdfdfd;
      padding: 2rem;
      border-radius: var(--radius-md);
      margin: 2rem 0;
      overflow-x: auto;
      cursor: pointer;
      transition: all 0.2s;
      border: 1px solid var(--border-color);
      display: flex;
      justify-content: center;
    }
    .mermaid svg {
      max-width: 100%;
      height: auto;
      overflow: visible;
    }
    .mermaid foreignObject {
      overflow: visible !important;
    }
    .mermaid foreignObject > div {
      overflow: visible !important;
      padding-right: 8px !important;
    }
    .mermaid .nodeLabel,
    .mermaid .label,
    .mermaid .edgeLabel,
    .mermaid .cluster-label {
      overflow: visible !important;
      padding-right: 8px;
    }
    .mermaid .node rect,
    .mermaid .node polygon,
    .mermaid .cluster rect {
      rx: 5;
    }
    .mermaid text {
      letter-spacing: 0.01em;
    }
    .mermaid:hover { border-color: var(--primary-color); box-shadow: 0 4px 12px rgba(0,0,0,0.05); }

    /* Fix mermaid ER diagram relationship label contrast */
    svg[id^="mermaid"] .edgeLabel .label text,
    svg[id^="mermaid"] .edgeLabel .label tspan {
      fill: #333333 !important;  /* Dark text */
    }
    svg[id^="mermaid"] .edgeLabel .label rect.background {
      fill: #ffffff !important;  /* White background */
    }

    .code-block-wrapper {
      margin: 1.5rem -3rem;       /* Extend beyond container */
      border-radius: var(--radius-md);
      overflow: hidden;
      background: var(--code-bg);
      border: 1px solid var(--code-border-color);
    }

    @media (max-width: 800px) {
      .code-block-wrapper {
        margin-left: -1.5rem;
        margin-right: -1.5rem;
        border-radius: 0;
      }
    }
    .code-block-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.5rem 1rem;
      background: var(--code-header-bg);
      border-bottom: 1px solid var(--code-header-border);
    }
    .code-block-lang { color: var(--code-lang-color); font-size: 0.75rem; font-family: var(--font-mono); font-weight: 600; text-transform: uppercase; }
    .copy-button {
      background: var(--copy-btn-bg);
      border: none;
      color: var(--copy-btn-text);
      font-size: 0.75rem;
      padding: 2px 8px;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.2s;
    }
    .copy-button:hover { background: var(--copy-btn-hover-bg); color: #ffffff; }
    pre { margin: 0; padding: 1.25rem; overflow-x: auto; font-family: var(--font-mono); font-size: 0.9rem; }
    code { font-family: var(--font-mono); background: var(--inline-code-bg); color: var(--inline-code-color); padding: 0.2rem 0.4rem; border-radius: 4px; font-size: 0.85em; }
    pre code { background: none; padding: 0; font-size: inherit; color: var(--code-text-color); }

    /* Markdown Elements */
    .doc-callout {
      border-left-width: 4px;
      border-left-style: solid;
      border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
      padding: 0.9rem 1.2rem;
      margin: 1.6rem 0;
    }
    .doc-callout p:last-child {
      margin-bottom: 0;
    }
    blockquote.doc-callout-note,
    blockquote.doc-callout-info,
    blockquote.doc-callout-api,
    blockquote.doc-callout-example {
      border-left-color: var(--info-color);
      background: var(--info-bg);
      color: var(--callout-info-text);
    }
    blockquote.doc-callout-tip,
    blockquote.doc-callout-decision,
    blockquote.doc-callout-important {
      border-left-color: var(--success-color);
      background: var(--success-bg);
      color: var(--callout-success-text);
    }
    blockquote.doc-callout-warning,
    blockquote.doc-callout-caution,
    blockquote.doc-callout-gotcha {
      border-left-color: var(--warn-color);
      background: var(--warn-bg);
      color: var(--callout-warn-text);
    }
    blockquote.doc-callout-danger {
      border-left-color: var(--danger-color);
      background: var(--danger-bg);
      color: var(--callout-danger-text);
    }
    .doc-callout::before {
      content: attr(data-callout-label);
      display: inline-block;
      margin-bottom: 0.5rem;
      padding: 0.15rem 0.45rem;
      border-radius: 999px;
      border: 1px solid currentColor;
      font-size: 0.68rem;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      opacity: 0.9;
    }

    .table-wrap {
      overflow-x: auto;
      margin: 1.8rem 0;
      border: 1px solid var(--border-color);
      border-radius: var(--radius-sm);
      background: white;
    }
    table { border-collapse: collapse; width: 100%; margin: 2rem 0; font-size: 0.9rem; }
    th, td { border: 1px solid var(--border-color); padding: 0.75rem 1rem; text-align: left; }
    th { background: #f9fafb; font-weight: 600; color: var(--text-secondary); }
    .table-wrap table {
      margin: 0;
      border: none;
      min-width: 520px;
    }
    .table-wrap th,
    .table-wrap td {
      border-left: none;
      border-right: none;
    }
    .table-wrap th {
      position: sticky;
      top: 0;
      z-index: 1;
      background: #f8fafc;
    }
    .table-wrap tbody tr:nth-child(even) {
      background: #fbfdff;
    }
    blockquote {
      border-left: 4px solid var(--primary-color);
      margin: 2rem 0;
      padding: 1rem 1.5rem;
      color: var(--text-secondary);
      background: #f5f7ff;
      border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
      font-size: 1.0625rem;       /* Slightly smaller than body */
      line-height: 1.65;
    }
    blockquote p:last-child {
      margin-bottom: 0;
    }
    .md-tooltip {
      position: relative;
      cursor: help;
      font-weight: 600;
      color: #0f172a;
      padding: 0.02em 0.28em;
      border-radius: 0.35em;
      background: rgba(245, 158, 11, 0.14);
      box-decoration-break: clone;
      -webkit-box-decoration-break: clone;
      text-decoration-line: underline;
      text-decoration-style: dashed;
      text-decoration-thickness: 2px;
      text-decoration-color: #d97706;
      text-underline-offset: 0.16em;
      outline: none;
      transition: background-color 0.2s ease, box-shadow 0.2s ease;
    }
    .md-tooltip:hover,
    .md-tooltip:focus-visible {
      background: rgba(245, 158, 11, 0.24);
      box-shadow: 0 0 0 2px rgba(245, 158, 11, 0.35);
    }
    .md-tooltip::after,
    .md-tooltip::before {
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.18s ease, transform 0.18s ease;
      position: absolute;
      left: 50%;
      z-index: 1200;
    }
    .md-tooltip::after {
      content: attr(data-tooltip);
      bottom: calc(100% + 10px);
      transform: translate(-50%, 6px);
      background: #0f172a;
      color: #f8fafc;
      border: 1px solid rgba(148, 163, 184, 0.35);
      border-radius: var(--radius-sm);
      padding: 0.6rem 0.8rem;
      box-shadow: 0 10px 28px rgba(0, 0, 0, 0.22);
      font-size: 0.9rem;
      line-height: 1.45;
      text-align: left;
      width: max-content;
      max-width: min(34rem, 85vw);
      white-space: pre-line;
    }
    .md-tooltip::before {
      content: '';
      bottom: calc(100% + 3px);
      transform: translate(-50%, 6px);
      border: 7px solid transparent;
      border-top-color: #0f172a;
    }
    .md-tooltip:hover::after,
    .md-tooltip:hover::before,
    .md-tooltip:focus-visible::after,
    .md-tooltip:focus-visible::before {
      opacity: 1;
      transform: translate(-50%, 0);
    }
    img { max-width: 100%; height: auto; border-radius: var(--radius-sm); border: 1px solid var(--border-color); }
    .content-body img,
    .editor-preview img {
      cursor: zoom-in;
      transition: border-color 0.2s, box-shadow 0.2s;
    }
    .content-body img:hover,
    .editor-preview img:hover {
      border-color: var(--primary-color);
      box-shadow: 0 4px 12px rgba(0,0,0,0.08);
    }

    .reload-indicator {
      position: fixed; top: 60px; right: 16px;
      background: #10b981; color: white;
      padding: 0.5rem 1rem; border-radius: 20px;
      font-size: 0.75rem; font-weight: 600; opacity: 0; transition: all 0.3s;
      z-index: 2000; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
      transform: translateY(-10px);
    }
    .reload-indicator.show { opacity: 1; transform: translateY(0); }

    .page-actions {
      position: fixed;
      top: 16px;
      right: 16px;
      z-index: 2100;
      display: flex;
      align-items: center;
      gap: 8px;
      opacity: 0.9;
      transition: opacity 0.2s;
    }
    .page-actions:hover {
      opacity: 1;
    }
    .page-actions.copied {
      opacity: 1;
    }
    .page-action-button {
      height: 38px;
      min-width: 42px;
      width: auto;
      padding: 0 0.78rem;
      border-radius: 12px;
      border: 1px solid var(--border-color);
      background: rgba(255, 255, 255, 0.9);
      color: var(--text-secondary);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.48rem;
      cursor: pointer;
      transition: border-color 0.2s, color 0.2s, background 0.2s, transform 0.2s;
      box-shadow: var(--shadow-sm);
      white-space: nowrap;
    }
    .page-action-button svg {
      flex-shrink: 0;
    }
    .page-action-label {
      font-family: var(--font-mono);
      font-size: 0.72rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }
    .page-action-compact {
      min-width: 38px;
      padding: 0 0.55rem;
      gap: 0;
    }
    .page-action-soft {
      background: #fcfcfb;
    }
    .page-action-primary {
      min-width: 48px;
      background: #ffffff;
      border-color: #d6d9df;
      color: #9aa2af;
      position: relative;
      overflow: visible;
    }
    .page-action-primary:disabled {
      background: #ffffff;
      border-color: #d6d9df;
      color: #9aa2af;
      opacity: 1;
      padding: 0;
    }
    .page-action-primary:disabled .page-action-git-mark {
      width: 100%;
      height: 100%;
      border-radius: 11px;
      opacity: 1;
    }
    .page-action-git-mark {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border-radius: 11px;
      background: transparent;
      color: currentColor;
      font-family: Georgia, "Times New Roman", serif;
      font-size: 0.92rem;
      font-weight: 700;
      line-height: 1;
      letter-spacing: -0.06em;
      text-transform: lowercase;
    }
    .page-action-button:hover {
      border-color: var(--primary-color);
      color: var(--primary-color);
      background: white;
      transform: translateY(-1px);
    }
    .page-action-button:disabled {
      cursor: not-allowed;
      opacity: 0.5;
      box-shadow: none;
    }
    .page-action-button:disabled:hover {
      border-color: var(--border-color);
      color: var(--text-secondary);
      background: rgba(255, 255, 255, 0.9);
    }
    .page-action-primary.has-changes {
      border-color: #111111;
      color: #111111;
      background: #ffffff;
    }
    .page-action-primary.has-changes .page-action-git-mark {
      color: #111111;
    }
    .page-action-pill.is-loading {
      opacity: 0.75;
    }
    .page-action-button.copied {
      border-color: #10b981;
      color: #10b981;
    }
    .page-action-button.is-favorite {
      border-color: #f59e0b;
      color: #f59e0b;
      background: #fffbeb;
    }
    .page-action-button.is-favorite svg {
      fill: currentColor;
    }
    .copy-page-dropdown {
      display: flex;
      align-items: center;
      position: relative;
    }
    .copy-page-dropdown .page-action-button {
      border-radius: 12px 0 0 12px;
      border-right: none;
    }
    .copy-page-toggle {
      height: 38px;
      padding: 0 10px;
      border-radius: 0 12px 12px 0;
      border: 1px solid var(--border-color);
      background: rgba(255, 255, 255, 0.9);
      color: var(--text-secondary);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: border-color 0.2s, color 0.2s, background 0.2s;
      box-shadow: var(--shadow-sm);
      font-size: 0.6rem;
    }
    .copy-page-toggle:hover {
      border-color: var(--primary-color);
      color: var(--primary-color);
      background: white;
    }
    .copy-page-menu {
      display: none;
      position: absolute;
      top: 100%;
      right: 0;
      margin-top: 8px;
      background: white;
      border: 1px solid var(--border-color);
      border-radius: var(--radius-sm);
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      overflow: hidden;
      min-width: 160px;
    }
    .copy-page-menu.show { display: block; }
    .copy-page-menu button {
      display: block;
      width: 100%;
      padding: 10px 16px;
      background: none;
      border: none;
      text-align: left;
      font-size: 0.875rem;
      color: var(--text-main);
      cursor: pointer;
      transition: background 0.15s;
    }
    .copy-page-menu button:hover {
      background: #f3f4f6;
      color: var(--primary-color);
    }
    .copy-page-menu button + button {
      border-top: 1px solid var(--border-color);
    }

    .heading-anchor {
      position: absolute;
      left: -1.75rem;
      color: var(--text-muted);
      opacity: 0;
      text-decoration: none;
      transition: opacity 0.2s;
    }
    h1:hover .heading-anchor, h2:hover .heading-anchor, h3:hover .heading-anchor { opacity: 1; }

    .toc-sidebar {
      position: fixed;
      top: 6rem;
      right: 2rem;
      width: 280px;
      max-height: calc(100vh - 8rem);
      overflow-y: auto;
      padding: 0 1rem;
      font-size: 0.875rem;
    }

    /* Ensure content doesn't overlap with TOC */
    #main .container {
      margin-right: auto;
      margin-left: auto;
    }

    @media (min-width: 1400px) {
      #main .container {
        margin-left: calc(50% - 360px - 140px); /* Shift left to make room for TOC */
        margin-right: calc(50% - 360px + 140px);
      }
    }
    .toc-title { font-weight: 700; margin-bottom: 1rem; font-size: 0.75rem; text-transform: uppercase; color: var(--text-muted); letter-spacing: 0.05em; }
    .toc-list { list-style: none; padding: 0; margin: 0; border-left: 1px solid var(--border-color); }
    .toc-list a {
      display: block;
      padding: 0.375rem 0 0.375rem 1rem;
      color: var(--text-secondary);
      text-decoration: none;
      margin-left: -1px;
      border-left: 2px solid transparent;
      transition: all 0.2s;
    }
    .toc-list a:hover { color: var(--primary-color); }
    .toc-list a.active { color: var(--primary-color); border-left-color: var(--primary-color); font-weight: 500; }
    .toc-list a.toc-h3 { padding-left: 2rem; font-size: 0.8125rem; }

    @media (max-width: 1200px) { .toc-sidebar { display: none; } }

    @media (max-width: 1200px) {
      #main .container {
        margin-left: auto;
        margin-right: auto;
      }
    }

    .compact-density .content-body {
      font-size: 14px;
      line-height: 1.58;
      padding: 2.25rem 0;
    }
    .compact-density h1 {
      font-size: 2.1rem;
      margin-bottom: 1rem;
    }
    .compact-density h2 {
      font-size: 1.45rem;
      margin-top: 2.2rem;
      margin-bottom: 0.9rem;
    }
    .compact-density h3 {
      font-size: 1.2rem;
      margin-top: 1.7rem;
      margin-bottom: 0.65rem;
    }
    .compact-density p,
    .compact-density li {
      margin-bottom: 0.75rem;
    }
    .compact-density .file-list a {
      padding-top: 0.6rem;
      padding-bottom: 0.6rem;
    }

    .modal-overlay {
      display: none;
      position: fixed;
      top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(0,0,0,0.4);
      backdrop-filter: blur(4px);
      z-index: 4000;
      justify-content: center; align-items: center;
    }
    .modal-overlay.active { display: flex; }
    .modal {
      background: white; padding: 2rem; border-radius: var(--radius-md);
      width: 480px; box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1);
      color: var(--text-main);
    }

    /* Git diff modal */
    .git-diff-modal-overlay {
      z-index: 4500;
      padding: 1.5rem;
      align-items: stretch;
    }
    .git-diff-modal {
      width: min(1100px, 100%);
      margin: auto;
      background: #fffdf8;
      border: 1px solid #ded9cc;
      border-radius: 22px;
      box-shadow: 0 30px 80px rgba(24, 24, 28, 0.22);
      overflow: hidden;
      display: flex;
      flex-direction: column;
      max-height: min(88vh, 920px);
    }
    .git-diff-modal-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 1rem;
      padding: 1.2rem 1.35rem 1rem;
      border-bottom: 1px solid #e8e1d3;
      background: linear-gradient(180deg, #fffdf8 0%, #f7f2e8 100%);
    }
    .git-diff-modal-header h3 {
      margin: 0.15rem 0 0;
      font-size: 1rem;
    }
    .git-diff-modal-eyebrow {
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: #8a7460;
    }
    .git-diff-modal-path {
      margin-top: 0.35rem;
      font-family: var(--font-mono);
      font-size: 0.75rem;
      color: #6b7280;
      word-break: break-all;
    }
    .git-diff-close {
      width: 40px;
      height: 40px;
      border: 1px solid #d9d4c7;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.9);
      color: #4b5563;
      font-size: 1.5rem;
      line-height: 1;
      cursor: pointer;
    }
    .git-diff-close:hover {
      border-color: #202024;
      color: #202024;
      background: #ffffff;
    }
    .git-diff-modal-body {
      flex: 1;
      min-height: 0;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      background: #fbfaf7;
    }
    .git-diff-empty-state {
      padding: 2rem 1.35rem;
      color: #6b7280;
      font-size: 0.95rem;
    }
    .git-diff-summary {
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
      gap: 1rem;
      align-items: center;
      padding: 1rem 1.35rem 0.85rem;
      border-bottom: 1px solid #ebe5d7;
      background: #f8f4ec;
      color: #6b7280;
      font-family: var(--font-mono);
      font-size: 0.72rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }
    .git-diff-summary span:nth-child(2) {
      justify-self: center;
      color: #1f2937;
    }
    .git-diff-summary span:last-child {
      justify-self: end;
    }
    .git-diff-compact-summary {
      display: flex;
      align-items: baseline;
      gap: 0.55rem;
      padding: 0.9rem 1.35rem 0.8rem;
      border-bottom: 1px solid #ebe5d7;
      background: #fcfaf4;
      font-family: var(--font-mono);
    }
    .git-diff-compact-count {
      font-size: 1.15rem;
      line-height: 1;
      font-weight: 700;
      letter-spacing: -0.06em;
    }
    .git-diff-compact-added {
      color: #22c55e;
    }
    .git-diff-compact-removed {
      color: #ef4444;
    }
    .git-diff-compact-label {
      color: #6b7280;
      font-size: 0.78rem;
      letter-spacing: -0.02em;
    }
    .git-diff-columns {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
      border-bottom: 1px solid #e8e1d3;
      background: #fffaf0;
    }
    .git-diff-column-header {
      padding: 0.8rem 1.35rem;
      font-family: var(--font-mono);
      font-size: 0.76rem;
      font-weight: 600;
      color: #4b5563;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      border-right: 1px solid #ece7dc;
    }
    .git-diff-column-header:last-child {
      border-right: none;
    }
    .git-diff-viewport {
      position: relative;
      flex: 1;
      min-height: 0;
      overflow: auto;
      background: #fbfaf7;
    }
    .git-diff-stage {
      position: relative;
      min-height: 100%;
    }
    .git-diff-virtual-row {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
    }
    .git-diff-row {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    }
    .git-diff-omitted-row {
      display: grid;
      grid-template-columns: 1fr;
    }
    .git-diff-omitted-cell {
      padding: 0.6rem 1rem;
      border-bottom: 1px solid #efe7da;
      background: #f5efe4;
      color: #8a7460;
      font-family: var(--font-mono);
      font-size: 0.78rem;
      text-align: center;
      letter-spacing: 0.02em;
    }
    .git-diff-cell {
      display: grid;
      grid-template-columns: 56px minmax(0, 1fr);
      align-items: stretch;
      border-right: 1px solid #ece7dc;
      border-bottom: 1px solid #f0eadf;
      min-width: 0;
      background: #fffdf8;
    }
    .git-diff-cell-current {
      border-right: none;
    }
    .git-diff-gutter,
    .git-diff-code {
      padding: 0.34rem 0.8rem;
      font-family: var(--font-mono);
      font-size: 0.8rem;
      line-height: 1.55;
      white-space: pre-wrap;
      word-break: break-word;
    }
    .git-diff-gutter {
      color: #9ca3af;
      text-align: right;
      border-right: 1px solid #ece7dc;
      background: rgba(255, 251, 242, 0.92);
      user-select: none;
    }
    .git-diff-code {
      color: #374151;
      min-width: 0;
    }
    .git-diff-cell.is-empty .git-diff-code {
      background: #fcfaf5;
    }
    .git-diff-cell.is-added .git-diff-code,
    .git-diff-cell.is-added .git-diff-gutter {
      background: rgba(34, 197, 94, 0.12);
      color: #166534;
    }
    .git-diff-cell.is-removed .git-diff-code,
    .git-diff-cell.is-removed .git-diff-gutter {
      background: rgba(239, 68, 68, 0.12);
      color: #b91c1c;
    }
    .git-diff-cell.is-changed .git-diff-code,
    .git-diff-cell.is-changed .git-diff-gutter {
      background: rgba(245, 158, 11, 0.12);
      color: #92400e;
    }
    .form-group { margin-bottom: 1.25rem; }
    .form-group label { display: block; margin-bottom: 0.5rem; font-weight: 600; font-size: 0.875rem; color: var(--text-main); }
    .form-group input { width: 100%; padding: 0.625rem; border: 1px solid var(--border-color); border-radius: var(--radius-sm); font-family: inherit; background: var(--surface-bg); color: var(--text-main); }
    .form-group input::placeholder { color: var(--text-muted); }
    .form-group input:focus { outline: none; border-color: var(--primary-color); ring: 2px solid #eef2ff; }
    .modal-actions { display: flex; justify-content: flex-end; gap: 0.75rem; margin-top: 2rem; }
    .btn { padding: 0.625rem 1.25rem; border: 1px solid transparent; border-radius: var(--radius-sm); cursor: pointer; font-weight: 500; font-size: 0.875rem; font-family: inherit; }
    .btn-primary { background: var(--primary-color); color: white; }
    .btn-secondary { background: white; border-color: var(--border-color); color: var(--text-secondary); }
    .btn:hover { opacity: 0.9; }

    .browser-container {
      border: 1px solid var(--border-color);
      border-radius: var(--radius-sm);
      max-height: 240px;
      overflow-y: auto;
      margin-top: 0.5rem;
      background: #fdfdfd;
    }
    .browser-item {
      padding: 8px 12px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 0.875rem;
      border-bottom: 1px solid #f3f4f6;
    }
    .browser-item:hover { background: #f3f4f6; color: var(--primary-color); }

    :root[data-theme-mode='dark'] .modal {
      background: var(--surface-bg);
      border: 1px solid var(--border-color);
      color: var(--text-main);
    }

    :root[data-theme-mode='dark'] .form-group label,
    :root[data-theme-mode='dark'] .form-group input,
    :root[data-theme-mode='dark'] .form-group input::placeholder,
    :root[data-theme-mode='dark'] .btn-secondary,
    :root[data-theme-mode='dark'] .browser-item {
      color: var(--text-main);
    }

    :root[data-theme-mode='dark'] .form-group input,
    :root[data-theme-mode='dark'] .btn-secondary,
    :root[data-theme-mode='dark'] .browser-container {
      background: #1c1817;
      border-color: #34302d;
    }

    :root[data-theme-mode='dark'] .form-group input::placeholder {
      color: var(--text-muted);
    }

    :root[data-theme-mode='dark'] .btn-primary {
      background: #4f46e5;
      border-color: #4f46e5;
      color: #ffffff;
    }

    @media (prefers-color-scheme: dark) {
      :root[data-theme-mode='system'] .modal {
        background: var(--surface-bg);
        border: 1px solid var(--border-color);
        color: var(--text-main);
      }

      :root[data-theme-mode='system'] .form-group label,
      :root[data-theme-mode='system'] .form-group input,
      :root[data-theme-mode='system'] .form-group input::placeholder,
      :root[data-theme-mode='system'] .btn-secondary,
      :root[data-theme-mode='system'] .browser-item {
        color: var(--text-main);
      }

      :root[data-theme-mode='system'] .form-group input,
      :root[data-theme-mode='system'] .btn-secondary,
      :root[data-theme-mode='system'] .browser-container {
        background: #1c1817;
        border-color: #34302d;
      }

      :root[data-theme-mode='system'] .form-group input::placeholder {
        color: var(--text-muted);
      }

      :root[data-theme-mode='system'] .btn-primary {
        background: #4f46e5;
        border-color: #4f46e5;
        color: #ffffff;
      }
    }

/* Edit Mode */
    .edit-mode {
      display: none;
      flex-direction: column;
      height: 100%;
      overflow: hidden;
    }
    body.editing #view-mode { display: none; }
    body.editing .edit-mode { display: flex; }
    body.editing .content-header { display: none; }
    body.editing .page-actions { display: none; }
    body.editing .toc-sidebar { display: none; }
    body.editing #main { padding: 0; overflow: hidden; }

    body.content-only #sidebar,
    body.content-only #sidebar-toggle,
    body.content-only .content-header,
    body.content-only .page-actions,
    body.content-only .toc-sidebar,
    body.content-only .reload-indicator {
      display: none !important;
    }
    body.content-only #main {
      overflow-y: auto;
    }
    body.content-only #main .container {
      max-width: 980px;
      margin-left: auto;
      margin-right: auto;
      padding-left: 2.5rem;
      padding-right: 2.5rem;
    }
    body.content-only .content-body {
      padding: 3.5rem 0 4rem;
    }
    body.content-only .code-block-wrapper {
      margin-left: 0;
      margin-right: 0;
    }

    @media (max-width: 800px) {
      body.content-only #main .container {
        padding-left: 1.25rem;
        padding-right: 1.25rem;
      }
      body.content-only .content-body {
        padding-top: 2rem;
        padding-bottom: 2.5rem;
      }
      body.content-only .code-block-wrapper {
        border-radius: var(--radius-md);
      }
    }

    @page {
      margin: 16mm 14mm;
    }

    @media print {
      html,
      body {
        height: auto !important;
        overflow: visible !important;
        background: #ffffff !important;
      }

      body {
        display: block !important;
        color: #111827;
      }

      #sidebar,
      #sidebar-toggle,
      .content-header,
      .page-actions,
      .toc-sidebar,
      .reload-indicator,
      .modal-overlay,
      .search-modal-overlay,
      .diagram-modal,
      .edit-mode,
      .copy-page-menu {
        display: none !important;
      }

      #main {
        display: block !important;
        height: auto !important;
        overflow: visible !important;
        padding: 0 !important;
      }

      .docs-main-container,
      .docs-layout,
      .docs-content-column,
      #view-mode {
        width: 100% !important;
        max-width: none !important;
        margin: 0 !important;
        padding: 0 !important;
      }

      .docs-layout {
        display: block !important;
      }

      #main .container {
        max-width: none !important;
        width: 100% !important;
        margin: 0 !important;
        padding: 0 !important;
      }

      .content-body {
        padding: 0 !important;
        font-size: 11pt;
        line-height: 1.55;
        letter-spacing: 0;
      }

      .content-body,
      .content-body p,
      .content-body li,
      .content-body td,
      .content-body th,
      .content-body blockquote {
        color: #1f2937 !important;
      }

      .doc-pagination {
        display: block !important;
        margin: 20pt 0 0 !important;
        padding-top: 10pt !important;
        border-top: 1px solid #d7dbe2 !important;
        text-align: right;
        font-size: 11pt !important;
        line-height: 1.55 !important;
        font-weight: 400 !important;
        break-inside: avoid;
        page-break-inside: avoid;
      }

      .doc-pagination-eyebrow {
        display: block;
        margin-bottom: 2pt;
        color: #64748b !important;
        font-size: 11pt !important;
        font-weight: 400 !important;
        letter-spacing: 0 !important;
        text-transform: none !important;
      }

      .doc-pagination-title {
        display: block;
        color: #1f2937 !important;
        font-size: inherit !important;
        line-height: inherit !important;
        font-weight: inherit !important;
      }

      .heading-anchor,
      .copy-button,
      .reload-indicator {
        display: none !important;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        background: none !important;
        border-left: 0 !important;
        border-right: 0 !important;
        box-shadow: none !important;
        text-transform: none;
      }

      .content-body > :first-child,
      .content-body h1:first-child {
        margin-top: 0 !important;
      }

      h1 {
        font-size: 24pt;
        line-height: 1.12;
        margin: 0 0 16pt;
        padding: 0 0 10pt;
      }

      h2 {
        font-size: 16pt;
        line-height: 1.25;
        margin: 24pt 0 10pt;
        padding: 0 0 5pt;
      }

      h3 {
        font-size: 13pt;
        line-height: 1.3;
        margin: 18pt 0 8pt;
        padding: 0;
      }

      h4,
      h5,
      h6 {
        font-size: 11.5pt;
        line-height: 1.35;
        margin: 14pt 0 6pt;
        padding: 0;
      }

      p,
      ul,
      ol,
      blockquote,
      .table-wrap,
      .code-block-wrapper,
      .mermaid {
        margin-top: 0;
        margin-bottom: 11pt;
      }

      ul,
      ol {
        padding-left: 1.25rem;
      }

      .code-block-wrapper {
        border-radius: 6px;
        border-width: 1px;
      }

      .code-block-header {
        padding: 5pt 9pt;
        background: #f6f7f9 !important;
        border-bottom: 1px solid #d7dbe2 !important;
      }

      .code-block-lang {
        color: #475569 !important;
        letter-spacing: 0.04em;
      }

      pre {
        padding: 10pt 11pt;
        font-size: 9.25pt;
        line-height: 1.45;
        border-radius: 0 0 6px 6px;
      }

      code {
        font-size: 0.92em;
      }

      blockquote,
      .doc-callout {
        background: #fafafa !important;
        border-left-width: 3px !important;
        border-radius: 0 6px 6px 0;
      }

      .table-wrap {
        border-radius: 6px;
        border-color: #d7dbe2 !important;
      }

      th {
        background: #f6f7f9 !important;
      }

      .mermaid {
        background: #ffffff !important;
        border-color: #d7dbe2 !important;
        padding: 12pt;
      }

      body.theme-editorial {
        font-family: "Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif;
      }

      body.theme-editorial h1,
      body.theme-editorial h2,
      body.theme-editorial h3,
      body.theme-editorial h4,
      body.theme-editorial h5,
      body.theme-editorial h6 {
        font-family: "Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif;
        color: #111827 !important;
        font-weight: 700;
        letter-spacing: 0;
      }

      body.theme-editorial h1 {
        border-bottom: 1.5pt solid #cfd5dc !important;
      }

      body.theme-editorial h2 {
        border-bottom: 1pt solid #d8dde4 !important;
      }

      body.theme-editorial h3,
      body.theme-editorial h4,
      body.theme-editorial h5,
      body.theme-editorial h6 {
        color: #243447 !important;
      }

      body.theme-editorial .doc-callout,
      body.theme-editorial blockquote {
        border-left-color: #9aa5b1 !important;
      }

      body.theme-corporate {
        font-family: "Avenir Next", "Segoe UI", "Helvetica Neue", Arial, sans-serif;
      }

      body.theme-corporate h1,
      body.theme-corporate h2,
      body.theme-corporate h3,
      body.theme-corporate h4,
      body.theme-corporate h5,
      body.theme-corporate h6 {
        font-family: "Avenir Next", "Segoe UI", "Helvetica Neue", Arial, sans-serif;
        color: #12324a !important;
        font-weight: 700;
        letter-spacing: 0.01em;
      }

      body.theme-corporate h1 {
        border-bottom: 2pt solid #1f5d8a !important;
      }

      body.theme-corporate h2 {
        border-bottom: 1pt solid #90afc5 !important;
        color: #17476b !important;
      }

      body.theme-corporate h3,
      body.theme-corporate h4,
      body.theme-corporate h5,
      body.theme-corporate h6 {
        color: #24577d !important;
      }

      body.theme-corporate th {
        background: #edf4f9 !important;
        color: #17476b !important;
      }

      body.theme-corporate .table-wrap,
      body.theme-corporate .mermaid,
      body.theme-corporate .code-block-wrapper {
        border-color: #b8cad8 !important;
      }

      body.theme-corporate .code-block-header {
        background: #edf4f9 !important;
        border-bottom-color: #c4d4e0 !important;
      }

      body.theme-corporate .doc-callout,
      body.theme-corporate blockquote {
        background: #f7fbfd !important;
        border-left-color: #3d7aa6 !important;
      }

      .code-block-wrapper,
      .mermaid,
      .table-wrap,
      blockquote,
      .doc-callout,
      img,
      pre,
      table {
        break-inside: avoid;
        page-break-inside: avoid;
      }

      h1,
      h2,
      h3,
      h4 {
        break-after: avoid;
        page-break-after: avoid;
      }

      p,
      li,
      blockquote {
        orphans: 3;
        widows: 3;
      }

      .code-block-wrapper,
      .mermaid,
      .table-wrap,
      img {
        box-shadow: none !important;
      }

      .code-block-wrapper {
        margin: 1rem 0 !important;
      }

      .table-wrap {
        overflow: hidden !important;
        clip-path: inset(0 round 6px);
      }

      .table-wrap table {
        width: 100% !important;
        min-width: 0 !important;
      }

      pre {
        overflow: visible !important;
        white-space: pre-wrap;
        word-break: break-word;
      }

      a,
      a:visited {
        color: inherit !important;
        text-decoration: none;
      }
    }
    /* Search Modal (Command Palette) */
    .search-modal-overlay {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(22, 22, 26, 0.16);
      backdrop-filter: blur(8px);
      z-index: 5000;
      justify-content: center;
      align-items: flex-start;
      padding: 10vh 1.25rem 1.25rem;
    }
    .search-modal-overlay.active {
      display: flex;
    }
    .search-modal {
      background: rgba(255, 255, 255, 0.96);
      border: 1px solid #dfdfdc;
      border-radius: 22px;
      width: min(760px, 100%);
      max-width: 100%;
      box-shadow: 0 32px 90px rgba(20, 22, 28, 0.14);
      overflow: hidden;
      backdrop-filter: blur(14px);
    }
    .search-input-wrapper {
      display: flex;
      align-items: center;
      padding: 1rem 1.1rem;
      border-bottom: 1px solid #e8e8e4;
      gap: 0.9rem;
    }
    .search-input-icon {
      width: 2.2rem;
      height: 2.2rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #e3e3df;
      border-radius: 999px;
      background: #f7f7f5;
      color: #7a7a82;
      flex-shrink: 0;
    }
    .search-input {
      flex: 1;
      border: none;
      outline: none;
      font-size: 1rem;
      font-family: var(--font-mono);
      color: #2f2f35;
      background: transparent;
    }
    .search-input::placeholder {
      color: #8d8d96;
    }
    .search-modal-actions {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
    }
    .search-shortcut {
      font-size: 0.72rem;
      color: #7f7f88;
      background: #f5f5f3;
      padding: 0.32rem 0.58rem;
      border-radius: 999px;
      border: 1px solid #e2e2de;
      font-family: var(--font-mono);
      letter-spacing: 0.01em;
    }
    .search-results {
      max-height: min(60vh, 560px);
      overflow-y: auto;
      padding: 0.45rem;
    }
    .search-results-empty {
      padding: 2.25rem 1.25rem 2.35rem;
      text-align: center;
      color: #8d8d96;
      font-size: 0.9rem;
      font-family: var(--font-mono);
    }
    .search-empty-title {
      color: #2f2f35;
      font-size: 0.98rem;
      margin-bottom: 0.45rem;
    }
    .search-empty-copy {
      max-width: 28rem;
      margin: 0 auto;
      line-height: 1.6;
    }
    .search-results-loading {
      padding: 2rem 1.25rem;
      text-align: center;
      color: #8d8d96;
      font-size: 0.9rem;
      font-family: var(--font-mono);
    }
    .search-result-item {
      display: flex;
      align-items: flex-start;
      padding: 0.82rem 0.95rem;
      cursor: pointer;
      border: 1px solid transparent;
      border-radius: 16px;
      gap: 0.75rem;
      transition: background 0.15s, border-color 0.15s, box-shadow 0.15s;
    }
    .search-result-item:last-child {
      border-bottom: none;
    }
    .search-result-item:hover,
    .search-result-item.selected {
      background: #f7f7f5;
      border-color: #e5e5e1;
    }
    .search-result-item.selected {
      background: #ffffff;
      border-color: #d9d9d5;
      box-shadow: 0 10px 24px rgba(15, 18, 23, 0.05);
    }
    .search-result-icon {
      color: #8d8d96;
      flex-shrink: 0;
      margin-top: 3px;
    }
    .search-result-content {
      flex: 1;
      min-width: 0;
    }
    .search-result-title {
      font-weight: 500;
      color: #2f2f35;
      font-size: 0.88rem;
      font-family: var(--font-mono);
      line-height: 1.4;
    }
    .search-result-path {
      font-size: 0.76rem;
      color: #9a9aa2;
      margin-top: 0.18rem;
      font-family: var(--font-mono);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .search-result-snippet {
      font-size: 0.78rem;
      color: #6e6e77;
      margin-top: 0.35rem;
      line-height: 1.55;
      font-family: var(--font-mono);
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .search-result-snippet mark {
      background: #f2f1b8;
      color: #2f2f35;
      padding: 0 0.18rem;
      border-radius: 4px;
    }
    .search-result-type {
      font-size: 0.64rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: #888891;
      background: #f5f5f3;
      border: 1px solid #e3e3df;
      padding: 0.2rem 0.45rem;
      border-radius: 999px;
      flex-shrink: 0;
      font-family: var(--font-mono);
    }
    .search-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.8rem 1rem 0.95rem;
      background: #fbfbfa;
      border-top: 1px solid #ecece8;
      font-size: 0.72rem;
      color: #87878f;
      font-family: var(--font-mono);
    }
    .search-footer-hints {
      display: flex;
      gap: 0.9rem;
      flex-wrap: wrap;
    }
    .search-footer-hint {
      display: flex;
      align-items: center;
      gap: 0.375rem;
    }
    .search-footer-hint kbd {
      background: #ffffff;
      border: 1px solid #dfdfdc;
      padding: 0.18rem 0.42rem;
      border-radius: 999px;
      font-family: var(--font-mono);
      font-size: 0.64rem;
      color: #62626a;
    }

    @media (max-width: 720px) {
      .page-action-pill {
        width: 38px;
        padding: 0;
      }

      .page-action-pill .page-action-label {
        display: none;
      }

      /* Git diff modal mobile overrides */
      .git-diff-modal-overlay {
        padding: 0.85rem;
      }

      .git-diff-modal {
        max-height: 92vh;
        border-radius: 18px;
      }

      .git-diff-modal-header {
        padding: 1rem;
      }

      .git-diff-summary {
        grid-template-columns: 1fr;
        gap: 0.35rem;
      }
      .git-diff-compact-summary {
        gap: 0.55rem;
        padding: 0.8rem 1rem 0.72rem;
        flex-wrap: wrap;
      }

      .git-diff-compact-count {
        font-size: 1rem;
      }

      .git-diff-summary span,
      .git-diff-summary span:last-child,
      .git-diff-summary span:nth-child(2) {
        justify-self: start;
      }

      .git-diff-columns,
      .git-diff-row {
        grid-template-columns: 1fr;
      }

      .git-diff-column-header {
        padding: 0.75rem 1rem;
        border-right: none;
        border-bottom: 1px solid #ece7dc;
      }

      .git-diff-cell {
        border-right: none;
      }

      .git-diff-empty-state {
        padding-left: 1rem;
        padding-right: 1rem;
      }

      .git-diff-gutter,
      .git-diff-code {
        padding-left: 0.65rem;
        padding-right: 0.65rem;
      }
    }

`;
