module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
        @import "./src/assets/scss/_fonts.scss";
        @import "./src/assets/scss/_colors.scss";
        `
      }
    }
  }
}