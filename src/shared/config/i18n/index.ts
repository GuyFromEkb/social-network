import i18n from "i18next"
import Backend from "i18next-http-backend"
import { initReactI18next } from "react-i18next"

const ghRepoName = "social-network"

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    debug: __ENV_IS_DEV__,
    fallbackLng: "ru",
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: __ENV_IS_PUBLISH_TO_GH_PAGE__
        ? `/${ghRepoName}/locales/{{lng}}/{{ns}}.json`
        : "/locales/{{lng}}/{{ns}}.json",
    },
  })

export default i18n
