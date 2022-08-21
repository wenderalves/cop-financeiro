/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: "#003475",
        primary__hover: "#002055",
        secundary: "#00b3bc",
        info: "#6AB2FF",
        success: "#ADE46C",
        warning: "#FFC666",
        danger: "#FF405D",
      },
      backgroundImage: {
        "hero-pattern": "url('/assets/images/fundo-abstrato-azul.jpg')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
};
