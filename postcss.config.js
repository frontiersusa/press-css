require('dotenv').config();
const purgeConfig = require('./purge.config');
const { env } = process;

module.exports = function ({ tailwindConfig = './src/tailwind.config.js'}) {
  return {
    plugins: [
      require('postcss-import'),
      require('tailwindcss')(tailwindConfig),
      // Do NOT run in Press CSS Repo
      ...env.NODE_ENV === 'production' && !env.IS_PRESS_REPO
        ? [require('@fullhuman/postcss-purgecss')(purgeConfig)]
        : [],
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
      ...env.NODE_ENV === 'production'
        ? [require('cssnano')]
        : []
    ],
    map: { inline: false },
  }
};
