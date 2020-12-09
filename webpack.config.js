const path = require("path");

module.exports = {
  entry: {
    "bundle": path.resolve(__dirname, "./client/src/desktop/app.jsx"),
    // "mobile/bundle": path.resolve(__dirname, "./client/src/mobile/app.jsx"),
  },
  output: {
    path: path.resolve(__dirname, "./client/dist"),
    filename: "[name].js",
  },
  mode: "development",
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js[x]?/,
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
