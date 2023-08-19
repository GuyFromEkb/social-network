import type { StorybookConfig } from "@storybook/react-webpack5"
import { RuleSetRule } from "webpack"

import { buildResolve, getStyleLoader } from "../webpack"
import { getSvgLoader } from "../webpack/loaders/getSvgLoader"

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
    // remove svg from existing rule
    const fileLoaderRule = config.module.rules.find(
      (rule: RuleSetRule & { test: RegExp }) => rule.test && rule.test.test(".svg")
    ) as RuleSetRule
    fileLoaderRule.exclude = /\.svg$/

    //loaders
    config.module.rules.push(getSvgLoader())
    config.module.rules.push(getStyleLoader(true))
    //resolve
    config.resolve.plugins = [...(config.resolve.plugins ?? []), ...buildResolve().plugins]

    return config
  },
}
export default config
