/*
 * @Description:
 * @Author: ju.rui
 * @Date: 2024-02-16 11:26:23
 */
const { Configuration } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
/**
 * @type {Configuration} //配置智能提示
 */
const config = {
  mode: 'none',
  entry: './index.js',
  output: {
    filename: 'bundle.js',
  },
  devServer: {
    hot: true,
    port: 9001,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new ModuleFederationPlugin({
      name: 'host', //name必填
      filename: 'hostEntry.js', //filename必填 生成的文件名
      //对应关系remote对应的remote项目ModuleFederationPlugin的name 后面url对应的port以及对应ModuleFederationPlugin的filename
      remotes: {
        remote: 'remote@http://localhost:9002/remoteEntry.js', //引入模块
      },
    }),
  ],
};

module.exports = config;
