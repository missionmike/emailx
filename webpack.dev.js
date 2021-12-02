import HtmlWebpackPlugin from "html-webpack-plugin";
import { merge } from "webpack-merge";
import webpackCommon from "./webpack.common.js";

const webpackDev = merge(webpackCommon, {
  mode: "development",
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.ejs",
      hash: true,
      minify: true,
      inject: false,
    }),
  ],
  stats: {
    errorDetails: true,
    children: true,
  },
});

export default webpackDev;
