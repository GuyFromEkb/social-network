import { RouteProps } from "react-router-dom"

import { AboutPage } from "~pages/AboutPage"
import { MainPage } from "~pages/MainPage"
import { routePaths } from "~shared/constants/routePath"

export const routeConfig: RouteProps[] = [
  { path: routePaths.main, element: <MainPage /> },
  {
    path: routePaths.about,
    element: <AboutPage />,
  },
]
