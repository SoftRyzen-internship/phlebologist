/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    // MEDIA QUERIES
    screens: {},
    //BOX SHADOW
    boxShadow: {},
    // THEME
    extend: {
      backgroundImage: {},
      fontFamily: {},
      fontSize: {},
      // BORDER
      borderRadius: {},
      // ALL COLORS
      colors: {},

      // KEYFRAMES
      keyframes: {
        side: {},
      },
      // ANIMATION
      animation: {
        side: 'side 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
