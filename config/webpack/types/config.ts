export type BuildMode = "production" | "development"

export interface BuildEnv {
  mode?: BuildMode
  port?: number
  github_repo_name?: boolean
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
