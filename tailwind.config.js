/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      screens: {
        desktop: { max: "1200px" },
        laptop: { max: "992px" },
        tablet: { max: "768px" },
        mobile: { max: "640px" },
      },
      container: {
        center: true,
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        "shadow-1": "0px 8px 40px 0px rgba(0, 38, 3, 0.08)",
        product: " 0px 0px 12px 0px rgba(32, 181, 38, 0.32)",
        btnS: " 0px 0px 12px 0px rgba(0, 0, 0, 0.12)",
        testimonial: "0px 8px 40px 0px rgba(0, 0, 0, 0.08)",
      },
      colors: {
        softPrimary: "#84D187",
        primary: "#00B207",
        hardPrimary: "#2C742F",
        warning: "#FF8A00",
        danger: "#EA4B48",
        gray: {
          100: "#F2F2F2",
          200: "#E6E6E6",
          300: "#CCCCCC",
          400: "#B3B3B3",
          500: "#999999",
          600: "#808080",
          700: "#666666",
          800: "#4D4D4D",
          900: "#333333",
          1000: "#1A1A1A",
        },
        green: {
          100: "#EDF2EE",
          200: "#DAE5DA",
          300: "#B4CCB4",
          400: "#96B297",
          500: "#7A997C",
          600: "#618062",
          700: "#406B42",
          800: "#2B572E",
          900: "#173B1A",
          1000: "#002603",
        },
      },
    },
  },
  plugins: [],
};
