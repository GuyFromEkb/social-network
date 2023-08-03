import cls from "./appLink.module.scss"
import { FC } from "react"
import { NavLink, NavLinkProps } from "react-router-dom"

import { cn } from "../../lib/classNames"

export enum AppLinkTheme {
  Primary = "primary",
  Inverted = "inverted",
}

interface IAppLinkProps extends NavLinkProps {
  className?: string
  theme?: AppLinkTheme
}

export const AppLink: FC<IAppLinkProps> = (props) => {
  const { className, theme = AppLinkTheme.Primary, ...otherProps } = props

  return (
    <NavLink
      {...otherProps}
      className={(props) => {
        return cn(cls.appLink, { [cls.activeLink]: props.isActive }, [cls[theme], className])
      }}
    >
      {props.children}
    </NavLink>
  )
}
