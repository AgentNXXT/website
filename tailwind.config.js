/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E293B', // dark navy for enterprise background
          light: '#334155',
          dark: '#0F172A',
        },
        secondary: {
          DEFAULT: '#9CA3AF', // silver gray for accents and muted text
          light: '#D1D5DB',
          dark: '#6B7280',
        },
        accent: {
          gold: '#D4AF37', // optional highlights
          teal: '#0D9488',
        },
        background: '#F8FAFC', // light background for contrast
        surface: '#334155', // card/container background
        text: '#FFFFFF', // main text on dark surfaces
        muted: '#9CA3AF', // secondary/muted text
      },
    },
  },
  plugins: [],
}