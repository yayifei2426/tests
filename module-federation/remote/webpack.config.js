/*
 * @Description:
 * @Author: ju.rui
 * @Date: 2024-02-16 11:16:25
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
    port: 9002, //remote 9002
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new ModuleFederationPlugin({
      name: 'remote', //name必填
      filename: 'remoteEntry.js', //filename必填 生成的文件名
      exposes: {
        './addList': './list.js', //暴露的模块
      },
    }),
  ],
};

module.exports = config;
