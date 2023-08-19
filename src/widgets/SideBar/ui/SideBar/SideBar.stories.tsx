import { Meta, StoryObj } from "@storybook/react"

import { RouterDecorator } from "~shared/config/storybook/RouterDecorator"
import { ThemeProviderDecorator } from "~shared/config/storybook/ThemeProviderDecorator"

import { SideBar } from "./SideBar"

const meta = {
  title: "widgets/SideBar",
  component: SideBar,
  decorators: [ThemeProviderDecorator, RouterDecorator],
} satisfies Meta<typeof SideBar>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
