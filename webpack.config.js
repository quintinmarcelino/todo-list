const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './client/index.js',
  output: {
    path: `${__dirname}/build/`,
    filename: 'build.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css-loader'),
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader'),
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=public/fonts/[name].[ext]',
      },
      { test: /\.ico$/, loader: 'file-loader?name=[name].[ext]' },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        loader: 'url-loader',
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin({
      filename: 'styles.css',
      allChunks: true,
    }),
  ],
};