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
        primary: "#8e64e2",
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
        "hover-color": "#6d28d9",
      },
      fontSize: {
        "2xs": "10px",
      },
      fontFamily: {
        vazir: ["vazir", "sans-serif"],
      },
    },
  },
  plugins: [],
};
