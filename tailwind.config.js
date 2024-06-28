/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ghostwhite: "#f7f6fb",
        snow: "#fffafa",
        mediumturquoise: "#0acbbf",
        white: "#fff",
        "navy-blue": "#343d68",
        steelblue: {
          "100": "#59638f",
          "200": "rgba(89, 99, 143, 0.08)",
        },
        gray: {
          "100": "#fffdfd",
          "200": "#fcfcfc",
          "300": "#838383",
          "400": "rgba(0, 0, 0, 0.7)",
          "500": "rgba(255, 255, 255, 0.87)",
          "600": "rgba(0, 0, 0, 0.25)",
        },
        outline: "rgba(0, 0, 0, 0.12)",
        red: "#e84949",
        darkslategray: {
          "100": "#262c4d",
          "200": "#262c4c",
        },
        gradient: "#0d54be",
        darkslateblue: "rgba(52, 61, 104, 0.08)",
        gainsboro: "#e6e6e6",
        tomato: "#f16529",
        black: "#000",
        slateblue: "#4f47c8",
      },
      spacing: {},
      fontFamily: {
        "section-title": "'Be Vietnam'",
      },
      borderRadius: {
        "6xl": "25px",
        "31xl": "50px",
      },
    },
    fontSize: {
      lg: "18px",
      xl: "20px",
      base: "16px",
      sm: "14px",
      "13xl": "32px",
      lgi: "19px",
      "7xl": "26px",
      mini: "15px",
      "3xs": "10px",
      "29xl": "48px",
      "11xl": "30px",
      "6xl": "25px",
      "5xl": "24px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
