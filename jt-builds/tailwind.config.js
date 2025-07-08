/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#234236', // Deep green
          cream: '#F8F7F3', // Cream/white
          neutral: '#E5E5E0', // Muted neutral
          gray: '#B0B0A8', // Muted gray
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}; 