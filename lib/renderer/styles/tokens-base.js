module.exports = `
    @import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600&display=swap");

    :root {
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
      opacity: 0.45;
      transition: opacity 0.2s;
    }
    .page-actions:hover {
      opacity: 1;
    }
    .page-actions.copied {
      opacity: 1;
    }
    .page-action-button {
      height: 36px;
      width: 36px;
      border-radius: 999px;
      border: 1px solid var(--border-color);
      background: rgba(255, 255, 255, 0.9);
      color: var(--text-secondary);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: border-color 0.2s, color 0.2s, background 0.2s;
      box-shadow: var(--shadow-sm);
    }
    .page-action-button:hover {
      border-color: var(--primary-color);
      color: var(--primary-color);
      background: white;
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
      border-radius: 999px 0 0 999px;
      border-right: none;
    }
    .copy-page-toggle {
      height: 36px;
      padding: 0 8px;
      border-radius: 0 999px 999px 0;
      border: 1px solid var(--border-color);
      background: rgba(255, 255, 255, 0.9);
      color: var(--text-secondary);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: border-color 0.2s, color 0.2s;
      box-shadow: var(--shadow-sm);
      font-size: 0.6rem;
    }
    .copy-page-toggle:hover {
      border-color: var(--primary-color);
      color: var(--primary-color);
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
    }
    .form-group { margin-bottom: 1.25rem; }
    .form-group label { display: block; margin-bottom: 0.5rem; font-weight: 600; font-size: 0.875rem; }
    .form-group input { width: 100%; padding: 0.625rem; border: 1px solid var(--border-color); border-radius: var(--radius-sm); font-family: inherit; }
    .form-group input:focus { outline: none; border-color: var(--primary-color); ring: 2px solid #eef2ff; }
    .modal-actions { display: flex; justify-content: flex-end; gap: 0.75rem; margin-top: 2rem; }
    .btn { padding: 0.625rem 1.25rem; border: 1px solid transparent; border-radius: var(--radius-sm); cursor: pointer; font-weight: 500; font-size: 0.875rem; }
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
      .doc-pagination,
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
        overflow: visible !important;
      }

      .table-wrap table {
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
    .editor-panes {
      flex: 1;
      display: flex;
      overflow: hidden;
    }
    .editor-pane-editor {
      flex: 1;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      background: #fafafa;
    }
    .editor-pane-preview {
      flex: 1;
      overflow-y: auto;
      border-left: 1px solid var(--border-color);
      background: white;
    }
    .editor-textarea {
      flex: 1;
      border: none;
      padding: 1.5rem;
      font-family: var(--font-mono);
      font-size: 0.9375rem;
      line-height: 1.6;
      resize: none;
      outline: none;
      background: #fafafa;
      color: #1a1a1a;
      tab-size: 2;
    }
    .editor-textarea:focus {
      background: #fff;
    }
    .editor-textarea::placeholder {
      color: #999;
    }
    .editor-preview {
      padding: 2rem;
      max-width: 720px;
      margin: 0 auto;
    }
    .editor-preview h1 { font-size: 1.75rem; margin-top: 0; }
    .editor-preview h2 { font-size: 1.375rem; margin-top: 2rem; }
    .editor-preview h3 { font-size: 1.125rem; }
    .editor-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.5rem 1rem;
      border-top: 1px solid var(--border-color);
      background: #f5f5f5;
      font-size: 0.75rem;
      color: var(--text-muted);
    }
    .editor-status { display: flex; align-items: center; gap: 0.5rem; }
    .editor-status.saving { color: var(--primary-color); }
    .editor-status.saved { color: #10b981; }
    .editor-status.error { color: #ef4444; }
    @media (max-width: 900px) {
      .editor-pane-preview { display: none; }
      body.editing.show-preview .editor-pane-editor { display: none; }
      body.editing.show-preview .editor-pane-preview { display: block; }
    }
    .editor-modal.active { display: flex; }
    .editor-container {
      background: white;
      width: 90vw;
      height: 90vh;
      max-width: 1200px;
      border-radius: var(--radius-md);
      box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }
    .editor-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 1.5rem;
      border-bottom: 1px solid var(--border-color);
      background: var(--sidebar-bg);
    }
    .editor-title {
      font-weight: 600;
      font-size: 0.9375rem;
      color: var(--text-main);
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .editor-title svg { color: var(--text-muted); }
    .editor-actions {
      display: flex;
      gap: 0.75rem;
    }
    .editor-toolbar {
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 0.5rem 1rem;
      background: #f5f5f5;
      border-bottom: 1px solid var(--border-color);
      flex-wrap: wrap;
    }
    .toolbar-group {
      display: flex;
      align-items: center;
      gap: 2px;
    }
    .toolbar-divider {
      width: 1px;
      height: 24px;
      background: var(--border-color);
      margin: 0 6px;
    }
    .toolbar-spacer {
      flex: 1;
    }
    .editor-toolbar button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border: none;
      background: transparent;
      color: var(--text-secondary);
      border-radius: var(--radius-sm);
      cursor: pointer;
      font-size: 0.75rem;
      font-weight: 600;
      transition: all 0.15s;
    }
    .editor-toolbar button:hover {
      background: white;
      color: var(--primary-color);
      box-shadow: var(--shadow-sm);
    }
    .editor-toolbar button:active {
      transform: scale(0.95);
    }
    .toolbar-btn-text {
      width: auto !important;
      padding: 0 12px !important;
      color: var(--text-secondary) !important;
    }
    .toolbar-btn-text:hover {
      color: var(--text-main) !important;
      background: white !important;
    }
    .toolbar-btn-primary {
      width: auto !important;
      padding: 0 16px !important;
      background: var(--primary-color) !important;
      color: white !important;
    }
    .toolbar-btn-primary:hover {
      background: var(--primary-hover) !important;
    }
    .editor-body {
      flex: 1;
      display: flex;
      overflow: hidden;
    }
    .editor-textarea {
      flex: 1;
      border: none;
      padding: 1.5rem;
      font-family: var(--font-mono);
      font-size: 0.9375rem;
      line-height: 1.6;
      resize: none;
      outline: none;
      background: #fafafa;
    }
    .editor-textarea:focus {
      background: white;
    }
    .editor-preview {
      flex: 1;
      overflow-y: auto;
      padding: 1.5rem;
      border-left: 1px solid var(--border-color);
      background: white;
    }
    .editor-preview h1 { font-size: 1.75rem; margin-top: 0; }
    .editor-preview h2 { font-size: 1.375rem; }
    .editor-preview h3 { font-size: 1.125rem; }
    .editor-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.75rem 1.5rem;
      border-top: 1px solid var(--border-color);
      background: var(--sidebar-bg);
      font-size: 0.8125rem;
      color: var(--text-muted);
    }
    .editor-status { display: flex; align-items: center; gap: 0.5rem; }
    .editor-status.saving { color: var(--primary-color); }
    .editor-status.saved { color: #10b981; }
    .editor-status.error { color: #ef4444; }
    .btn-edit {
      display: inline-flex;
      align-items: center;
      gap: 0.375rem;
      padding: 0.375rem 0.75rem;
      background: white;
      border: 1px solid var(--border-color);
      border-radius: var(--radius-sm);
      color: var(--text-secondary);
      font-size: 0.8125rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s;
    }
    .btn-edit:hover {
      border-color: var(--primary-color);
      color: var(--primary-color);
    }
    .editor-toggle-preview {
      display: none;
      padding: 0.375rem 0.75rem;
      background: #f3f4f6;
      border: 1px solid var(--border-color);
      border-radius: var(--radius-sm);
      color: var(--text-secondary);
      font-size: 0.75rem;
      cursor: pointer;
    }
    .editor-toggle-preview.active { background: var(--primary-color); color: white; border-color: var(--primary-color); }
    @media (max-width: 900px) {
      .editor-preview { display: none; }
      .editor-preview.mobile-visible { display: block; position: absolute; left: 0; right: 0; top: 60px; bottom: 50px; z-index: 10; }
      .editor-toggle-preview { display: inline-block; }
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

`;
