import { FC } from "react"
import { useTranslation } from "react-i18next"

import { cn } from "~shared/lib/classNames"
import { Button, ThemeButton } from "~shared/ui/Button"

interface ILangSwitcherProps {
  short?: boolean
  className?: string
}

export const LangSwitcher: FC<ILangSwitcherProps> = ({ className, short }) => {
  const { t, i18n } = useTranslation()
  const handleChangeLang = () => {
    const lang = i18n.language === "ru" ? "en" : "ru"
    void i18n.changeLanguage(lang)
  }

  return (
    <Button className={cn("", {}, [className])} onClick={handleChangeLang} theme={ThemeButton.Clear}>
      {short ? t("Короткий язык") : t("Язык")}
    </Button>
  )
}
