import { Meta, StoryObj } from "@storybook/react"

import { Modal } from "./Modal"

const meta = {
  title: "shared/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
    loki: {
      skip: true,
    },
  },
} satisfies Meta<typeof Modal>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    isOpen: true,
    children: (
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias consectetur fugiat hic
        provident quidem vero voluptate. Architecto, aut eius facilis ipsa ipsam labore nisi qui quis
        recusandae voluptate voluptates.
      </div>
    ),
  },
}
