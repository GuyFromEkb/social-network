export enum AppRoutes {
  Main = "main",
  About = "about",
  NotFound = "notFound",
}

export const routePaths: Record<AppRoutes, string> = {
  [AppRoutes.Main]: "/",
  [AppRoutes.About]: "/about",
  [AppRoutes.NotFound]: "*",
}
