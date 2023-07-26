import MiniCssExtractPlugin from "mini-css-extract-plugin"

export const getStyleLoader = (isDev: boolean) => {
  return {
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
}
