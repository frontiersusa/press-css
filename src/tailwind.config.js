

module.exports = {
  purge: false,
  experimental: 'all',
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  theme: {
    extend: {
      colors: {
        // Primary / 'Pewter'
        primary: '#91B1A7',
        'primary-light': '#b2c8c1',
        'primary-dark': '#829e95',
        'primary-fade': 'rgba(130, 158, 149, 0.23)',
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
        // Other (grays)
        whitesmoke: '#f5f5f5',
        alice: '#f7f9fc',
      },
      boxShadow: {
        'outline-primary': '0 0 0 .1875rem rgba(130, 158, 149, 0.23)'
      }
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
    inset: {
      '0': '0',
      '1': '1rem',
      '2': '2rem',
      '3': '3rem',
      auto: 'auto',
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'important', 'active'],
    borderRadius: ['responsive', 'important'],
    textColor: ['responsive', 'hover', 'focus', 'important', 'group-hover'],
    opacity: ['responsive', 'hover'],
    display: ['responsive', 'important'],
    padding: ['responsive', 'important'],
    margin: ['responsive', 'important']
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/ui'),
    require('./plugins/important'),
  ],
};
