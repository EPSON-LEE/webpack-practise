const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')

console.log(process.argv.join('').indexOf('dist'))
console.log(process.env.NODE_ENV)

module.exports = {
  entry: {
    'a': path.join(__dirname, './src/a.js'),
    'b': path.join(__dirname, './src/a.js'),
    vendors: ['lodash']
  },
  output: {
    filename: '[name].[hash].js',
    path: path.join(__dirname, 'dist')
  },
  node: {
    fs: 'empty',
    module: 'empty'
  },
  plugins: [
    // 生成html模板
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, './templates/index1.html'),
      chunks: ['a', 'b']
    }),
    // Hot module replacement
    new webpack.HotModuleReplacementPlugin(),
    // 定义全局变量
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),
    // 清理dist文件
    new CleanWebpackPlugin('dist')
  ],
  devServer: {
    // 记录服务器资源位置
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    // shell中只显示错误
    stats: "minimal",
    // 浏览器也显示错误
    overlay: true,
    // 第二次编译不会出现编译信息
    quiet: false,
    // 使用inline模式的自动刷新和
    inline:true,
    hot:true,
    // inline 模式完
    port: 6565
  }
}