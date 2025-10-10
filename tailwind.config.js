/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hunter: {
          dark: '#1a1a1a',
          darker: '#0f0f0f',
          green: '#2d5016',
          'green-light': '#4a7c2c',
          brown: '#5c4033',
          'brown-light': '#8b6f47',
          tan: '#d4b896',
        },
      },
    },
  },
  plugins: [],
}

