import "./styles/index.scss"

import { FC } from "react"
import { Link } from "react-router-dom"

import { AppRouter } from "app/providers/router"
import { useTheme } from "app/providers/theme"
import { cn } from "shared/lib/classNames"

export const App: FC = () => {
  const { toggleTheme, theme } = useTheme()

  return (
    <main className={cn("app", {}, [theme])}>
      <h1>I am APP COMPONENT!</h1>
      <div>
        <Link to={"/about"}>ABOUT</Link>
        <Link to={"/"}>Main</Link>
      </div>
      <AppRouter />
      <button onClick={toggleTheme}>THEME</button>
    </main>
  )
}
