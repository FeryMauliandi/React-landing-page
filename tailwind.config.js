/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '24px',
        lg: '100px',
      },
    },
    extend: {
      colors: {
        primary: '#7FC41C',
        secondary: '#95C122',
        dark: '#374D0F',
      }
    },
  },
  plugins: [],
}

