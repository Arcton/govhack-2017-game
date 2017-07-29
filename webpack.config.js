const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = {
  context: path.resolve(__dirname, './src/js'),
  devtool: 'source-map',

  entry: {
    app: './app.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },

  devServer: {
    contentBase: path.resolve(__dirname, './src'),
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015'] },
        }],
      },

      {
        test: /\.(sass|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },

      {
        test: /\.svg$/,
        exclude: [/assets\/icons/],
        use: 'raw-loader',
      },

      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.svg$/,
        include: path.resolve('./src/assets/icons'),
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              spriteFilename: 'icons.svg',
            },
          },
          'svgo-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: '../index.html',
    }),
    new SpriteLoaderPlugin(),
  ],
};
