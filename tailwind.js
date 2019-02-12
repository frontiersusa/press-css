const tailwindContainer = require('tailwindcss/plugins/container');
const tailwindObjectFit = require('tailwindcss-object-fit');
const pressTypography = require('./src/utilities/typography');
const pressForms = require('./src/utilities/forms');
const pressLinks = require('./src/components/links');
const pressButtons = require('./src/components/buttons');
const pressImportant = require('./src/variants/important');

/**
 * Colors
 */
const brandColors = {
  // Brand v1
  'primary-dark': '#829e95',
  primary: '#91B1A7', // Pewter
  'primary-light': '#b2c8c1',
  'secondary-dark': '#032636',
  secondary: '#083549', // Whale
  'secondary-light': '#52717f',
  'accent-dark': '#e3bc2b',
  accent: '#FDD230', // Sunglow
  'accent-light': '#fddf6e',
  'baltic-dark': '#313132',
  baltic: '#3E3E3F',
  'baltic-light': '#616161',
  'seashell-dark': '#cecece',
  seashell: '#E6E6E6',
  'seashell-light': '#f0f0f0',
};

const brandColorsV2 = {
  isle: '#00BB92',
  midnight: '#144660',
  golden: '#FBD05C',
};

const basicColors = {
  transparent: 'transparent',
  black: '#22292f',
  'grey-darkest': '#3d4852',
  'grey-darker': '#606f7b',
  'grey-dark': '#8795a1',
  grey: '#b8c2cc',
  'grey-light': '#dae1e7',
  'grey-lighter': '#f1f5f8',
  'grey-lightest': '#f8fafc',
  white: '#ffffff',
};

const stateColors = {
  warn: '#fffaf6',
  danger: '#dc3545',
  'danger-dark': '#c82333',
  success: '#f8fcf9',
  info: '#f6faff',
};

const colors = {
  ...brandColors,
  ...basicColors,

  ...stateColors,
};

/**
 * Spacing
 */
const margin = {
  auto: 'auto',
  px: '1px',
  '0': '0',
  '1': '0.25rem',
  '2': '0.5rem',
  '3': '0.75rem',
  '4': '1rem',
  '5': '1.25rem',
  '6': '1.5rem',
  '8': '2rem',
  '10': '2.5rem',
  '12': '3rem',
  '16': '4rem',
  '20': '5rem',
  '24': '6rem',
  '32': '8rem',
};

/**
 * Screens
 */
const screens = {
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
};

/**
 * Fonts
 */
const fonts = {
  sans: [
    'Lato',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
  ],
  serif: [
    'PT Serif',
    'Constantia',
    'Lucida Bright',
    'Lucidabright',
    'Lucida Serif',
    'Lucida',
    'DejaVu Serif',
    'Bitstream Vera Serif',
    'Liberation Serif',
    'Georgia',
    'serif',
  ],
  mono: [
    'Menlo',
    'Monaco',
    'Consolas',
    'Liberation Mono',
    'Courier New',
    'monospace',
  ],
};

/**
 * Text Sizes
 */
const textSizes = {
  xs: '.75rem',
  sm: '.875rem', // 14px
  base: '1rem', // 16px
  lg: '1.125rem', // 18px
  xl: '1.25rem', // 20px
  '2xl': '1.5rem', // 24px
  '3xl': '1.75rem', // 28px
  '4xl': '2rem', // 28px
  '5xl': '2.25rem', // 36px
  '6xl': '3rem', // 48px
  '7xl': '4rem', // 64px
};

/**
 * Font Weight
 */
const fontWeights = {
  light: 300,
  normal: 400,
  bold: 700,
  black: 900,
};

/**
 * Leading
 */
const leading = {
  none: 1,
  tight: 1.25,
  normal: 1.5,
  loose: 2,
};

/**
 * Tracking
 */
const tracking = {
  tight: '-0.05em',
  normal: '0',
  wide: '0.05em',
};

/**
 * Borde Widths
 */
const borderWidths = {
  default: '1px',
  '0': '0',
  '2': '2px',
  '4': '4px',
  '8': '8px',
};

/**
 * Border Radius
 */
const borderRadius = {
  none: '0',
  sm: '.125rem',
  default: '.25rem',
  lg: '.5rem',
  full: '9999px',
};

/**
 * Width
 */
const width = {
  auto: 'auto',
  px: '1px',
  '1': '0.25rem',
  '2': '0.5rem',
  '3': '0.75rem',
  '4': '1rem',
  '5': '1.25rem',
  '6': '1.5rem',
  '8': '2rem',
  '10': '2.5rem',
  '12': '3rem',
  '16': '4rem',
  '24': '6rem',
  '32': '8rem',
  '48': '12rem',
  '64': '16rem',
  '1/2': '50%',
  '1/3': '33.33333%',
  '2/3': '66.66667%',
  '1/4': '25%',
  '3/4': '75%',
  '1/5': '20%',
  '2/5': '40%',
  '3/5': '60%',
  '4/5': '80%',
  '1/6': '16.66667%',
  '5/6': '83.33333%',
  full: '100%',
  screen: '100vw',
};

/**
 * Height
 */
const height = {
  auto: 'auto',
  px: '1px',
  '1': '0.25rem',
  '2': '0.5rem',
  '3': '0.75rem',
  '4': '1rem',
  '5': '1.25rem',
  '6': '1.5rem',
  '8': '2rem',
  '10': '2.5rem',
  '12': '3rem',
  '16': '4rem',
  '24': '6rem',
  '32': '8rem',
  '48': '12rem',
  '64': '16rem',
  full: '100%',
  screen: '100vh',
};

/**
 * Max Width
 */
const maxWidth = {
  xs: '20rem',
  sm: '30rem',
  md: '40rem',
  lg: '50rem',
  xl: '60rem',
  '2xl': '70rem',
  '3xl': '80rem',
  '4xl': '90rem',
  '5xl': '100rem',
  full: '100%',
};

/**
 * Padding
 */
const padding = {
  px: '1px',
  '0': '0',
  '1': '0.25rem',
  '2': '0.5rem',
  '3': '0.75rem',
  '4': '1rem',
  '5': '1.25rem',
  '6': '1.5rem',
  '8': '2rem',
  '10': '2.5rem',
  '12': '3rem',
  '16': '4rem',
  '20': '5rem',
  '24': '6rem',
  '32': '8rem',
};

/**
 * Negative Margin
 */
const negativeMargin = {
  px: '1px',
  '0': '0',
  '1': '0.25rem',
  '2': '0.5rem',
  '3': '0.75rem',
  '4': '1rem',
  '5': '1.25rem',
  '6': '1.5rem',
  '8': '2rem',
  '10': '2.5rem',
  '12': '3rem',
  '16': '4rem',
  '20': '5rem',
  '24': '6rem',
  '32': '8rem',
};

/**
 * Shadows
 */
const shadows = {
  default: '0 2px 4px 0 rgba(0,0,0,0.10)',
  md: '0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)',
  lg: '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)',
  inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
  outline: '0 0 0 3px rgba(82,93,220,0.3)',
  none: 'none',
};

/**
 * Z-Index
 */
const zIndex = {
  auto: 'auto',
  '0': 0,
  '10': 10,
  '20': 20,
  '30': 30,
  '40': 40,
  '50': 50,
};

/**
 * Opacity
 */
const opacity = {
  '0': '0',
  '25': '.25',
  '50': '.5',
  '75': '.75',
  '100': '1',
};

/**
 * Links
 */
const links = {
  primary: [colors.primary, colors.secondary],
  secondary: [colors.secondary, colors.primary],
  white: [colors.white, colors.primary],
};

/**
 * Buttons
 */
const buttons = {
  primary: [colors.primary, colors['primary-dark']],
  secondary: [colors.secondary, colors['secondary-light']],
  danger: [colors.danger, colors['danger-dark']],
};

/**
 * Plugins
 */
const plugins = [
  //
  // Press Utilities
  pressTypography(),
  pressForms(),
  //
  // Press Components
  pressLinks({
    links,
  }),
  pressButtons({
    buttons,
  }),
  //
  // Press Dependencies
  tailwindContainer({
    center: true,
    padding: '1rem',
  }),
  tailwindObjectFit(['responsive']),
  pressImportant(),
];

// Export
module.exports = {
  colors,
  screens,
  fonts,
  textSizes,
  fontWeights,
  leading,
  tracking,
  textColors: colors,
  backgroundColors: colors,
  backgroundSize: {
    auto: 'auto',
    cover: 'cover',
    contain: 'contain',
  },
  borderWidths,
  borderColors: global.Object.assign({ default: colors['grey-light'] }, colors),
  borderRadius,
  width,
  height,
  minWidth: {
    '0': '0',
    full: '100%',
  },
  minHeight: {
    '0': '0',
    full: '100%',
    screen: '100vh',
  },
  maxWidth,
  maxHeight: {
    full: '100%',
    screen: '100vh',
  },
  padding,
  margin,
  negativeMargin,
  shadows,
  zIndex,
  opacity,
  svgFill: {
    current: 'currentColor',
  },
  svgStroke: {
    current: 'currentColor',
  },
  modules: {
    appearance: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundColors: ['responsive', 'hover', 'focus'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderCollapse: [],
    borderColors: ['responsive', 'hover', 'focus'],
    borderRadius: ['responsive', 'important'],
    borderStyle: ['responsive'],
    borderWidths: ['responsive'],
    cursor: ['responsive'],
    display: ['responsive'],
    flexbox: ['responsive'],
    float: ['responsive'],
    fonts: ['responsive'],
    fontWeights: ['responsive', 'hover', 'focus'],
    height: ['responsive'],
    leading: ['responsive'],
    lists: ['responsive'],
    margin: ['responsive'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    negativeMargin: ['responsive'],
    opacity: ['responsive'],
    outline: ['focus'],
    overflow: ['responsive'],
    padding: ['responsive'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    resize: ['responsive'],
    shadows: ['responsive', 'hover', 'focus'],
    svgFill: [],
    svgStroke: [],
    tableLayout: ['responsive'],
    textAlign: ['responsive'],
    textColors: ['responsive', 'hover', 'focus'],
    textSizes: ['responsive'],
    textStyle: ['responsive', 'hover', 'focus'],
    tracking: ['responsive'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    width: ['responsive'],
    zIndex: ['responsive'],
    objectFit: ['responsive'],
  },
  plugins,
  options: {
    prefix: '',
    important: false,
    separator: ':',
  },
};
