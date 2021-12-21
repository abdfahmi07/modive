const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const path = require("path");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: "/node_modules",
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
              targets: {
                esmodules: true,
              },
            },
          },
        ],
      },
    ],
  },
});
