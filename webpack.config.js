let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin')


/** 页面生成配置 **/
const indexHtml = new HtmlWebpackPlugin({
  title: 'bundle',
  description: 'bundle',
  filename: 'index.html',
  template: path.join(__dirname, './templates/index'),
  inject: true,
  hash: false,
  minify: {
    removeComments: true, // 移除HTML中的注释
    collapseWhitespace: true // 删除空白符与换行符
  },
  chunksSortMode: 'manual', // chunks排序-手动
  chunks: ['a', 'vendor']
})

module.exports = {
  entry: {
    'a': path.join(__dirname, './src/a.js'),
    'b': path.join(__dirname, './src/a.js'),
  },
  output: {
    filename: '[name].[chunkhash:8].js',
    path: path.join(__dirname, 'dist')
  },
  node: {
    fs: 'empty'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, './templates/index1.html'),
      chunks: ['a', 'b']
    }),
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
    port: 6565
  }
}