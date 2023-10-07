import "./styles/index.scss"

import cls from "./app.module.scss"
import { FC, Suspense } from "react"
import { Provider } from "react-redux"

import { NavBar } from "~widgets/NavBar"
import { SideBar } from "~widgets/SideBar"

import { appStore } from "./model/appStore"
import { AppRouter } from "./providers/router"

export const App: FC = () => {
  return (
    <Provider store={appStore}>
      <div className="app">
        <Suspense fallback={"Загрузка переводов..."}>
          <NavBar />
          <main className={cls.pageGrid}>
            <SideBar />
            <AppRouter />
          </main>
        </Suspense>
      </div>
    </Provider>
  )
}
