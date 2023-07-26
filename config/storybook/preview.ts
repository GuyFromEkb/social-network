import type { Preview } from "@storybook/react"

// глобальные стили, что бы применились темы, css переменные
import "../../src/app/styles/index.scss"

const preview: Preview = {
  parameters: {
    themes: {
      default: "light",
      list: [
        { name: "dark", class: ["app", "dark"], color: "#090949" },
        { name: "light", class: ["app", "light"], color: "#e8e8ea" },
      ],
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview
