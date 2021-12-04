module.exports = {
  mode: "jit",
  purge: ["./*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        dm: ['"DM Sans"'],
        roboto: ['"Roboto"'],
        inter: ['"Inter"']
       },
      colors: {
        'light-orange': "#ff9900",
        'dark-orange': "#F85A47",
        'gray': "#31353B",
        'gray-border': "#DADADA",
      },
      gridTemplateColumns: {
        'work': "1fr auto 1fr auto 1fr"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
