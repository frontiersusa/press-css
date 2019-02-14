const _ = require('lodash');

module.exports = function({ buttons }) {
  return function({ addComponents, e }) {
    const components = [
      {
        '.button': {
          '@apply bg-primary no-underline text-white py-2 px-3 rounded-full': {},
          '&:hover': {
            '@apply bg-primary-dark': {},
          },
        },
      },
      _.map(buttons, ([normalState, hoverState, textColor], name) => ({
        [`.button-${e(name)}`]: {
          'background-color': `${normalState}`,
          [`@apply no-underline text-${textColor} py-2 px-3 rounded-full`]: {},
          '&:hover': {
            'background-color': `${hoverState}`,
          },
        },
      })),
    ];

    addComponents(components);
  };
};
