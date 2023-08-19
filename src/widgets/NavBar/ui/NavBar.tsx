import cls from "./navBar.module.scss"
import { FC } from "react"

import { cn } from "~shared/lib/classNames"

export const NavBar: FC = () => {
  return <nav className={cn(cls.navBar)}></nav>
}
