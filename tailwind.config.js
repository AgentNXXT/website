/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#22d3ee', // cyan accent
          light: '#38bdf8',
          dark: '#0ea5e9',
        },
        secondary: {
          DEFAULT: '#a855f7', // violet accent
          light: '#c084fc',
          dark: '#9333ea',
        },
        background: '#0f172a', // dark slate
        surface: '#1e293b', // card/container background
        text: '#ffffff',
        muted: '#cbd5e1',
      },
    },
  },
  plugins: [],
}