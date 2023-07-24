import { Configuration } from "webpack-dev-server"

import { BuildOptions } from "./types/config"

export const buildDevServer = (options: BuildOptions): Configuration => {
  const { port } = options

  return {
    compress: true,
    port: port,
    hot: true,
    historyApiFallback: true,
    open: true,
  }
}
