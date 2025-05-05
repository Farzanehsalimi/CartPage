/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        primary: "#4A6DFF",
        secondary: "#3F4264",
        "secondary-dark": "#2A2D53",
        "secondary-light": "#6A6C87",
        "secondary-lihgter": "#36385380",
        "secondary-lighterter": "#BFC0CB",
        "currency-color": "#36385380",
        warning: "#FF9900",
        red: "#FF0000CC",
        "border-color": "#DFDFE580",
        "receipt-color": "#555775",
        "background-color": "#ccc",
      },
      fontSize: {
        "2xs": "10px",
      },
      fontFamily: {
        vazir: ["Vazirmatn", "sans-serif"],
      },
    },
  },
  plugins: [],
};
