const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  // devtool: 'inline-source-map', // 追踪异常文件来源
  devServer: {
    contentBase: './dist', // 告诉服务器在哪找文件
    hot: true //模块热替换
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }]
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: "production",
  plugins: [
    new CleanWebpackPlugin({cleanStaleWebpackAssets:true}), // 打包前清除dist
    new HtmlWebpackPlugin({
      title: 'Hot Module Replacementsssss'
    }),
    new webpack.NamedModulesPlugin(),
     new webpack.HotModuleReplacementPlugin()
  ] 
};
