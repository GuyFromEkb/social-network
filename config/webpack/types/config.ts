export type BuildMode = "production" | "development"

export interface BuildEnv {
  MODE?: BuildMode
  PORT?: number
  GITHUB_REPO_NAME?: string
  BUNDLE_ANALYZER?: boolean
}

export interface BuildPaths {
  entry: string
  build: string
  html: string
  src: string
  locales: string
  buildLocales: string
}

export interface BuildOptions {
  paths: BuildPaths
  isDev: boolean
  port: number
  env: BuildEnv
}
