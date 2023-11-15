const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");
const { InjectManifest } = require("workbox-webpack-plugin");

module.exports = () => {
  return {
    mode: "development",
    entry: {
      main: "./src/js/index.js",
      install: "./src/js/install.js",
    },
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./index.html",
        favicon: "./favicon.ico",
        title: "JATE",
      }),
      new WebpackPwaManifest({
        inject: true,
        fingerprints: false,
        name: "Jate",
        short_name: "Jate",
        description: "A simple JavaScript editor",
        background_color: "#ffffff",
        theme_color: "#ffffff",
        start_url: "/",
        publicPath: "./",
        icons: [
          {
            src: path.resolve("./src/images/logo.png"),
            size: [96, 128, 192, 256, 384, 512], // multiple sizes
            destination: path.join("assets", "icons"),
          },
        ],
      }),

      new InjectManifest({
        swSrc: "./src-sw.js",
        swDest: "src-sw.js",
      }),
    ],

    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
              plugins: ["@babel/plugin-transform-runtime"],
            },
          },
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
      ],
    },
  };
};