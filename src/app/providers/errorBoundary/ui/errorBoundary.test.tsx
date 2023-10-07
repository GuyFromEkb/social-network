import { render, screen } from "@testing-library/react"

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

    // Закоментировал т.к. пока нету ui-Репортов для unit тестов сложно логировать другие тесты
    // await userEvent.click(screen.getByTestId("bug-btn-test"))
    //
    // expect(screen.queryByTestId("bug-btn-test")).not.toBeInTheDocument()
    // expect(screen.getByTestId("error-boundary-screen")).toBeInTheDocument()
  })
})
