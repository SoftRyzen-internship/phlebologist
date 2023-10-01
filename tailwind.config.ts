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
    screens: {
      sm: '480px',
      md: '768px',
      xl: '1280px',

      smOnly: { max: '767.98px' },
      mdOnly: { min: '768px', max: '1279.98px' },
      notXl: { max: '1279.98px' },
      mediaHover: { raw: '(hover: hover)' },
    },
    //BOX SHADOW
    boxShadow: {},
    // THEME
    extend: {
      backgroundImage: {},
      // fontFamily: { inter: ['var(--font-inter)'] },
      fontSize: {},
      // BORDER
      borderRadius: { normal: '8px' },
      // ALL COLORS
      colors: {
        body: '#F3F3F3',
        black: {
          DEFAULT: '#000000', // class="bg-black text-black border-black"
          dark: '#303036', // class="bg-black-light text-black-light border-black-light"
        },
        white: {
          DEFAULT: '#FFFFFF',
          light: '#F8F8F8',
          dark: '#F3F3F3',
        },
        gray: {
          DEFAULT: 'rgba(48, 48, 54, 0.5)',
          light: '#ECEEF2',
          dark: '#EAEAEA',
        },
        primary: {
          light: { 100: 'rgba(48, 48, 54, 0.5)' },
          dark: { 100: '#6D91A4', 200: '#263850' },
        },
        notify: {
          error: '#FF5660',
        },
      },
      // LINE-HEIGHTS
      lineHeight: { normal: '1.21' },
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
