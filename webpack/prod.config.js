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
  // 官网解释：webpack 中的 externals 配置提供了不从 bundle 中引用依赖的方式。解决的是，所创建的 bundle 依赖于那些存在于用户环境(consumer environment)中的依赖。
  // 理解：意思是如果需要引用一个库，但是又不想让webpack打包（减少打包的时间），并且又不影响我们在程序中以CMD、AMD或者window/global全局等方式进行使用（一般都以import方式引用使用），那就可以通过配置externals。
  externals: [
    nodeExternals() // 用于排除水波纹库中的react，react-dom等
  ]
});
