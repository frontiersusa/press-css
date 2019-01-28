module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-preset-env")({
      stage: 1,
      "nesting-rules": true
    }),
    require("tailwindcss")("./tailwind.js"),
    require("postcss-pxtorem")({
      rootValue: 16,
      propList: ["*"],
      replace: true,
      mediaQuery: false
    }),
    require("postcss-fixie"),
    require("postcss-flexbugs-fixes"),
    require("postcss-font-magician"),
    // require("postcss-focus"),
    require("postcss-responsive-type")
  ]
};
