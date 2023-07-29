import path from "path"

import { BuildEnv, BuildOptions, buildWebpackConfig } from "./config/webpack"

export default (env: BuildEnv) => {
  const options: BuildOptions = {
    env,
    isDev: env.mode === "development",
    port: env.port || 3000,
    paths: {
      html: path.resolve(__dirname, "public", "index.html"),
      entry: path.resolve(__dirname, "src", "main.tsx"),
      src: path.resolve(__dirname, "src"),
      build: path.resolve(__dirname, "build"),
      locales: path.resolve(__dirname, "public", "locales"),
      buildLocales: path.resolve(__dirname, "build", "locales"),
    },
  }

  return buildWebpackConfig(options)
}
