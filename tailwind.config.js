/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
    },
    extend: {
      keyframes: {
        'orbit-menu': {
          'to': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'orbit-menu': 'orbit-menu 60s linear infinite',
      },
    },
  },
   plugins: [],
}

