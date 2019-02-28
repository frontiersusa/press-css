const _ = require('lodash');

module.exports = function({ buttons }) {
  return function({ addComponents, e }) {
    const components = [
      {
        '.button': {
          '@apply inline-block no-underline py-2 px-3 rounded-full leading-normal bg-primary text-white': {},
          'min-height': '40px',
          '&:hover': {
            '@apply bg-primary-dark text-white': {},
          },
        },
      },
      _.map(
        buttons,
        ([bgColor, bgColorHover, textColor, textColorHover], name) => ({
          [`.button-${e(name)}`]: {
            'background-color': `${bgColor}`,
            'min-height': '40px',
            '@apply inline-block no-underline py-2 px-3 rounded-full leading-normal': {},
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
