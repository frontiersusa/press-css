const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addVariant, e }) {
  addVariant('important', ({ container }) => {
    container.walkRules(rule => {
      rule.selector = `.important\\:${rule.selector.slice(1)}`;
      rule.walkDecls(decl => {
        decl.important = true;
      });
    });
  });
})