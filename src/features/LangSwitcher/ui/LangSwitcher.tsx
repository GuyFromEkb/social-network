import { FC } from "react"
import { useTranslation } from "react-i18next"

import { cn } from "~shared/lib/classNames"
import { Button, ThemeButton } from "~shared/ui/Button"

interface ILangSwitcherProps {
  className?: string
}

export const LangSwitcher: FC<ILangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation()
  const handleChangeLang = () => {
    const lang = i18n.language === "ru" ? "en" : "ru"
    i18n.changeLanguage(lang)
  }

  return (
    <Button className={cn("", {}, [className])} onClick={handleChangeLang} theme={ThemeButton.Clear}>
      {t("Язык")}
    </Button>
  )
}
