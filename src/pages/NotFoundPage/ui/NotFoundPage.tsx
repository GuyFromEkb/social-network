import clx from "./notFoundPage.module.scss"
import { FC } from "react"
import { useTranslation } from "react-i18next"

export const NotFoundPage: FC = () => {
  const { t } = useTranslation()
  return (
    <div className={clx.container}>
      <h1> {t("Страница не найдена")}</h1>
    </div>
  )
}
