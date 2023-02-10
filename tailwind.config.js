module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  
  plugins: [require("daisyui")],
  daisyui: {
    theme:false,
    darkTheme: "white",
  },
}