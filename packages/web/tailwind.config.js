/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/shared/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        yellow: '#e09600',
        'yellow-dark': '#b36f00',
        blue: '#02111e',
        silver: '#e5e5e5',
        beige: '#ece8e1',
      },
    },
    plugins: [],
  },
}
