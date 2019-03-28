module.exports = function() {
  return function({ addUtilities, config, theme }) {
    const newUtilities = {
      '.color-current': {
        color: 'currentColor',
      },
      '.p': {
        'margin-bottom': config('theme.margin.4'),
        'line-height': config('theme.leading.normal'),
      },
      '.h1': {
        'font-size': config('theme.fontSize.5xl'),
      },
      '.h2': {
        'font-size': config('theme.fontSize.3xl'),
      },
      '.h3': {
        'font-size': config('theme.fontSize.2xl'),
      },
      '.h4': {
        'font-size': config('theme.fontSize.xl'),
      },
      '.h5': {
        'font-size': config('theme.fontSize.lg'),
      },
      '.h6': {
        'font-size': config('theme.fontSize.base'),
      },
      '.label': {
        '@apply inline-block mb-1 font-bold text-xs uppercase tracking-wide': {},
      },
    };
    addUtilities(newUtilities);
  };
};
