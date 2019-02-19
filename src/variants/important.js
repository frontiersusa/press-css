module.exports = function() {
  return function({ addVariant }) {
    addVariant('important', ({ container }) => {
      container.walkRules(rule => {
        rule.selector = `.important\\:${rule.selector.slice(1)}`;
        rule.walkDecls(decl => {
          decl.important = true;
        });
      });
    });
  };
};
