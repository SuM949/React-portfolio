module.exports = {
  content: [ [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
],
  theme: {
    extend: ["plugin:react/jsx-runtime"]
  },
  plugins: ["react/jsx-runtime"],
}

