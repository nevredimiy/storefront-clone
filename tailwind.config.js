/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {

  
    screens: {
      ssm: '390px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1536px'
    },
    
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
      theme: {
        
      },
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

