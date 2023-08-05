import type { StorybookConfig } from "@storybook/react-webpack5"

import { buildResolve, getStyleLoader } from "../webpack"

const config: StorybookConfig = {
  stories: ["../../src/**/*.stories.@(ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-addon-themes",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => {
    return {
      ...config,
      module: {
        ...config.module,
        rules: [...config.module.rules, getStyleLoader(true)],
      },
      resolve: {
        ...config.resolve,
        plugins: [...(config.resolve.plugins ?? []), ...buildResolve().plugins],
      },
    }
  },
}
export default config
