export type BuildMode = "production" | "development"

export interface BuildEnv {
  mode?: BuildMode
  port?: number
  publish?: "gh-pages"
}

export interface BuildPaths {
  entry: string
  build: string
  html: string
  src: string
}

export interface BuildOptions {
  paths: BuildPaths
  isDev: boolean
  port: number
  env: BuildEnv
}
