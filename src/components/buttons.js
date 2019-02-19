const _ = require('lodash');

module.exports = function({ buttons }) {
  return function({ addComponents, e }) {
    const components = [
      {
        '.button': {
          '@apply inline-block bg-primary no-underline text-white py-2 px-3 rounded-full': {},
          '&:hover': {
            '@apply bg-primary-dark': {},
          },
        },
      },
      _.map(
        buttons,
        ([bgColor, bgColorHover, textColor, textColorHover], name) => ({
          [`.button-${e(name)}`]: {
            'background-color': `${bgColor}`,
            [`@apply inline-block no-underline py-2 px-3 rounded-full`]: {},
            color: textColor,
            '&:hover': {
              'background-color': `${bgColorHover}`,
              color: textColorHover,
            },
          },
        })
      ),
    ];

    addComponents(components);
  };
};
