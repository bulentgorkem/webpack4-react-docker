var merge = require("webpack-merge");
var webpack = require("webpack");
var path = require("path");

var env = process.env.NODE_ENV || "development";
var production = env === "production";

var node_modules_dir = "/node_modules";

var plugins = [];

var common = {
  devServer: {
    contentBase: __dirname,
    compress: true,
    port: 8000,
    host: "0.0.0.0"
  },

  watchOptions: {
    poll: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [node_modules_dir],
        loader: "babel-loader",
        options: {
          presets: ["env", "react"]
        }
      }
    ]
  },
  plugins: plugins
};

module.exports = [
  merge(common, {
    entry: [__dirname + "/app/app.js"],
    output: {
      path: __dirname + "/dist",
      filename: "app.js"
    }
  })
];
