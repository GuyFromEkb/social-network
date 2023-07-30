import "./app/styles/reset.scss"

import { render } from "react-dom"
import { BrowserRouter, HashRouter } from "react-router-dom"

import { App } from "app/App"
import { ThemeProvider } from "app/providers/theme"

import "shared/config/i18n"

// нужно для корректной работы роутинга на ghPages
const RouteProvider = __ENV_GITHUB_REPO_NAME__ ? HashRouter : BrowserRouter

render(
  <RouteProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </RouteProvider>,
  document.getElementById("root")
)
