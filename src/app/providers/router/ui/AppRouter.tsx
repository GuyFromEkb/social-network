import { FC, Suspense } from "react"
import { Route, Routes } from "react-router-dom"

import { AboutPage } from "pages/AboutPage"
import { MainPage } from "pages/MainPage"

export const AppRouter: FC = () => {
  return (
    <Suspense fallback={<div>lazy loading</div>}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Suspense>
  )
}
