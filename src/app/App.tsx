import "./styles/reset.scss"

import { AppRouter } from "app/providers/router"
import { FC } from "react"
import { Link } from "react-router-dom"

export const App: FC = () => {
  return (
    <section>
      <h1 className="app">I am APP COMPONENT!</h1>
      <div>
        <Link to={"/about"}>ABOUT</Link>
        <Link to={"/"}>Main</Link>
      </div>
      <AppRouter />
    </section>
  )
}
