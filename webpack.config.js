const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      { test: /\.(ts|tsx)$/, use: 'ts-loader' },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      { test: /\.gif$/, use: 'url-loader' },
      {
        test: /\.(pdf|gif|png|jpe?g|svg|woff|woff2|ttf|otf|eot)$/,
        use: 'file-loader'
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    port: 3000,
    hot: true,
    inline: true,
    compress: true,
    historyApiFallback: true,
    contentBase: './public'
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
