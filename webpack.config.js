/* eslint-disable no-undef */
const path = require("path");
const webpack = require("webpack");
require("dotenv").config({ path: "./.env" });
const buffer = require("buffer");

module.exports = {
   resolve: {
      fallback: {
         assert: require.resolve("assert"),
         buffer: require.resolve("buffer"),
         console: require.resolve("console-browserify"),
         constants: require.resolve("constants-browserify"),
         crypto: require.resolve("crypto-browserify"),
         domain: require.resolve("domain-browser"),
         events: require.resolve("events"),
         http: require.resolve("stream-http"),
         https: require.resolve("https-browserify"),
         os: require.resolve("os-browserify/browser"),
         path: require.resolve("path-browserify"),
         punycode: require.resolve("punycode"),
         process: require.resolve("process/browser"),
         querystring: require.resolve("querystring-es3"),
         stream: require.resolve("stream-browserify"),
         string_decoder: require.resolve("string_decoder"),
         sys: require.resolve("util"),
         timers: require.resolve("timers-browserify"),
         tty: require.resolve("tty-browserify"),
         url: require.resolve("url"),
         util: require.resolve("util"),
         vm: require.resolve("vm-browserify"),
         zlib: require.resolve("browserify-zlib"),
      },
   },
   entry: "./src/app.js",
   output: {
      filename: "main.js",
      path: path.resolve(__dirname, "public"),
   },
   mode: "development",
   module: {
      rules: [
         {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
         },
         {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: "asset/resource",
         },
         {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            loader: "file-loader",
            options: {
               name: "[name].[ext]",
               outputPath: "fonts/",
            },
            type: "asset/resource",
         },
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ["babel-loader"],
         },
         {
            test: /\.mp3$/,
            loader: "file-loader",
         },
      ],
   },
   plugins: [
      // fix "process is not defined"
      new webpack.ProvidePlugin({
         process: "process/browser",
      }),
      // give process.env :)
      new webpack.DefinePlugin({
         "process.env": JSON.stringify(process.env),
         buffer: buffer,
      }),
   ],
};
