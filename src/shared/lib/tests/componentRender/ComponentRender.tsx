import { render } from "@testing-library/react"
import { FC, ReactNode } from "react"
import { I18nextProvider } from "react-i18next"

import { ThemeProvider } from "../../theme"
import i18nMockConfig from "./i18nMockConfig"

const TestProviders: FC = ({ children }) => {
  return (
    <I18nextProvider i18n={i18nMockConfig}>
      <ThemeProvider>{children}</ThemeProvider>
    </I18nextProvider>
  )
}
export const componentRender = (component: ReactNode) => {
  return render(<TestProviders>{component}</TestProviders>)
}
