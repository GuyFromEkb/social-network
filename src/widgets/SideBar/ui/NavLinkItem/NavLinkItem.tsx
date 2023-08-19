import cls from "./navLinkItem.module.scss"
import React, { FC, ReactNode } from "react"

import { cn } from "~shared/lib/classNames"
import { AppLink, AppLinkTheme } from "~shared/ui/AppLink"

interface INavLinkProps {
  short: boolean
  text: ReactNode
  Icon: React.FC<React.SVGProps<SVGSVGElement>>
  path: string
}

export const NavLinkItem: FC<INavLinkProps> = ({ short, Icon, text, path }) => {
  return (
    <AppLink theme={AppLinkTheme.Inverted} to={path} className={cls.link}>
      <div>
        <Icon className={cls.icon} />
      </div>
      <span className={cn(cls.linkText, { [cls.linkTextHide]: short })}>{text}</span>
    </AppLink>
  )
}
