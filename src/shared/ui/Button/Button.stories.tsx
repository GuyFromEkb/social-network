import { Meta, StoryObj } from "@storybook/react"

import "app/styles/index.scss"

import { Theme } from "app/providers/theme"

import { Button, ThemeButton } from "./Button"

const meta = {
  title: "shared/ui/Button",
  component: Button,

  decorators: [
    (Story) => (
      <div className={"app" + " " + Theme.Light}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    theme: { control: "inline-radio", options: Object.values(ThemeButton) },
  },
} satisfies Meta<typeof Button>
export default meta

type Story = StoryObj<typeof meta>
export const Clear: Story = {
  args: {
    children: "Нажми меня",
    theme: ThemeButton.Clear,
  },
}

export const Outline: Story = {
  args: {
    children: "Нажми меня",
    theme: ThemeButton.Outline,
  },
}
