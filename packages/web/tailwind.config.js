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
          light: '#1E1C1F',
          DEFAULT: '#0B0B0B',
        },
        white: {
          DEFAULT: '#e5e5e5',
        },
        yellow: {
          light: '#f5e6c4',
          DEFAULT: '#e09600',
        },
      },
    },
    plugins: [],
  },
}
