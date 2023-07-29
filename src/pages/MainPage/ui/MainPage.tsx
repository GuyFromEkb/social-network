import { FC } from "react"
import { useTranslation } from "react-i18next"

const text = __ENV_PUBLISH__ === "gh-pages" ? "HashRouter" : "BrowserRouter"
const MainPage: FC = () => {
  const { t } = useTranslation("main")

  return (
    <div>
      <h4> {t("Текст на главной странице")}</h4>
      <h3>{text}</h3>
    </div>
  )
}

export default MainPage
