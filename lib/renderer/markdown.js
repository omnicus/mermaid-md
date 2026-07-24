const crypto = require('crypto');
const { marked } = require('marked');

const slugify = (text) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/<[^>]*>/g, '')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
};

const escapeHtml = (text) => {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
};

const unescapeTooltipText = (text) => {
  return text
    .replace(/\\n/g, '\n')
    .replace(/\\\|/g, '|')
    .replace(/\\\}/g, '}')
    .replace(/\\\\/g, '\\');
};

const renderer = {
  code(token) {
    if (token.lang === 'mermaid') {
      return `<div class="mermaid">${token.text}</div>`;
    }
    const language = (token.lang || 'text').trim().toLowerCase();
    const lang = token.lang ? ` class="language-${token.lang}"` : '';
    const codeId = crypto.randomBytes(4).toString('hex');
    const escapedCode = escapeHtml(token.text);
    const title = escapeHtml(language || 'text');
    const frameClass = [
      'code-block-wrapper',
      'expressive-code',
      'frame',
      /^(bash|sh|zsh|shell|console)$/.test(language) ? 'is-terminal' : '',
    ]
      .filter(Boolean)
      .join(' ');
    return `
      <figure class="${frameClass}">
        <figcaption class="code-block-header header">
          <span class="code-block-lang title">${title}</span>
          <span class="sr-only">${/^(bash|sh|zsh|shell|console)$/.test(language) ? 'Terminal window' : 'Code example'}</span>
          <div class="copy">
            <div aria-live="polite" class="copy-status"></div>
            <button class="copy-button" title="Copy to clipboard" data-label="Copy to clipboard" data-copied="Copied!" onclick="copyCode('${codeId}', this)"><div></div></button>
          </div>
        </figcaption>
        <pre data-language="${title}"><code id="code-${codeId}"${lang}>${escapedCode}</code></pre>
      </figure>`;
  },
  heading(token) {
    const id = slugify(token.text);
    return `<h${token.depth} id="${id}">${token.text}<a href="#${id}" class="heading-anchor" aria-label="Link to this section">#</a></h${token.depth}>`;
  },
};

const tooltipExtension = {
  name: 'tooltip',
  level: 'inline',
  start(src) {
    return src.indexOf('{{');
  },
  tokenizer(src) {
    const match = /^\{\{([^|{}]+)\|([\s\S]+?)\}\}/.exec(src);
    if (!match) return false;

    const label = match[1].trim();
    const tooltip = unescapeTooltipText(match[2].trim());
    if (!label || !tooltip) return false;

    return {
      type: 'tooltip',
      raw: match[0],
      label,
      tooltip,
    };
  },
  renderer(token) {
    return `<span class="md-tooltip" tabindex="0" data-tooltip="${escapeHtml(token.tooltip)}">${escapeHtml(token.label)}</span>`;
  },
};

marked.use({ extensions: [tooltipExtension], renderer, gfm: true, breaks: true });

const getH1Title = (md) => {
  const match = md.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : null;
};

const renderMarkdown = (content) => {
  return marked(content);
};

module.exports = {
  slugify,
  escapeHtml,
  getH1Title,
  renderMarkdown,
};
