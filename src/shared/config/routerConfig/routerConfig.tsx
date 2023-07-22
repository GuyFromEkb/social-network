import { RouteProps } from "react-router-dom"

import { AboutPage } from "pages/AboutPage"
import { MainPage } from "pages/MainPage"

export enum AppRoutes {
  Main = "main",
  About = "about",
}

export const routePaths: Record<AppRoutes, string> = {
  [AppRoutes.Main]: "/",
  [AppRoutes.About]: "/about",
}

export const routeConfig: RouteProps[] = [
  { path: routePaths.main, element: <MainPage /> },
  {
    path: routePaths.about,
    element: <AboutPage />,
  },
]
