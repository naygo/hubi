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
          lighter: '#3C3C3C',
          light: '#2C2C2C',
          DEFAULT: '#1E1C1F',
          dark: '#1A1A1A',
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
