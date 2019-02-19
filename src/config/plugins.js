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
      red: [theme.colors['red-light'], theme.colors.red],
      orange: [theme.colors['orange-light'], theme.colors.orange],
      green: [theme.colors['green-light'], theme.colors.green],
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
        theme.colors['accent-light'],
        theme.colors.baltic,
        theme.colors.baltic,
      ],
      red: [
        theme.colors.red,
        theme.colors['red-light'],
        'white',
        theme.colors.baltic,
      ],
      orange: [
        theme.colors.orange,
        theme.colors['orange-light'],
        'white',
        theme.colors.baltic,
      ],
      green: [
        theme.colors.green,
        theme.colors['green-light'],
        'white',
        theme.colors.baltic,
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
