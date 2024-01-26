/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Primary: "#00df9a",
        Backgrounds: "#000300",
      },
    },
  },
  plugins: [],
};
