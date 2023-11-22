module.exports = {
  important: true,
  corePlugins:{
    preflight:false,
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/component/**/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

