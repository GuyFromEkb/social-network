import { Decorator } from "@storybook/react"

import { ThemeProvider } from "../../../lib/theme/"

export const ThemeProviderDecorator: Decorator = (Story, ctx) => {
  return (
    <ThemeProvider>
      <Story {...ctx} />
    </ThemeProvider>
  )
}
