# AGENTS.md - Mermaid-MD Development Guide

Guide for coding agents working in this repository.

## Project Overview

Mermaid-MD is a local Node.js server for rendering Markdown files with Mermaid diagrams.
It supports multi-project browsing, inline editing, live reload, search, favorites, and a docs-style reading layout.

**Tech Stack:** Node.js, CommonJS, vanilla browser JS, `marked`, pure CSS

## Commands

```bash
npm install
npm start
npm run dev
PORT=3000 npm start
node server.js /path/to/docs
```

## Testing

There is no automated test suite configured today.

When validating changes:
- run a targeted Node syntax/load check when possible
- run the server with `npm start` for manual verification
- verify desktop and mobile layouts for UI changes

If adding tests:
- prefer Node's built-in test runner with `node --test`
- place tests under `test/` or `__tests__/`
- use `*.test.js` or `*.spec.js`

## Current Architecture

The app is no longer single-file. Use the current modular structure as the source of truth.

```text
mermaid-md/
  server.js
  lib/
    config.js
    utils.js
    renderer.js
    renderer/
      markdown.js
      navigation.js
      page.js
      styles.js
      styles/
        tokens-base.js
        shell-foundation.js
        shell-app.js
```

## File Responsibilities

`server.js`
- HTTP server
- route handling
- API endpoints
- SSE reload endpoint

`lib/config.js`
- settings and project persistence
- project CRUD helpers

`lib/utils.js`
- filesystem helpers
- MIME helpers
- file search
- watcher/client management

`lib/renderer.js`
- renderer entrypoint
- re-exports markdown and page rendering helpers

`lib/renderer/markdown.js`
- markdown rendering
- slug generation
- heading/code rendering helpers

`lib/renderer/navigation.js`
- docs tree rendering
- pagination helpers
- doc path/href helpers

`lib/renderer/page.js`
- full HTML page template
- client-side browser JS embedded in the page
- TOC generation and interactive UI behavior

`lib/renderer/styles.js`
- stylesheet entrypoint that concatenates split CSS modules

`lib/renderer/styles/tokens-base.js`
- design tokens
- base element styles
- legacy/shared foundation styles

`lib/renderer/styles/shell-foundation.js`
- shell/sidebar/header/doc layout foundation styles

`lib/renderer/styles/shell-app.js`
- current app-level shell overrides
- responsive/mobile shell behavior
- TOC layout
- editor shell styles

## Editing Guidance

Prefer the smallest correct change.

When working on UI issues:
- check `page.js` markup and `styles/` modules together
- do not assume a rule belongs in only one CSS file; base and app overrides are layered
- keep desktop and mobile behavior in sync
- verify that older base rules are still overridden correctly after edits

When working on rendering:
- markdown transformations belong in `lib/renderer/markdown.js`
- page-level DOM behavior belongs in `lib/renderer/page.js`
- docs tree and pagination belong in `lib/renderer/navigation.js`

When working on styles:
- keep `styles.js` as a pure entrypoint
- add styles to the most specific split module that matches the concern
- avoid reintroducing one giant stylesheet string

## Code Style

### JavaScript

- CommonJS modules only
- 2-space indentation
- semicolons required
- prefer descriptive names
- prefer small helpers over deeply tangled inline logic when the behavior is reused

Example import ordering:

```javascript
const http = require("http");
const fs = require("fs");
const path = require("path");
const { html, renderMarkdown } = require("./lib/renderer");
```

### CSS

- prefer CSS variables for shared values
- preserve the split between base/foundation/app overrides
- keep responsive rules near the feature they affect when practical
- avoid magic numbers when a shared variable already exists

### Browser JS

- vanilla JS only
- use `async/await` for fetch flows
- prefer direct DOM code over abstractions unless repeated behavior justifies it

## Important Endpoints

- `/` dashboard
- `/p/:projectId/` project root
- `/p/:projectId/...file.md` rendered markdown page
- `/api/projects` project CRUD
- `/api/settings` settings updates
- `/api/browse` filesystem browser
- `/api/search` project/global search
- `/api/file` markdown read/write for editor
- `/__reload` SSE endpoint

## Agent Notes

- The repo may have local uncommitted UI work; do not assume `HEAD` matches the live workspace.
- When refactoring styles, use the live workspace files as the source of truth.
- For visual regressions, inspect both markup and layered CSS overrides before changing structure.
