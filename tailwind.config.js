module.exports = {
  mode: "jit",
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'template-purple': '#5267DF',
        'template-red': '#FA5959',
        'template-blue': '#242A45',
        'template-grey': '#9194A2',
        'template-white': '#f7f7f7',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
