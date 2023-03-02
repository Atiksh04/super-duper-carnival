/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'cardBg': "url('../src/icons/card-bg.svg')",
      }
    }
  },
  plugins: [],
}
