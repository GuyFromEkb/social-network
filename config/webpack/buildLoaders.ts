import MiniCssExtractPlugin from "mini-css-extract-plugin"
import { RuleSetRule } from "webpack"

import { BuildOptions } from "./types/config"

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
  const { isDev } = options

  const tsLoader = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: "ts-loader",
  }

  const svgLoader = {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: "file-loader",
  }

  const styleLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: true,
            localIdentName: isDev ? "[path]--[local]" : "[hash:base64:8]",
          },
        },
      },
      "sass-loader",
    ],
  }
  return [tsLoader, styleLoader, fileLoader, svgLoader]
}
