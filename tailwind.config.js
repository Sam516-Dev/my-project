/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'my-bg-color': '#eef6f9', //color #ECECFB 
        'my-gray-color' : '#e8e9eb',
        'my-btn-color': '#10497a', //color
        'my-text-color': '#203850', //
        'my-border-color': '#737477', //
        'my-btn2-color': '#5766c3', // #5766c3
      },
    },
  },
  plugins: [],
}
