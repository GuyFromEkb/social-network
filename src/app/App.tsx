import "./styles/index.scss"

import cls from "./app.module.scss"
import { FC, Suspense } from "react"

import { NavBar } from "~widgets/NavBar"
import { SideBar } from "~widgets/SideBar"

import { AppRouter } from "./providers/router"

export const App: FC = () => {
  return (
    <div className="app">
      <Suspense fallback={"Загрузка переводов..."}>
        <NavBar />
        <main className={cls.pageGrid}>
          <SideBar />
          <AppRouter />
        </main>
      </Suspense>
    </div>
  )
}
