/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Poppins: " 'Poppins' , sans-serif",
    },

    screens: {
      notSupport: { max: "299px" },
      mobile: { min: "300px", max: "767px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      tablet: { min: "768px", max: "1023px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      Sdesktop: "1024px",
      // => @media (min-width: 1024px and max-width: 1279px) { ... }
    },
    extend: {
      colors: {
        primary: "#A85CF9",
        secondary: "#041562",
        desc: "#F1F6F9",
        bg: "#14274E",
        accent: "#1c63b8",
        dark: "#F1F6F9",
      },
    },
  },
  plugins: [],
}
