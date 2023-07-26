import cls from "./button.module.scss"
import { ButtonHTMLAttributes, FC } from "react"

import { cn } from "shared/lib/classNames"

export enum ThemeButton {
  Clear = "clear",
  Outline = "outline",
}
interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
}

export const Button: FC<IButtonProps> = (props) => {
  const { className, theme, children, ...otherProps } = props
  return (
    <button {...otherProps} className={cn(cls.btn, {}, [cls[theme], className])}>
      {children}
    </button>
  )
}
