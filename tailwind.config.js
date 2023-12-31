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
      gridTemplateRows: {
        "[auto,auto,1fr]": "auto auto 1fr",
      },
      backgroundImage: {
        hero: "url('/public/assets/hero.jpg')",
        profile: "url('/public/assets/bg-profile.jpg')",
      },

      colors: {
        primary: "#24305E",
        secondary: "#737373",
        desc: "#F1F6F9",
        bg: "#14274E",
        accent: "#F76C6C",
        dark: "#F1F6F9",
      },
    },
  },
  plugins: [],
}
