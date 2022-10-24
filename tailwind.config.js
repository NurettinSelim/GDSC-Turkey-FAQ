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
      backgroundImage: {
        'up-arrow': "url('/img/up.svg')",
        'down-arrow': "url('/img/down.png')",
      },
      rotate: {
        "90": "90deg",
        "180": "180deg",
        "270": "270deg",
        "360": "360deg",
        "-90": "-90deg",
        "-180": "-180deg",
        "-270": "-270deg",
        "-360": "-360deg",
      },
    },
  },
  plugins: [
    require('@headlessui/tailwindcss')
  ],
}
