const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "/src", "index.jsx"),
  // Where files should be sent once they are bundled
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
  },
  // webpack 5 comes with devServer which loads in development mode
  devServer: {
    port: 3000,
    open: true,
    hot: true,
  },
  // Rules of how webpack will take our files, complie & bundle them for the browser
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: [".js", ".jsx"],
        },
        use: {
          loader: "babel-loader",
          options: {
            plugins: [
              "@babel/plugin-syntax-dynamic-import",
              "@babel/plugin-transform-runtime",
              "lodash",
              [
                "babel-plugin-import",
                {
                  libraryName: "@mui/material",
                  libraryDirectory: "",
                  camel2DashComponentName: false,
                },
                "core",
              ],
              [
                "babel-plugin-import",
                {
                  libraryName: "@mui/icons-material",
                  libraryDirectory: "",
                  camel2DashComponentName: false,
                },
                "icons",
              ],
            ],
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: "asset/resource",
      },
    ],
  },

  plugins: [new HtmlWebpackPlugin({ template: "./public/index.html" })],
};
