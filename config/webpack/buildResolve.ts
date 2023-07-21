import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin"
import { ResolveOptions } from "webpack"

export const buildResolve = (): ResolveOptions => {
  return {
    extensions: [".tsx", ".ts", ".js"],
    plugins: [new TsconfigPathsPlugin()],
  }
}
