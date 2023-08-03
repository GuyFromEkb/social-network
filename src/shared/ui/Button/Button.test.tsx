import { render, screen } from "@testing-library/react"

import { Button, ThemeButton } from "./Button"

describe("Button", () => {
  test("render in the Doc", async () => {
    render(<Button>Click Me</Button>)

    expect(screen.getByTestId("app-button")).toBeInTheDocument()
  })

  test("with Theme class", () => {
    render(<Button theme={ThemeButton.Clear}>Click Me</Button>)

    expect(screen.getByTestId("app-button").className.includes(ThemeButton.Clear, 2)).toBeTruthy()
  })
})
