import { Meta, StoryObj } from "@storybook/react"

import { ThemeProviderDecorator } from "~shared/config/storybook/ThemeProviderDecorator"

import { SideBar } from "./SideBar"

const meta = {
  title: "widgets/SideBar",
  component: SideBar,
  decorators: [ThemeProviderDecorator],
} satisfies Meta<typeof SideBar>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
