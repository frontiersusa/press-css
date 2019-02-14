const tailwindContainer = require('tailwindcss/plugins/container');
const tailwindObjectFit = require('tailwindcss-object-fit');
const pressTypography = require('./src/utilities/typography');
const pressForms = require('./src/utilities/forms');
const pressLinks = require('./src/components/links');
const pressButtons = require('./src/components/buttons');
const pressImportant = require('./src/variants/important');
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
      danger: [theme.colors.danger, theme.colors['danger-dark']],
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
