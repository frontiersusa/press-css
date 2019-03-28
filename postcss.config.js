const postcssImport = require('postcss-import');
const tailwindcss = require('tailwindcss');
const postcssPresetEnv = require('postcss-preset-env');
const postcssNesting = require('postcss-nesting');
const postcssPxtorem = require('postcss-pxtorem');
const postcssFixie = require('postcss-fixie');
const postcssFontMagician = require('postcss-font-magician');
const postcssFocus = require('postcss-focus');
const postcssFlexboxFixes = require('postcss-flexbugs-fixes');
const postcssResponsiveType = require('postcss-responsive-type');
const cssnano = require('cssnano');
require('dotenv').config();

const env = process.env.NODE_ENV;

const runCssnanno = environment => {
  if (environment === 'production') {
    return cssnano;
  }
};

module.exports = {
  plugins: [
    postcssImport,
    tailwindcss('./src/tailwind.config.js'),
    postcssPresetEnv(),
    postcssNesting,
    postcssPxtorem({
      rootValue: 16,
      propList: ['*'],
      replace: true,
      mediaQuery: false,
    }),
    postcssFixie,
    postcssFontMagician,
    postcssFocus,
    postcssFlexboxFixes,
    postcssResponsiveType,
    runCssnanno(env),
  ],
};
