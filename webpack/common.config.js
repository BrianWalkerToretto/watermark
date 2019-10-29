const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

function resolve(dir) {
  return path.join(__dirname, '../', dir);
}
const isProd = process.env.NODE_ENV === 'production';

export default {
  mode: isProd ? 'production' : 'development',
  entry: {
    watermark: isProd
      ? resolve('/src')
      : ['react-hot-loader/patch', resolve('/src/app')],
  },
  stats: {
    assets: true,
    assetsSort: 'field',
    builtAt: false,
    cached: false,
    colors: true,
  },
  cache: true,
  profile: true,
  devtool: isProd ? false : 'inline-source-map', // 控制是否生成，以及如何生成 source map
  output: {
    path: resolve('/dist'),
    filename: '[name].js', // 输出文件的文件名
    // chunkFilename: IS_PROD ? 'chunks/[name].[contenthash:8].js' : '[name].js', // 非入口(non-entry) chunk 文件的名称
    publicPath: './', // 公共路径
    // libraryTarget决定了你的library运行在哪个环境
    libraryTarget: 'umd', // 工具库既可以用commonjs和amd方式使用也可以用script方式引入
    umdNamedDefine: true,
    library: 'watermark', // library指定的是你require时候的模块名。
    libraryExport: 'default'
  },
  resolve: {
    modules: [resolve('/src'), resolve('/node_modules')],
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.less'],
    // 针对 Npm 中的第三方模块优先采用 jsnext:main 中指向的 ES6 模块化语法的文件
    mainFields: ['jsnext:main', 'browser', 'main'],
    alias: {
      // react@16.6之后需要，用来修复热更新问题
      'react-dom': '@hot-loader/react-dom',
      // @images,@common,@util,@layout,@include
      // '@pages': resolve('client/pages')
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        include: resolve('/src'),
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        include: resolve('/src'),
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: !isProd,
              importLoaders: 2, // 启用/禁用或设置在CSS加载程序之前应用的加载程序的数量
              modules: {
                context: resolve('/src'), // 允许为本地标识符名称重新定义基本的加载程序上下文。
                localIdentName: '[name]__[local]-[hash:base64:5]', // 使用 localIdentName 查询参数配置生成类名
              }
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: !isProd,
              config: {
                path: 'postcss.config.js'  // 这个得在项目根目录创建此文件
              }

            }
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: !isProd,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // scope hoisting
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.ProvidePlugin({
      Symbol: resolve('./node_modules/core-js/features/symbol'),
      Set: resolve('./node_modules/core-js/features/set'),
      Map: resolve('./node_modules/core-js/features/map'),
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ],
  // optimization: {
  //   minimizer: [
  //     new TerserPlugin({
  //       // Terser minify options.
  //       terserOptions: {
  //         parse: {
  //           // We want terser to parse ecma 8 code. However, we don't want it
  //           // to apply any minification steps that turns valid ecma 5 code
  //           // into invalid ecma 5 code. This is why the 'compress' and 'output'
  //           // sections only apply transformations that are ecma 5 safe
  //           ecma: 8,
  //         },
  //         compress: {
  //           ecma: 5,
  //           // display warnings when dropping unreachable code or unused declarations etc.
  //           warnings: false,
  //           // apply certain optimizations to binary nodes
  //           // Disabled because of an issue with Uglify breaking seemingly valid code:
  //           // Pending further investigation: https://github.com/mishoo/UglifyJS2/issues/2011
  //           comparisons: false,
  //           // inline calls to function with simple/return statement:
  //           // Disabled because of an issue with Terser breaking valid code:
  //           // Pending further investigation: https://github.com/terser-js/terser/issues/120
  //           inline: 2, // inline functions with arguments
  //         },
  //         mangle: {
  //           // Pass true to work around the Safari 10 loop iterator bug "Cannot declare a let variable twice".
  //           // See also: the safari10 output option.
  //           safari10: true,
  //         },
  //         // Added for profiling in devtools
  //         keep_classnames: true,
  //         keep_fnames: true,
  //         output: {
  //           ecma: 5,
  //           // pass true or "all" to preserve all comments, "some" to preserve some comments,
  //           // a regular expression string (e.g. /^!/) or a function.
  //           comments: false,
  //           // escape Unicode characters in strings and regexps (affects directives with non-ascii characters becoming invalid)
  //           // Turned on because emoji and regex is not minified properly using default
  //           ascii_only: true,
  //         },
  //       },
  //       // Use multi-process parallel running to improve the build speed.
  //       //Default number of concurrent runs: os.cpus().length - 1.
  //       parallel: true,
  //       cache: true, // Enable file caching
  //     })
  //   ]
  // }
};
export { resolve };
