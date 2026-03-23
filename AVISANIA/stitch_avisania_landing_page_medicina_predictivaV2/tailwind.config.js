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
        "silver": "#A8B8C8",
        "amber": "#D4893C",
        "navy": {
          DEFAULT: "#071826",
          dark: "#040E18",
          light: "#0C2538"
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
