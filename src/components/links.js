const _ = require('lodash');

module.exports = function({ links }) {
  return function({ addComponents, e }) {
    const components = [
      _.map(links, ([normalState, hoverState], name) => ({
        [`.link-${e(name)}`]: {
          'border-color': `${normalState}`,
          '@apply border-b-2 no-underline color-current': {},
          '&:hover': {
            '@apply color-current': {},
            'border-color': `${hoverState}`,
          },
        },
      })),
    ];
    addComponents(components);
  };
};
