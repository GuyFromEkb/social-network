import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { ErrorBoundaryScreen } from "~widgets/ErrorBoundaryScreen"

import { BugButtonForTest } from "./BugButtonForTest"
import { ErrorBoundary } from "./errorBoundary"

describe("ErrorBoundary", () => {
  test("Отрисовка fallback при ошибке App", async () => {
    render(
      <ErrorBoundary fallBack={<ErrorBoundaryScreen />}>
        <BugButtonForTest />
      </ErrorBoundary>
    )

    expect(screen.getByTestId("bug-btn-test")).toBeInTheDocument()
    expect(screen.queryByTestId("error-boundary-screen")).not.toBeInTheDocument()

    await userEvent.click(screen.getByTestId("bug-btn-test"))

    expect(screen.queryByTestId("bug-btn-test")).not.toBeInTheDocument()
    expect(screen.getByTestId("error-boundary-screen")).toBeInTheDocument()
  })
})
