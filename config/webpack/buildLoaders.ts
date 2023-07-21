import MiniCssExtractPlugin from "mini-css-extract-plugin"
import { RuleSetRule } from "webpack"

import { BuildOptions } from "./types/config"

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
  const { isDev } = options
  return [
    {
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: "ts-loader",
    },
    {
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
    },
  ]
}
