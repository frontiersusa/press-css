module.exports = function({ addUtilities }) {
  const newUtilities = {
    ".color-current": {
      color: "currentColor"
    }
  };
  addUtilities(newUtilities);
};
