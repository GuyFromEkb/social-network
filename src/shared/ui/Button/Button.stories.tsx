import { Meta, StoryObj } from "@storybook/react"

import { Button, ThemeButton } from "./Button"

const meta = {
  title: "Example/Button123",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onClick: () => console.log("22"),
  },
} satisfies Meta<typeof Button>
export default meta

type Story = StoryObj<typeof meta>
export const Primary: Story = {
  args: {
    theme: ThemeButton.Clear,
    children: "GAV GAV",
  },
}
