module.exports = {
  purge: {
    enabled: false,
    contents: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
};
