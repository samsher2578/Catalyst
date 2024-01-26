/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Backgrounds: "#000300",
        Primary: "#00df9a",
      },
    },
  },
  plugins: [],
};
