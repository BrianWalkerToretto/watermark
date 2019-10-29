// starter/webpack.config.js
import WebpackCommonConfig, { resolve } from './common.config';
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const merge = require('webpack-merge');
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
  externals: {
    react: 'react',
    'react-dom': 'react-dom'
  },
});
