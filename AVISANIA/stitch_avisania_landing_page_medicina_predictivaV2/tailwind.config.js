/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gold": "#D4AF37",
        "navy": {
          DEFAULT: "#001F3F",
          dark: "#00152b",
          light: "#002d5a"
        }
      },
      fontFamily: {
        "display": ["Public Sans", "sans-serif"]
      },
      borderRadius: {
        "button": "9999px",
        "card": "1.5rem",
      },
    },
  },
  plugins: [],
}
