/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "very-dark-gray": "#2b2b2b",
        "dark-gray": "#969696",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      backgroundImage: {
        "pattern-mobile": "url('./assets/images/pattern-bg-mobile.png')",
        "pattern-desktop": "url('./assets/images/pattern-bg-desktop.png')",
      },
    },
  },
  plugins: [],
};
