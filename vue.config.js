module.exports = {
  devServer: {
    open: true
  },
  lintOnSave: false,
  // 配置相对路径
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  // false 取消生成map文件 
  productionSourceMap: false,
  // false 去除文件哈希值
  filenameHashing: false,
  // 这里编写webpack配置
  configureWebpack: {
    output: {
      libraryExport: 'default'
    }
  }
};
