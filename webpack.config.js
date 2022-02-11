const path = require("path");
const webpack = require("webpack");

module.exports = {
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
            test: /\.svg$/,
            type: "asset/resource",
            use: [["svg-url-loader"]],
         },
         {
            test: /\.(png|jpg|jpeg|gif)$/i,
            type: "asset/resource",
         },
         {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: "asset/resource",
         },
         {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
         },
      ],
   },
};
