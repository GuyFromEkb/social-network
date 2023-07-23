import { Configuration } from "webpack-dev-server"

import { BuildOptions } from "./types/config"

export const buildDevServer = (options: BuildOptions): Configuration => {
  const { paths, port } = options

  return {
    static: {
      directory: paths.html,
    },
    compress: true,
    port: port,
    hot: true,
    historyApiFallback: true,
    open: true,
  }
}
