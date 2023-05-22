/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/shared/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    borderColor: (theme) => ({
      ...theme('colors'),
    }),
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        black: {
          lighter: '#2C2C2C',
          light: '#1F1F1F',
          DEFAULT: '#1A1A1A',
          dark: '#0D0D0D',
        },
        gray: {
          light: '#C4C4C4',
          DEFAULT: '#AAAAAA',
          dark: '#8F8F8F',
          darker: '#3C3C3C',
        },
        white: {
          DEFAULT: '#e5e5e5',
        },
        yellow: {
          light: '#f5e6c4',
          DEFAULT: '#e09600',
          dark: '#c17e00',
        },
      },
    },
    plugins: [require('@headlessui/tailwindcss')],
  },
}
