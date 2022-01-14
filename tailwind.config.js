module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      mont: ["Montserrat", "sans-serif"],
      mohave: ["Mohave", "sans-serif"],
      open: ["Open Sans", "sans-serif"],
    },
    extend: {
      colors: {
        blue: "#023E8A",
        green: "#1AA260",
      },
    },
  },
  plugins: [],
};
