module.exports = {
  lintOnSave: false,
  // 配置相对路径
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  // 取消生成map文件
  productionSourceMap: true,
  // 去除文件哈希值
  filenameHashing: false,
  // 配置打包文件的名字
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      // 为生产环境修改配置...
      config.mode = "production";
      // 将每个依赖包打包成单独的js文件，并以依赖包的名字命名
      let optimization = {
        runtimeChunk: "single",
        splitChunks: {
          chunks: "all",
          maxInitialRequests: Infinity,
          minSize: 100000, // 依赖包超过100k将被单独打包
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name(module) {
                const packageName = module.context.match(
                  /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                )[1];
                return `npm.${packageName.replace("@", "")}`;
              }
            }
          }
        }
      };
      // 合并webpack配置
      Object.assign(config, {
        optimization
      });
    } else {
      // 为开发环境修改配置...
      config.mode = "development";
    }
  }
};
