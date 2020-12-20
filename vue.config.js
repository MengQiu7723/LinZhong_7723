// Axios跨域代理配置
module.exports = {
  publicPath: "./",
  devServer: {
    proxy: {
      "/api": {
        // 使用"/api"来代替"http://f.apiplus.c"
        // target: 'http://127.0.0.1:8080', // 源地址
        target: "http://192.168.0.113:8084", // 源地址
        changeOrigin: true, // 改变源
        pathRewrite: {
          "^/api": "", // 路径重写
        },
      },
      "/upload": {
        // target: 'http://127.0.0.1:8080', // 源地址
        target: "http://192.168.0.113:8085", // 源地址
        changeOrigin: true, // 改变源
        /* pathRewrite: {
          "^/upload": "/upload", // 路径重写
        }, */
      },

    },
  },
  lintOnSave: false // eslint-loader 是否在保存的时候检查
  // false：关闭每次保存都进行检测
  //true：开启每次保存都进行检测，效果与warning一样

};
