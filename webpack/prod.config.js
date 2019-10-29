// starter/webpack.config.js
import WebpackCommonConfig, { resolve } from './common.config';
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const merge = require('webpack-merge');
const nodeExternals  = require('webpack-node-externals');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(WebpackCommonConfig, {
  plugins: [
    new LodashModuleReplacementPlugin(),
    //   new HtmlWebpackPlugin({
    //     title: 'Hello World',
    //     template: resolve('/src/index.html'),
    //     filename: 'index.html',
    //     minify: { // 压缩HTML文件
    //       removeComments: true, // 移除HTML中的注释
    //       collapseWhitespace: true // 删除空白符与换行符
    //     },
    //     chunksSortMode() {
    //       return true;
    //     }
    //   })
  ],
  externals: [
    nodeExternals() // 用于排除水波纹库中的react，react-dom等
  ]
});
