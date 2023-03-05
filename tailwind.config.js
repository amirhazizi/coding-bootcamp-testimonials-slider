/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      // ## Screen sizes
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        lx: "1440x",
      },
      // ## Colors
      colors: {
        // ### Primary
        clDarkBlue: "hsl(240, 38%, 20%)",
        clGrayishBlue: "hsl(240, 18%, 77%)",
      },
    },
  },
  plugins: [],
}
