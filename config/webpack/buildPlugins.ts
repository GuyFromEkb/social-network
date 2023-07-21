import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin"
import HtmlWebpackPlugin from "html-webpack-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import webpack, { WebpackPluginInstance } from "webpack"

import { BuildOptions } from "./types/config"

export const buildPlugins = (options: BuildOptions): WebpackPluginInstance[] => {
  const { isDev, paths } = options
  return [
    // new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    isDev && new ReactRefreshWebpackPlugin(),
    !isDev &&
      new MiniCssExtractPlugin({
        filename: "css/[name].[contenthash:8].css",
        chunkFilename: "css/[name].[contenthash:8].css",
      }),
  ].filter(Boolean)
}
