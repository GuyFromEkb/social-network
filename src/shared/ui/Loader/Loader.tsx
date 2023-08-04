import cls from "./loader.module.scss"
import { FC } from "react"

import { cn } from "../../lib/classNames"

interface ILoaderProps {
  className?: string
}

export const Loader: FC<ILoaderProps> = (props) => {
  const { className } = props
  return (
    <div className={cn(cls.ldsHeart, {}, [className])}>
      <div />
    </div>
  )
}
