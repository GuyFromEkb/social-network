import "./styles/index.scss"

import { FC } from "react"

import { AppRouter } from "app/providers/router"
import { useTheme } from "app/providers/theme"
import { cn } from "shared/lib/classNames"
import { NavBar } from "widgets/NavBar"

export const App: FC = () => {
  const { theme } = useTheme()

  return (
    <main className={cn("app", {}, [theme])}>
      <NavBar />
      <AppRouter />
    </main>
  )
}
