import path from 'node:path';
import { fileURLToPath } from 'node:url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
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
            test: /\**\/.js$/i,
            exclude: /node_modules/,
            use: ["babel-loader"],
         },
         {
            test: /\.mp3$/,
            loader: "file-loader",
         },
      ],
   },
};
