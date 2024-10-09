/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'horizontal-bounce': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(25%)' },
        },
      },
      animation: {
        'horizontal-bounce': 'horizontal-bounce 1s infinite',
      },
    },
  },
  theme: {
    extend: {
      keyframes: {
        zoom: {
          '0%, 100%': {
            transform: 'scale(1)',
            transformOrigin: 'right top',
          },
          '50%': {
            transform: 'scale(1.7)',
            transformOrigin: 'right bottom',
          },
        },
      },
      animation: {
        zoom: 'zoom 80s infinite',
      },
    },
  },
  
  plugins: [],
} 