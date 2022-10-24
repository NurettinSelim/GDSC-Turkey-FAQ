/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "darkGreen": "#395144",
        "green": "#4E6C50",
        "darkBeige": "#1B160E",
        "beige": {
          100: "#ECE5C1",
          200: "#E7DEB1",
        },

      },
    },
  },
  plugins: [
    require('@headlessui/tailwindcss')
  ],
}
