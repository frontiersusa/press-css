const tailwindContainer = require('tailwindcss/plugins/container');
const tailwindObjectFit = require('tailwindcss-object-fit');
const pressTypography = require('./utilities/typography');
const pressLinks = require('./components/links');
const pressButtons = require('./components/buttons');
const pressImportant = require('./variants/important');
const theme = require('./theme');

module.exports = [
  // Press Utilities
  pressTypography(),
  // Press Components
  pressLinks({
    links: {
      primary: [theme.colors.primary, theme.colors.secondary],
      secondary: [theme.colors.secondary, theme.colors['secondary-light']],
      white: [theme.colors.white, theme.colors.primary],
      red: [theme.colors['red-light'], theme.colors['red-dark']],
      orange: [theme.colors['orange-light'], theme.colors['orange-dark']],
      green: [theme.colors['primary-light'], theme.colors['primary-dark']],
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
  // Press Dependencies
  tailwindContainer({
    center: true,
    padding: '1rem',
  }),
  tailwindObjectFit(['responsive']),
];
