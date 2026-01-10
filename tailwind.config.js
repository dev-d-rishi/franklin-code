// tailwind.config.js
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#F4F1E8",
        },
        surface: {
          DEFAULT: "#FEFAE0",
          elevated: "#FFFFFF",
        },
        text: {
          primary: "#1C1C1C",
          secondary: "#5B5B5B",
        },
        accent: {
          DEFAULT: "#D1684C",
          soft: "#E7B2A0",
        },
        border: {
          DEFAULT: "#DED8BF",
        },
      },
    },
  },
  plugins: [],
};
