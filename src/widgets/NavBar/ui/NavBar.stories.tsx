import { Meta, StoryObj } from "@storybook/react"

import { getRouterDecoratorParams, RouterDecorator } from "~shared/config/storybook/RouterDecorator"

import { NavBar } from "./NavBar"

const meta = {
  title: "widgets/NavBar",
  component: NavBar,
  decorators: [RouterDecorator],
  parameters: {
    ...getRouterDecoratorParams({
      initialEntries: ["/"],
    }),
  },
} satisfies Meta<typeof NavBar>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
