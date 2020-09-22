require('dotenv').config();
const { env } = process;

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss')('./src/tailwind.config.js'),
    require('postcss-preset-env')({
      stage: 1,
      features: {
        'focus-within-pseudo-class': false
      }
    }),
    require('postcss-nesting'),
    require('postcss-pxtorem')({
      rootValue: 16,
      propList: ['*'],
      replace: true,
      mediaQuery: false,
    }),
    require('postcss-flexbugs-fixes'),
    ...env.NODE_ENV === 'production' && env.DEV_MODE
      ? [require('cssnano')]
      : []
  ],
};
