import i18n from "i18next"
import Backend from "i18next-http-backend"
import { initReactI18next } from "react-i18next"

// особенность gh-page... нужно менять путь если публикуешь на бесплатный хостинг
const loadPath = __ENV_GITHUB_REPO_NAME__
  ? `/${__ENV_GITHUB_REPO_NAME__}/locales/{{lng}}/{{ns}}.json`
  : "/locales/{{lng}}/{{ns}}.json"

export const i18nConfig = i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    debug: __ENV_IS_DEV__,
    fallbackLng: "ru",
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath,
    },
  })
