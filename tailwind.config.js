/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          themeColor: '#81003c', // Custom color
        },
        // spacing: {
        //   18: '4.5rem', // Custom spacing value
        // },
        // fontSize: {
        //   xxs: '0.625rem', // Custom font size
        // },
      },
    },
    plugins: [],
  }