/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Nicode-rose': '#D42C6D',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
