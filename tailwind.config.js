/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1140px',
      xl: '1440px',
    },
    colors: {
      'blue': '#155bd5',
      'white':'#ffffff',
      'dark':'#333333',
      'black':'#1d1d1d',
      'offwhite': '#fafafa',
      'light-1': '#efefef',
      'dark-3': '#6d6d6d',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    letterSpacing: {
      '3': '0.08em',
    },
    extend: {}
  },
  plugins: [],
  darkMode: 'class',
}

