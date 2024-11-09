/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastelBlue: "#B3E5FC",
        pastelGreen: "#C8E6C9",
        pastelPink: "#F8BBD0",
        pastelYellow: "#FFF9C4",
      },
    },
  },
  plugins: [],
}
