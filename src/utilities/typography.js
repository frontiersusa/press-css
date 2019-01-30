module.exports = function() {
  return function({ addUtilities, config }) {
    const newUtilities = {
      ".color-current": {
        color: "currentColor"
      },
      ".p": {
        "margin-bottom": config("margin.4"),
        "line-height": config("leading.normal")
      },
      ".h1": {
        "font-size": config("textSizes.5xl")
      },
      ".h2": {
        "font-size": config("textSizes.3xl")
      },
      ".h3": {
        "font-size": config("textSizes.2xl")
      },
      ".h4": {
        "font-size": config("textSizes.xl")
      },
      ".h5": {
        "font-size": config("textSizes.lg")
      },
      ".h6": {
        "font-size": config("textSizes.base")
      }
    };
    addUtilities(newUtilities);
  };
};
