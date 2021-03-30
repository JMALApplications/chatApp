module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        'width': 'width',
        'opacity': 'opacity',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
