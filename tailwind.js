let colors = {
  // Brand v1
  "pewter-dark": "#829e95",
  pewter: "#91B1A7",
  "pewter-light": "#b2c8c1",
  "whale-dark": "#032636",
  whale: "#083549",
  "whale-light": "#52717f",
  "sunglow-dark": "#e3bc2b",
  sunglow: "#FDD230",
  "sunglow-light": "#fddf6e",
  "baltic-dark": "#313132",
  baltic: "#3E3E3F",
  "baltic-light": "#616161",
  "seashell-dark": "#cecece",
  seasehll: "#E6E6E6",
  "seashell-light": "#f0f0f0",

  "primary-dark": "#829e95",
  primary: "#91B1A7", // Pewter
  "primary-light": "#b2c8c1",
  "secondary-dark": "#032636",
  secondary: "#083549", // Whale
  "secondary-light": "#52717f",
  "accent-dark": "#e3bc2b",
  accent: "#FDD230", // Sunglow
  "accent-light": "#fddf6e",

  // Brand v2
  isle: "#00BB92",
  midnight: "#144660",
  golden: "#FBD05C",

  // Basic
  transparent: "transparent",
  black: "#22292f",
  "grey-darkest": "#3d4852",
  "grey-darker": "#606f7b",
  "grey-dark": "#8795a1",
  grey: "#b8c2cc",
  "grey-light": "#dae1e7",
  "grey-lighter": "#f1f5f8",
  "grey-lightest": "#f8fafc",
  white: "#ffffff",
  red: "#de0a0a",
  orange: "#e56000",
  yellow: "#ffed4a",
  green: "#059e1c",
  teal: "#4dc0b5",
  blue: "#2a86f2",
  indigo: "#6574cd",
  purple: "#9561e2",
  pink: "#f66d9b",
  warn: "#fffaf6",
  danger: "#fdf6f6",
  success: "#f8fcf9",
  info: "#f6faff"
};

module.exports = {
  colors: colors,
  screens: {
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px"
  },
  fonts: {
    sans: [
      "Lato",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Helvetica",
      "Arial",
      "sans-serif",
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol"
    ],
    serif: [
      "PT Serif",
      "Constantia",
      "Lucida Bright",
      "Lucidabright",
      "Lucida Serif",
      "Lucida",
      "DejaVu Serif",
      "Bitstream Vera Serif",
      "Liberation Serif",
      "Georgia",
      "serif"
    ],
    mono: [
      "Menlo",
      "Monaco",
      "Consolas",
      "Liberation Mono",
      "Courier New",
      "monospace"
    ]
  },
  textSizes: {
    xs: ".75rem",
    sm: ".875rem", // 14px
    base: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    "2xl": "1.5rem", // 24px
    "3xl": "1.75rem", // 28px
    "4xl": "2rem", // 28px
    "5xl": "2.25rem", // 36px
    "6xl": "3rem", // 48px
    "7xl": "4rem" // 64px
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
  },
  leading: {
    none: 1,
    tight: 1.25,
    normal: 1.5,
    loose: 2
  },
  tracking: {
    tight: "-0.05em",
    normal: "0",
    wide: "0.05em"
  },
  textColors: colors,
  backgroundColors: colors,
  backgroundSize: {
    auto: "auto",
    cover: "cover",
    contain: "contain"
  },
  borderWidths: {
    default: "1px",
    "0": "0",
    "2": "2px",
    "4": "4px",
    "8": "8px"
  },
  borderColors: global.Object.assign({ default: colors["grey-light"] }, colors),
  borderRadius: {
    none: "0",
    sm: ".125rem",
    default: ".25rem",
    lg: ".5rem",
    full: "9999px"
  },
  width: {
    auto: "auto",
    px: "1px",
    "1": "0.25rem",
    "2": "0.5rem",
    "3": "0.75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "8": "2rem",
    "10": "2.5rem",
    "12": "3rem",
    "16": "4rem",
    "24": "6rem",
    "32": "8rem",
    "48": "12rem",
    "64": "16rem",
    "1/2": "50%",
    "1/3": "33.33333%",
    "2/3": "66.66667%",
    "1/4": "25%",
    "3/4": "75%",
    "1/5": "20%",
    "2/5": "40%",
    "3/5": "60%",
    "4/5": "80%",
    "1/6": "16.66667%",
    "5/6": "83.33333%",
    full: "100%",
    screen: "100vw"
  },
  height: {
    auto: "auto",
    px: "1px",
    "1": "0.25rem",
    "2": "0.5rem",
    "3": "0.75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "8": "2rem",
    "10": "2.5rem",
    "12": "3rem",
    "16": "4rem",
    "24": "6rem",
    "32": "8rem",
    "48": "12rem",
    "64": "16rem",
    full: "100%",
    screen: "100vh"
  },
  minWidth: {
    "0": "0",
    full: "100%"
  },
  minHeight: {
    "0": "0",
    full: "100%",
    screen: "100vh"
  },
  maxWidth: {
    xs: "20rem",
    sm: "30rem",
    md: "40rem",
    lg: "50rem",
    xl: "60rem",
    "2xl": "70rem",
    "3xl": "80rem",
    "4xl": "90rem",
    "5xl": "100rem",
    full: "100%"
  },
  maxHeight: {
    full: "100%",
    screen: "100vh"
  },
  padding: {
    px: "1px",
    "0": "0",
    "1": "0.25rem",
    "2": "0.5rem",
    "3": "0.75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "8": "2rem",
    "10": "2.5rem",
    "12": "3rem",
    "16": "4rem",
    "20": "5rem",
    "24": "6rem",
    "32": "8rem"
  },
  margin: {
    auto: "auto",
    px: "1px",
    "0": "0",
    "1": "0.25rem",
    "2": "0.5rem",
    "3": "0.75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "8": "2rem",
    "10": "2.5rem",
    "12": "3rem",
    "16": "4rem",
    "20": "5rem",
    "24": "6rem",
    "32": "8rem"
  },
  negativeMargin: {
    px: "1px",
    "0": "0",
    "1": "0.25rem",
    "2": "0.5rem",
    "3": "0.75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "8": "2rem",
    "10": "2.5rem",
    "12": "3rem",
    "16": "4rem",
    "20": "5rem",
    "24": "6rem",
    "32": "8rem"
  },
  shadows: {
    default: "0 2px 4px 0 rgba(0,0,0,0.10)",
    md: "0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)",
    lg: "0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)",
    inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
    outline: "0 0 0 3px rgba(82,93,220,0.3)",
    none: "none"
  },
  zIndex: {
    auto: "auto",
    "0": 0,
    "10": 10,
    "20": 20,
    "30": 30,
    "40": 40,
    "50": 50
  },
  opacity: {
    "0": "0",
    "25": ".25",
    "50": ".5",
    "75": ".75",
    "100": "1"
  },
  svgFill: {
    current: "currentColor"
  },
  svgStroke: {
    current: "currentColor"
  },
  modules: {
    appearance: ["responsive"],
    backgroundAttachment: ["responsive"],
    backgroundColors: ["responsive", "hover", "focus"],
    backgroundPosition: ["responsive"],
    backgroundRepeat: ["responsive"],
    backgroundSize: ["responsive"],
    borderCollapse: [],
    borderColors: ["responsive", "hover", "focus"],
    borderRadius: ["responsive"],
    borderStyle: ["responsive"],
    borderWidths: ["responsive"],
    cursor: ["responsive"],
    display: ["responsive"],
    flexbox: ["responsive"],
    float: ["responsive"],
    fonts: ["responsive"],
    fontWeights: ["responsive", "hover", "focus"],
    height: ["responsive"],
    leading: ["responsive"],
    lists: ["responsive"],
    margin: ["responsive"],
    maxHeight: ["responsive"],
    maxWidth: ["responsive"],
    minHeight: ["responsive"],
    minWidth: ["responsive"],
    negativeMargin: ["responsive"],
    opacity: ["responsive"],
    outline: ["focus"],
    overflow: ["responsive"],
    padding: ["responsive"],
    pointerEvents: ["responsive"],
    position: ["responsive"],
    resize: ["responsive"],
    shadows: ["responsive", "hover", "focus"],
    svgFill: [],
    svgStroke: [],
    tableLayout: ["responsive"],
    textAlign: ["responsive"],
    textColors: ["responsive", "hover", "focus"],
    textSizes: ["responsive"],
    textStyle: ["responsive", "hover", "focus"],
    tracking: ["responsive"],
    userSelect: ["responsive"],
    verticalAlign: ["responsive"],
    visibility: ["responsive"],
    whitespace: ["responsive"],
    width: ["responsive"],
    zIndex: ["responsive"],
    objectFit: ["responsive"]
  },
  plugins: [
    require("tailwindcss/plugins/container")({
      center: true,
      padding: "1rem"
    }),
    require("tailwindcss-object-fit")(["responsive"]),
    function({ addComponents }) {
      const buttons = {
        ".btn": {
          padding: ".5rem 1rem",
          borderRadius: ".25rem",
          fontWeight: "600"
        },
        ".btn-blue": {
          backgroundColor: "#3490dc",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#2779bd"
          }
        },
        ".btn-red": {
          backgroundColor: "#e3342f",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#cc1f1a"
          }
        }
      };

      addComponents(buttons);
    }
  ],
  options: {
    prefix: "",
    important: false,
    separator: ":"
  }
};
