const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    // open: true,
    hot: true,
    // host:'127.0.0.1',
    port:8081
  },
})
