/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          900: '#1a2e1a',
          800: '#2d4a2d',
          700: '#3d5c3d',
        },
        charcoal: '#2d2d2d',
        'warm-grey': '#4a4a4a',
        campfire: {
          DEFAULT: '#F59E0B',
          dark: '#EA580C',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
