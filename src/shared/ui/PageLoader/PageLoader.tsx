import cls from "./pageLoader.module.scss"
import { FC } from "react"
import { useTranslation } from "react-i18next"

import { Loader } from "../Loader"

export const PageLoader: FC = () => {
  const { t } = useTranslation()
  return (
    <div className={cls.container}>
      <h4> {t("Страница загружается")}</h4>
      <Loader />
    </div>
  )
}
