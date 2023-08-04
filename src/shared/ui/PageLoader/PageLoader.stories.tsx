import { Meta, StoryObj } from "@storybook/react"

import { PageLoader } from "./PageLoader"

const meta = {
  title: "shared/ui/PageLoader",
  component: PageLoader,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof PageLoader>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
