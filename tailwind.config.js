/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  darkMode: 'forced', // Force dark mode for all pages
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '3rem',
        '2xl': '4rem',
      },
    },
    extend: {
      screens: {
        xs: '480px',      // Small phones landscape
        '3xl': '1920px',  // Full HD monitors
        '4xl': '2560px',  // QHD/2K monitors
      },
      spacing: {
        4.5: '1.125rem',   // 18px custom tight spacing
        7.5: '1.875rem',   // 30px custom medium spacing
        18: '4.5rem',      // 72px custom large spacing
      },
      maxWidth: {
        '7xl': '80rem',    // 1280px => default max
        '8xl': '88rem',    // 1408px => for 1920px screens
        '9xl': '96rem',    // 1536px => for 2560px screens
        '10xl': '112rem',  // 1792px => for very large screens
      },
      colors: {
        highlight: '#c77ed4',
      },
    }
  },
  plugins: [
    // require('@tailwindcss/typography') // Uncomment if using markdown/content
  ]
}
