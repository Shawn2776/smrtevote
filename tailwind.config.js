/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#151c2c",
        bgSoft: "#182237",
        bgHover: "#2e374a",
        text: "white",
        textSoft: "#b7bac1",
        pending: "#f5a623",
        approved: "#2ecc71",
        canceled: "#e74c3c",
        gradientLighter: "#182237",
        gradientDarker: "#253352",
        button: "#5d57c9",
        buttonView: "#2ecc71",
        buttonDelete: "red",
      },
      flex: {
        1: "1 1 0%",
        2: "2 2 0%",
        3: "3 3 0%",
        4: "4 4 0%",
      },
    },
  },
  plugins: [],
};
