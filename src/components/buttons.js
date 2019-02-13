const _ = require('lodash');

module.exports = function({ buttons }) {
  return function({ addComponents, e }) {
    const components = [
      {
        '.button': {
          '@apply bg-primary no-underline text-white font-bold py-2 px-3 rounded-full': {},
          '&:hover': {
            '@apply bg-primary-dark': {},
          },
        },
      },
      _.map(buttons, ([normalState, hoverState], name) => ({
        [`.button-${e(name)}`]: {
          'background-color': `${normalState}`,
          '@apply no-underline text-white font-bold py-2 px-3 rounded-full': {},
          '&:hover': {
            'background-color': `${hoverState}`,
          },
        },
      })),
    ];

    addComponents(components);
  };
};
