import path from "path"

import { BuildEnv, BuildOptions, buildWebpackConfig } from "./config/webpack"

export default (env: BuildEnv) => {
  const options: BuildOptions = {
    isDev: env.mode === "development",
    port: env.port || 3000,
    paths: {
      html: path.resolve(__dirname, "public", "index.html"),
      entry: path.resolve(__dirname, "src", "main.tsx"),
      src: path.resolve(__dirname, "src"),
      build: path.resolve(__dirname, "build"),
    },
  }

  return buildWebpackConfig(options)
}
