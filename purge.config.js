// const purgecssWordpress = require('purgecss-with-wordpress');

module.exports = {
  content: [
    './*.php',
    './templates/**/*.php',
    './components/**/*.php',
    './layouts/**/*.php',
    './partials/**/*.php',
    './lib/**/*.php',
    './**/*.html'
  ],
  css: ['**/*.css'],
  safelist: [
    // ...purgecssWordpress.safelist,
    // fix for broken package
    "rtl",
    "home",
    "blog",
    "archive",
    "date",
    "error404",
    "logged-in",
    "admin-bar",
    "no-customize-support",
    "custom-background",
    "wp-custom-logo",
    "alignnone",
    "alignright",
    "alignleft",
    "wp-caption",
    "wp-caption-text",
    "screen-reader-text",
    "comment-list",
    "wp-social-link",
    // end fix
  ],
  safelistPatterns: [
    // ...purgecssWordpress.safelistPatterns,
    // fix for broken package
    /^search(-.*)?$/,
    /^(.*)-template(-.*)?$/,
    /^(.*)?-?single(-.*)?$/,
    /^postid-(.*)?$/,
    /^attachmentid-(.*)?$/,
    /^attachment(-.*)?$/,
    /^page(-.*)?$/,
    /^(post-type-)?archive(-.*)?$/,
    /^author(-.*)?$/,
    /^category(-.*)?$/,
    /^tag(-.*)?$/,
    /^tax-(.*)?$/,
    /^term-(.*)?$/,
    /^(.*)?-?paged(-.*)?$/,
    /^wp-block-(.*)?$/,
    /^has-(.*)?$/,
    /^is-(.*)?$/,
    /^wp-embed-(.*)?$/,
    /^blocks-gallery-(.*)?$/,
    // end fix
    /^wp-content(.*)?$/,
    /^flickity.*$/,
    /^gform_fields.*$/
  ],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
}