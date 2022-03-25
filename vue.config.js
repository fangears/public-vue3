const { defineConfig } = require("@vue/cli-service");
const path = require("path");

const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");

module.exports = defineConfig({
  lintOnSave: true,
  transpileDependencies: true,
  publicPath: "./", //打包后的默认路径
  devServer: {
    allowedHosts: "all", //所有host地址都可访问
    port: "8888", //端口号
    proxy: {
      //前端与服务器不在同一个主机时配置跨域
      "^/api": {
        target: "http://127.0.0.1:8889",
        pathRewrite: {
          "^/api": "",
        },
        changeOrigin: true,
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        //配置默认路径
        "@": path.resolve(__dirname, "src"), //"@/" = "src/"
        components: path.resolve(__dirname, "src/components"),
      },
    },
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
});
