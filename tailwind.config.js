const plugin = require("tailwindcss/plugin")

const keepAll = plugin(function ({ addUtilities, variants }) {
  addUtilities(
    {
      ".break-normal": {
        "overflow-wrap": "normal",
        "word-break": "normal",
      },
      ".break-words": {
        "overflow-wrap": "break-word",
      },
      ".break-keep-all": { "word-break": "keep-all" }, // This
      ".break-all": { "word-break": "break-all" },
    },
    variants("wordBreak")
  )
})

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      roboto: [
        "Roboto",
        "Gowun Batang",
        "serif",
        "-apple-system",
        // Chrome < 56 for OS X (San Francisco)
        "BlinkMacSystemFont",
        // Windows
        "Segoe UI",
        // Android
        "Roboto",
        // Basic web fallback
        "Helvetica Neue",
        "Arial",
        "sans-serif",
        // Emoji fonts
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
      ],
      batang: [
        "Gowun Batang",
        "Roboto",
        "serif",
        "-apple-system",
        // Chrome < 56 for OS X (San Francisco)
        "BlinkMacSystemFont",
        // Windows
        "Segoe UI",
        // Android
        "Roboto",
        // Basic web fallback
        "Helvetica Neue",
        "Arial",
        "sans-serif",
        // Emoji fonts
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
      ],
    },
    extend: {},
  },
  plugins: [keepAll],
}
