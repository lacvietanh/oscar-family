/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        highlight: '#c77ed4',
      },
    },
  },
  darkMode: 'forced', // Force dark mode for all pages
  plugins: [],
}
