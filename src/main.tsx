import "./app/styles/reset.scss"

import { render } from "react-dom"
import { BrowserRouter, HashRouter } from "react-router-dom"

import "~shared/config/i18n"

import React from "react"

import { App } from "~app/App"
import { ErrorBoundary } from "~app/providers/errorBoundary"
import { ThemeProvider } from "~shared/lib/theme"
import { ErrorBoundaryScreen } from "~widgets/ErrorBoundaryScreen"

// нужно для корректной работы роутинга на ghPages
const RouteProvider = __ENV_GITHUB_REPO_NAME__ ? HashRouter : BrowserRouter

render(
  <ErrorBoundary fallBack={<ErrorBoundaryScreen />}>
    <RouteProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </RouteProvider>
  </ErrorBoundary>,
  document.getElementById("root")
)
