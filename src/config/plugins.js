const tailwindContainer = require('tailwindcss/plugins/container');
const tailwindObjectFit = require('tailwindcss-object-fit');
const pressTypography = require('../utilities/typography');
const pressForms = require('../utilities/forms');
const pressLinks = require('../components/links');
const pressButtons = require('../components/buttons');
const pressImportant = require('../variants/important');
const theme = require('./theme');

module.exports = [
  // Press Utilities
  pressTypography(),
  pressForms(),
  // Press Components
  pressLinks({
    links: {
      primary: [theme.colors.primary, theme.colors.secondary],
      secondary: [theme.colors.secondary, theme.colors['secondary-light']],
      white: [theme.colors.white, theme.colors.primary],
      danger: [theme.colors.danger, theme.colors['danger-light']],
    },
  }),
  pressButtons({
    buttons: {
      primary: [theme.colors.primary, theme.colors['primary-dark'], 'white'],
      secondary: [
        theme.colors.secondary,
        theme.colors['secondary-light'],
        'white',
      ],
      danger: [theme.colors.danger, theme.colors['danger-dark'], 'white'],
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
