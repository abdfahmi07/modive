const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/app.js",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: "html-loader",
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              url: false,
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[hash][ext][query]",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[hash][ext][query]",
        },
      },
    ],
  },
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      favicon: "./src/assets/images/logo.png",
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[hash].css",
    }),
  ],
};
