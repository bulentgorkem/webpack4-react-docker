var merge = require('webpack-merge');
var webpack = require('webpack');
var path = require('path');

var env = process.env.NODE_ENV || 'development';
var production = env === 'production';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

var node_modules_dir = '/node_modules';

var HtmlWebpackPlugin = require('html-webpack-plugin');

var plugins = [
  new MiniCssExtractPlugin({
    filename: '[name].css'
  }),
  new HtmlWebpackPlugin({
    template: './src/index.html'
  })
];

var common = {
  devServer: {
    contentBase: __dirname + '/src',
    compress: true,
    port: 8000,
    host: '0.0.0.0'
  },

  watchOptions: {
    poll: true
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [node_modules_dir],
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react']
        }
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: ['url-loader?limit=10000', 'img-loader']
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              publicPath: '../'
            }
          },
          'css-loader'
        ]
      }
    ]
  },
  plugins: plugins
};

module.exports = [
  merge(common, {
    entry: [__dirname + '/src/App.js'],
    output: {
      path: __dirname + '/dist',
      filename: 'app.js'
    }
  })
];
