import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin"
import CopyPlugin from "copy-webpack-plugin"
import HtmlWebpackPlugin from "html-webpack-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import webpack, { WebpackPluginInstance } from "webpack"
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer"

import { BuildOptions } from "./types/config"

export const buildPlugins = (options: BuildOptions): WebpackPluginInstance[] => {
  const { isDev, paths, env } = options

  return [
    // походу это бесполезно в react приложении
    // new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new webpack.DefinePlugin({
      __ENV_IS_DEV__: JSON.stringify(isDev),
      __ENV_GITHUB_REPO_NAME__: JSON.stringify(env.GITHUB_REPO_NAME),
    }),
    env.BUNDLE_ANALYZER && new BundleAnalyzerPlugin(),
    isDev && new ReactRefreshWebpackPlugin(),
    !isDev &&
      new MiniCssExtractPlugin({
        filename: "css/[name].[contenthash:8].css",
        chunkFilename: "css/[name].[contenthash:8].css",
      }),
    !isDev &&
      new CopyPlugin({
        patterns: [{ from: paths.locales, to: paths.buildLocales }],
      }),
  ].filter(Boolean) as []
}
