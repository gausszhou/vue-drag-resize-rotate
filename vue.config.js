module.exports = {
  lintOnSave: false,
  // 配置相对路径
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  // 取消生成map文件
  productionSourceMap: false,
  // 去除文件哈希值
  filenameHashing: false,
  // 这里编写webpack配置
  configureWebpack: {
    output: {
      libraryExport: 'default'
    }
  }

};
