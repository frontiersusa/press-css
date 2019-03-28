module.exports = {
  colors: {
    // Primary / 'Pewter'
    primary: '#91B1A7',
    'primary-light': '#b2c8c1',
    'primary-dark': '#829e95',
    // Secondary / 'Whale'
    secondary: '#083549',
    'secondary-light': '#52717f',
    'secondary-dark': '#032636',
    // Accent / 'Sunglow'
    accent: '#FDD230',
    'accent-light': '#fddf6e',
    'accent-dark': '#e3bc2b',
    // 'Baltic'
    baltic: '#3E3E3F',
    'baltic-light': '#616161',
    'baltic-dark': '#313132',
    // Seashell
    seashell: '#E6E6E6',
    'seashell-light': '#f0f0f0',
    'seashell-dark': '#cecece',
    // Red
    red: '#FF534E',
    'red-light': '#FF8783',
    'red-dark': '#B33A37',
    // Orange
    orange: '#FFAE4E',
    'orange-light': '#FFC683',
    'orange-dark': '#DA994F',
    // Gray
    gray: '#A3A3A3',
    'gray-light': '#BFBFBF',
    'gray-dark': '#727272',
    // Utility
    transparent: 'transparent',
    black: '#000000',
    white: '#ffffff',
  },
  spacing: {
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
    '40': '10rem',
    '48': '12rem',
    '56': '14rem',
    '64': '16rem',
  },
  screens: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
  fontFamily: {
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
  },
  fontSize: {
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
  },
  fontWeight: {
    light: 300,
    normal: 400,
    bold: 700,
    black: 900,
  },
  borderColor: theme => ({
    default: theme('colors.gray-light'),
    ...theme('colors'),
  }),
};
