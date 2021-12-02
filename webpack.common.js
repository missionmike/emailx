import path from "path";
import remarkFrontmatter from "remark-frontmatter";

const __dirname = path.resolve();

const webpackCommon = {
  entry: "./src/index.tsx",
  module: {
    rules: [
      // {
      //   test: /\.tsx?$/,
      //   use: "ts-loader",
      //   exclude: /node_modules/,
      // },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.m?js$|\.tsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.mdx?$/,
        use: [
          // Note that Webpack runs right-to-left: `@mdx-js/loader` is used first, then
          // `babel-loader`.
          { loader: "babel-loader", options: {} },
          {
            loader: "@mdx-js/loader",
            /** @type {import('@mdx-js/loader').Options} */
            options: {
              jsxRuntime: "classic",
              // pragma: "react.createElement",
              // pragmaFrag: "react.Fragment",
              remarkPlugins: [remarkFrontmatter],
            },
          },
        ],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx", ".mdx"],
  },
  output: {
    clean: true,
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    libraryTarget: "umd",
    globalObject: "this",
    publicPath: "/",
  },
};

export default webpackCommon;
