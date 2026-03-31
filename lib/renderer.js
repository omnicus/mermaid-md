const { slugify, escapeHtml, getH1Title, renderMarkdown } = require('./renderer/markdown');
const { html } = require('./renderer/page');

module.exports = {
  slugify,
  escapeHtml,
  getH1Title,
  renderMarkdown,
  html,
};
