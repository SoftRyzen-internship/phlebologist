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
      borderRadius: {
        normal: '8px',
        extended: '10px',
        medium: '20px',
        large: '24px',
        extraLarge: '36px',
        max: '48px',
      },
      // ALL COLORS
      colors: {
        body: '#F3F3F3',
        black: {
          DEFAULT: '#000000', // class="bg-black text-black border-black"
          dark: '#303036', // class="bg-black-light text-black-light border-black-light"
          extra: '#919194',
          backdrop: '#959595',
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
          extra: '#E3E3E3',
          dim: '#BCBCBC',
          blur: ' #D9D9D9',
        },
        primary: {
          light: { 100: 'rgba(48, 48, 54, 0.5)' },
          dark: {
            100: '#6D91A4',
            200: '#263850',
            300: '#354C69',
            400: '#273951',
          },
        },
        secondary: {
          DEFAULT: '#354C69',
          dark: '#263850',
        },
        notify: {
          success: '#53B82F',
          error: '#FF5660',
          disabled: '#CCCCCC',
        },
      },
      // LINE-HEIGHTS
      lineHeight: { small: '1', normal: '1.21', medium: '1.25', large: '1.5' },
      // CONTAINER
      container: {
        center: true,
        padding: {
          DEFAULT: '20px',
          sm: '20px',
          md: '32px',
          xl: '20px',
        },
      },
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
  plugins: [require('@headlessui/tailwindcss')],
};
