/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6096AA',
        secondary: '#F1E5D8',
        tertiary: '#7F6F62',
      },
    },
  },
  plugins: [],
}

