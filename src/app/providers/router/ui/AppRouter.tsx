import { FC, Suspense } from "react"
import { Route, Routes } from "react-router-dom"

import { PageLoader } from "~shared/ui/PageLoader"

import { routeConfig } from "../lib/routerConfig"

export const AppRouter: FC = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routeConfig.map((routeProps) => (
          <Route {...routeProps} key={routeProps.path} />
        ))}
      </Routes>
    </Suspense>
  )
}
