let config = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss")("./tailwind.js"),
    require("postcss-preset-env")(),
    require("postcss-nesting"),
    require("postcss-pxtorem")({
      rootValue: 16,
      propList: ["*"],
      replace: true,
      mediaQuery: false
    }),
    require("postcss-fixie"),
    require("postcss-flexbugs-fixes"),
    require("postcss-font-magician"),
    require("postcss-focus"),
    require("postcss-responsive-type")
  ]
};

module.exports = config;
