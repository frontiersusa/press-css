const pressLinks = require('./components/links');
const pressButtons = require('./components/buttons');
const pressImportant = require('./variants/important');
const theme = require('./theme');

module.exports = [
  // Press Components
  pressLinks({
    links: {
      primary: [theme.colors['primary-light'], theme.colors['primary-dark']],
      secondary: [
        theme.colors['secondary-light'],
        theme.colors['secondary-dark'],
      ],
      accent: [theme.colors['accent-light'], theme.colors['accent-dark']],
      red: [theme.colors['red-light'], theme.colors['red-dark']],
      orange: [theme.colors['orange-light'], theme.colors['orange-dark']],
    },
  }),
  pressButtons({
    buttons: {
      primary: [
        theme.colors.primary,
        theme.colors['primary-dark'],
        'white',
        'white',
      ],
      secondary: [
        theme.colors.secondary,
        theme.colors['secondary-light'],
        'white',
        'white',
      ],
      accent: [
        theme.colors.accent,
        theme.colors['accent-dark'],
        theme.colors.baltic,
        theme.colors.baltic,
      ],
      red: [theme.colors.red, theme.colors['red-dark'], 'white', 'white'],
      orange: [
        theme.colors.orange,
        theme.colors['orange-dark'],
        'white',
        'white',
      ],
      green: [
        theme.colors.primary,
        theme.colors['primary-dark'],
        'white',
        'white',
      ],
    },
  }),
  // Press Variants
  pressImportant(),
];
