const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const path = require("path");

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
});
