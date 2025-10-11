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
          // Background colors - inspired by official site
          dark: '#1e2a1e',        // Rich dark green (was #1a1a1a)
          darker: '#0f1410',      // Deeper forest green (was #0f0f0f)
          
          // Primary greens - vibrant forest colors
          green: '#2d5a27',       // Deep forest green (was #2d5016)
          'green-light': '#4a8c3a', // Bright hunter green (was #4a7c2c)
          'green-accent': '#5ba347', // Vibrant accent green
          
          // Earth tones - warm browns and golds
          brown: '#8b5a2b',       // Rich brown (was #5c4033)
          'brown-light': '#a67c47', // Lighter brown (was #8b6f47)
          'brown-dark': '#6b4423', // Darker brown
          
          // Text and accent colors
          tan: '#e6d7c3',         // Warm cream (was #d4b896)
          'tan-dark': '#d4c4a8',  // Darker tan
          amber: '#d4a574',       // Golden amber
          'amber-light': '#e6b885', // Light amber
          
          // Additional colors from official site
          orange: '#d48434',      // Warm orange accent
          'orange-light': '#e6994d', // Light orange
          gold: '#b8860b',        // Gold highlights
        },
      },
    },
  },
  plugins: [],
}

