import cls from "./button.module.scss"
import { ButtonHTMLAttributes, FC } from "react"

import { cn } from "../../lib/classNames"

export enum ThemeButton {
  Clear = "clear",
  Outline = "outline",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "backgroundInverted",
}

export enum ButtonSize {
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
}
interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
  square?: boolean
  size?: ButtonSize
}

export const Button: FC<IButtonProps> = (props) => {
  const { className, theme, square, size = ButtonSize.M, children, ...otherProps } = props

  const mods: Record<string, boolean> = {
    [cls.square]: square,
  }

  return (
    <button
      data-testid={"app-button"}
      {...otherProps}
      className={cn(cls.btn, mods, [cls[theme], cls[size], className])}
    >
      {children}
    </button>
  )
}
