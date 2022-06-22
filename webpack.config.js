const path= require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { Stats } = require('webpack');

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename:'bundle.js',
        assetModuleFilename: 'images/[hash][ext][query]',
    },
    module: {
        rules: [
            {
              test:/\.js/,
              exclude: /node_modules/,
              use: ['babel-loader'],
            },
            {
              test: /.s?css$/,
              use: [MiniCssExtractPlugin.loader, "css-loader"],
            },

            {
              test:/\.html$/i,
                use: [
                  {
                    loader: "html-loader"
                  }
                ]
            },
            {
              test: /\.(png|svg|jpg|jpeg|gif)$/i,
              type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            minify: false,
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new HtmlWebpackPlugin({
            minify: false,
            template: "./src/about.html",
            filename: "./about.html"
        }),
        new MiniCssExtractPlugin({
            filename: "style.css"
        }),
    ],

    optimization: {
        minimizer: [
            new HtmlMinimizerPlugin(),
        ],
        minimizer: [
          new CssMinimizerPlugin(),
        ],

      },
};