import "./app/styles/reset.scss"

import { render } from "react-dom"
import { BrowserRouter, HashRouter } from "react-router-dom"

import { App } from "app/App"
import { ThemeProvider } from "app/providers/theme"

import "shared/config/i18n"

render(
  <HashRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </HashRouter>,
  document.getElementById("root")
)
