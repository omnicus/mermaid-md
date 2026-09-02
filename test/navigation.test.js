const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const test = require('node:test');

const { getDocsTree } = require('../lib/utils');
const { renderDocsTree } = require('../lib/renderer/navigation');

test('docs tree preserves nested directories and their index pages', (t) => {
  const docsDir = fs.mkdtempSync(path.join(os.tmpdir(), 'mermaid-md-docs-'));
  t.after(() => fs.rmSync(docsDir, { recursive: true, force: true }));

  fs.mkdirSync(path.join(docsDir, 'apps', 'example'), { recursive: true });
  fs.mkdirSync(path.join(docsDir, 'empty'));
  fs.mkdirSync(path.join(docsDir, 'notes'));
  fs.mkdirSync(path.join(docsDir, 'standalone'));
  fs.writeFileSync(path.join(docsDir, 'README.md'), '# Intro');
  fs.writeFileSync(path.join(docsDir, 'apps', 'apps.md'), '# Apps');
  fs.writeFileSync(path.join(docsDir, 'apps', 'example', 'example.md'), '# Example');
  fs.writeFileSync(path.join(docsDir, 'apps', 'example', 'setup.md'), '# Setup');
  fs.writeFileSync(path.join(docsDir, 'notes', 'README.md'), '# Notes');
  fs.writeFileSync(path.join(docsDir, 'standalone', 'standalone.md'), '# Standalone');
  fs.writeFileSync(path.join(docsDir, 'loose.md'), '# Loose');

  const tree = getDocsTree(docsDir);
  const apps = tree.find((node) => node.path === 'apps');
  const example = apps.children.find((node) => node.path === path.join('apps', 'example'));
  const notes = tree.find((node) => node.path === 'notes');

  assert.equal(apps.type, 'dir');
  assert.equal(apps.indexPath, path.join('apps', 'apps.md'));
  assert.equal(example.type, 'dir');
  assert.equal(example.indexPath, path.join('apps', 'example', 'example.md'));
  assert.deepEqual(example.children.map((node) => node.path), [path.join('apps', 'example', 'setup.md')]);
  assert.equal(notes.indexPath, null);
  assert.deepEqual(notes.children.map((node) => node.path), [path.join('notes', 'README.md')]);
  assert.equal(tree.some((node) => node.path === 'empty'), false);
  assert.deepEqual(tree.map((node) => node.path), ['', 'apps', 'notes', 'standalone', 'loose.md']);
});

test('docs navigation renders nesting depth and linked directory indexes', () => {
  const tree = [
    {
      type: 'dir',
      label: 'Apps',
      path: 'apps',
      indexPath: 'apps/apps.md',
      children: [
        {
          type: 'dir',
          label: 'Example',
          path: 'apps/example',
          indexPath: 'apps/example/example.md',
          children: [
            { type: 'file', label: 'Setup', path: 'apps/example/setup.md' },
          ],
        },
      ],
    },
  ];

  const markup = renderDocsTree('project', tree, 'apps/example/setup.md');

  assert.match(markup, /href="\/p\/project\/apps\/apps\.md"[^>]*>Apps<\/a>/);
  assert.match(markup, /href="\/p\/project\/apps\/example\/example\.md"[^>]*>Example<\/a>/);
  assert.match(markup, /class="docs-nav-toggle"[^>]*aria-controls="docs-nav-children-apps"/);
  assert.match(markup, /class="docs-nav-toggle"[^>]*aria-controls="docs-nav-children-apps%2Fexample"/);
  assert.match(markup, /href="\/p\/project\/apps\/example\/setup\.md"[^>]*aria-current="page"/);
  assert.doesNotMatch(markup, /<summary|<details/);
  assert.match(markup, /docs-nav-level-2/);
  assert.match(markup, /style="--nav-level:2"/);
});

test('folder-name-only directories render as page links', () => {
  const tree = [
    {
      type: 'dir',
      label: 'About',
      path: 'about',
      indexPath: 'about/about.md',
      children: [],
    },
  ];

  const markup = renderDocsTree('project', tree, 'about/about.md');

  assert.match(markup, /docs-nav-leaf-item/);
  assert.match(markup, /href="\/p\/project\/about\/about\.md"[^>]*aria-current="page"/);
  assert.doesNotMatch(markup, /data-doc-branch/);
});

test('docs navigation opens only ancestors of the current page', () => {
  const tree = [
    {
      type: 'dir',
      label: 'Apps',
      path: 'apps',
      children: [
        {
          type: 'dir',
          label: 'Example',
          path: 'apps/example',
          children: [
            { type: 'file', label: 'Setup', path: 'apps/example/setup.md' },
          ],
        },
      ],
    },
    {
      type: 'dir',
      label: 'Archive',
      path: 'archive',
      children: [{ type: 'file', label: 'Old', path: 'archive/old.md' }],
    },
  ];

  const markup = renderDocsTree('project', tree, 'apps/example/setup.md');
  const openBranches = markup.match(/class="docs-nav-branch is-open"/g) || [];

  assert.equal(openBranches.length, 2);
  assert.match(markup, /class="docs-nav-branch is-open" data-doc-branch data-path="apps"/);
  assert.match(markup, /class="docs-nav-branch is-open" data-doc-branch data-path="apps\/example"/);
  assert.match(markup, /data-path="archive"[\s\S]*?docs-nav-children" hidden/);
  assert.equal((markup.match(/is-current-ancestor/g) || []).length, 2);
  assert.equal((markup.match(/aria-current="page"/g) || []).length, 1);
});

test('project root does not open directories without index pages', () => {
  const tree = [
    { type: 'file', label: 'Intro', path: '' },
    {
      type: 'dir',
      label: 'Archive',
      path: 'archive',
      indexPath: null,
      children: [{ type: 'file', label: 'Old', path: 'archive/old.md' }],
    },
  ];

  const markup = renderDocsTree('project', tree, '');

  assert.doesNotMatch(markup, /is-current-ancestor/);
  assert.doesNotMatch(markup, /docs-nav-branch is-open/);
  assert.match(markup, /href="\/p\/project\/"[^>]*aria-current="page"/);
});

test('large branches are filterable and initially limited', () => {
  const tree = Array.from({ length: 35 }, (_, index) => ({
    type: 'file',
    label: `Page ${index + 1}`,
    path: `page-${index + 1}.md`,
  }));

  const markup = renderDocsTree('project', tree, 'page-35.md');

  assert.match(markup, /class="docs-nav-filter"/);
  assert.match(markup, /placeholder="Filter 35 items\.\.\."/);
  assert.match(markup, /data-doc-show-all>Show all 35<\/button>/);
  assert.equal((markup.match(/data-doc-overflow="true" hidden/g) || []).length, 4);
  assert.match(markup, /href="\/p\/project\/page-35\.md"[^>]*aria-current="page"/);
});
