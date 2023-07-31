import { RuleSetRule } from "webpack"

import { getStyleLoader } from "./loaders/getStyleLoader"
import { BuildOptions } from "./types/config"

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
  const tsLoader = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: "ts-loader",
  }

  //должен идти перед ts loader *но это не точно
  // const babelLoader = {
  //   test: /\.(js|jsx|tsx)$/,
  //   exclude: /node_modules/,
  //   use: {
  //     loader: "babel-loader",
  //     options: {
  //       presets: ["@babel/preset-env"],
  //     },
  //   },
  // }

  const styleLoader = getStyleLoader(options.isDev)

  const svgLoader = {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: "file-loader",
  }

  return [tsLoader, styleLoader, fileLoader, svgLoader]
}
