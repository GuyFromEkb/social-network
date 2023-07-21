import { Configuration } from "webpack"

import { buildDevServer } from "./buildDevServer"
import { buildLoaders } from "./buildLoaders"
import { buildPlugins } from "./buildPlugins"
import { buildResolve } from "./buildResolve"
import { BuildOptions } from "./types/config"

export const buildWebpackConfig = (options: BuildOptions): Configuration => {
  return {
    mode: options.isDev ? "development" : "production",
    entry: options.paths.entry,
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolve(),
    plugins: buildPlugins(options),
    devServer: options.isDev ? buildDevServer(options) : undefined,
    devtool: options.isDev ? "eval-cheap-source-map" : undefined,
    output: {
      filename: "[name].[contenthash].js",
      path: options.paths.build,
      clean: true,
    },
  }
}
