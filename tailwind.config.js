/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
   animation:{
    mover: 'mover 4s linear infinite'
   },
   keyframes:{
    mover:{
      '0%,100%':{transform:"rotate(-30deg)"},
      '50%': { transform: 'rotate(3deg)' }, 
    }
   },
    screens: {
      'sm': '450px',
      // => @media (min-width: 640px) { ... }

      'md': '55px',
      // => @media (min-width: 768px) { ... }

      'lg': '660px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}

