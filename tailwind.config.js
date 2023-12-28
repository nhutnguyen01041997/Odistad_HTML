/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "top-pattern": "url('../public/images/detail.png')",
        "mid-pattern": "url('../public/images/bg-image2.png')",
        "left-pattern": "url('../public/images/bg-image3.png')",
        "right-pattern": "url('../public/images/bg-image4.png')",
        "bottom-pattern": "url('../public/images/bg-image5.png')",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
