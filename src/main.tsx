import "./app/styles/reset.scss"

import { render } from "react-dom"
import { BrowserRouter, HashRouter } from "react-router-dom"

import "~shared/config/i18n"

import { App } from "~app/App"
import { ThemeProvider } from "~shared/lib/theme"

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
