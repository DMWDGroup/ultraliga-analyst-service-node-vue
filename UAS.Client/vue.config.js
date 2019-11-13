module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
        @import "~@/assets/scss/_fonts.scss";
        @import "~@/assets/scss/_colors.scss";
        @import "~@/assets/scss/_font-weights.scss";
        `
      }
    }
  }
}