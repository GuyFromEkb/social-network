import { FC, Suspense } from "react"
import { Route, Routes } from "react-router-dom"

import { routeConfig } from "shared/config/routerConfig"

export const AppRouter: FC = () => {
  return (
    <Suspense fallback={<div>lazy loading</div>}>
      <Routes>
        {routeConfig.map((routeProps) => (
          <Route {...routeProps} key={routeProps.path} />
        ))}
      </Routes>
    </Suspense>
  )
}
