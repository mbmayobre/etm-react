/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./public/index.html"],
  theme: {
    extend: {
      backgroundImage: {
        "classroom-books": "url('/src/assets/img/classroom-books.jpg')",
        "hands-holding-cc": "url('/src/assets/img/hands-holding-cc.jpg')",
      },
    },
  },
  plugins: [],
};
