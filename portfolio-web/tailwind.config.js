/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['Inter, sans-serif'],
        Roboto: ['Roboto, sans-serif'],
        Righteous: ['Righteous, sans-serif'],
      },
      backgroundImage: {
        gradient: "linear-gradient(195deg, rgba(90, 87, 236, 0.40) 0%, rgba(209, 29, 170, 0.40) 100%)",
        grid: "url(./assets/websites-images/Background.png)",
      },
    },
  },
  plugins: [],
}