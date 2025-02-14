const { heroui } = require("@heroui/theme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/components/(button|input|ripple|spinner|form).js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        background: "var(--color-background)",
        typography: "var(--color-typography)",
        "typography-secondary": "var(--color-typography-secondary)",
        danger: "var(--color-danger)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "12px",
          lg: "0",
        },
        screens: {
          lg: "900px",
        },
      },
    },
  },
  plugins: [heroui()],
};
