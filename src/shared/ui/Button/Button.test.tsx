import { getByText, render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { Button } from "./Button"

test("loads and displays greeting", async () => {
  // ARRANGE
  render(<Button>Click Me</Button>)

  // ACT
  // await userEvent.click(screen.getByText("Load Greeting"))
  // await screen.findByRole("heading")

  expect(screen.getByText("Click Me")).toBeInTheDocument()

  // await waitFor(() => {
  //   expect(getByText("the lion king")).toBeInTheDocument()
  // })
  // // ASSERT
  // expect(screen.getByRole("heading")).toHaveTextContent("hello there")
  // expect(screen.getByRole("button")).toBeDisabled()
})
