/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0B2447',
          800: '#0f2a4a',
          700: '#19376D',
          600: '#1e3a5f',
        },
        brand: {
          primary: '#0B2447',
          teal: '#0e7490',
          accent: '#2563eb',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
