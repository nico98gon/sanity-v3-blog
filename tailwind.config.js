/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Blogeate-rose': '#FF0048',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
