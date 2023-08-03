export enum AppRoutes {
  Main = "main",
  About = "about",
}

export const routePaths: Record<AppRoutes, string> = {
  [AppRoutes.Main]: "/",
  [AppRoutes.About]: "/about",
}
