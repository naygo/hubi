/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/shared/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      gray: {
        darkest: '#1e1f1f',
        dark: '#2e2f2f',
      },
      white: {
        DEFAULT: '#e5e5e5',
      },
      yellow: {
        DEFAULT: '#e09600',
      },
    },
    borderColor: (theme) => ({
      ...theme('colors'),
    }),
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    plugins: [],
  },
}
