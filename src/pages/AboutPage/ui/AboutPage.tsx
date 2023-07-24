import { FC } from "react"
import { useTranslation } from "react-i18next"

const AboutPage: FC = () => {
  const { t } = useTranslation("about")
  return (
    <div>
      <div>{t("О сайте")}</div>
      <div>{t("А вот тут мог быть рецепт вкуснейшего рагу")}</div>
    </div>
  )
}

export default AboutPage
