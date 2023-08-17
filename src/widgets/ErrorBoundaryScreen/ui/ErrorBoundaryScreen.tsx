import cls from "./errorBoundaryScreen.module.scss"
import React, { FC } from "react"

export const ErrorBoundaryScreen: FC = () => {
  return (
    <div data-testid={"error-boundary-screen"} className={cls.container}>
      <div className={cls.body}>
        <div>Ууупс что то пошло не так...</div>
        <button onClick={() => window.location.replace("/")}>Вернуться на главную</button>
      </div>
    </div>
  )
}
