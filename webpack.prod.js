import StaticSiteGeneratorWebpackPlugin from "static-site-generator-webpack-plugin";
import { merge } from "webpack-merge";
import webpackCommon from "./webpack.common.js";

const webpackProd = merge(webpackCommon, {
  mode: "production",
  plugins: [
    new StaticSiteGeneratorWebpackPlugin({
      crawl: true,
    }),
  ],
});

export default webpackProd;
