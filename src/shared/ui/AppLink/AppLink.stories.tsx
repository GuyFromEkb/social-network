import { Meta, StoryObj } from "@storybook/react"

import { RouterDecorator } from "../../config/storybook/RouterDecorator"
import { AppLink, AppLinkTheme } from "./AppLink"

const meta = {
  title: "shared/AppLink",
  component: AppLink,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    theme: { control: "inline-radio", options: Object.values(AppLinkTheme) },
  },
  decorators: [RouterDecorator],
} satisfies Meta<typeof AppLink>
export default meta

type Story = StoryObj<typeof meta>

export const NonActivePrimaryTheme: Story = {
  args: {
    children: "non active link",
    to: "path...",
  },
}
export const Active: Story = {
  args: {
    children: "Active link",
    to: "/",
  },
}

export const InvertedTheme: Story = {
  args: {
    children: "InvertedTheme",
    to: "path",
    theme: AppLinkTheme.Inverted,
  },
}
