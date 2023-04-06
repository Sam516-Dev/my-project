/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'my-bg-color': '#eef6f9', //color #ECECFB
        'my-gray-color': '#e8e9eb',
        'my-btn-color': '#10497a', //color
        'my-btn2-color': '#c3ced4', //color #c8d3d9 #041527
        'my-darker-color': '#041527', //color #c8d3d9 #041527


        'my-text-color': '#203850', //
        'my-border-color': '#737477', //
        // 'my-btn2-color': '#5766c3', // #5766c3
      },
    },
  },
  plugins: [],
}
