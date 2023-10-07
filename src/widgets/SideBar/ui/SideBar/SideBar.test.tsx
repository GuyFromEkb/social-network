import cls from "./sideBar.module.scss"
import { fireEvent, screen } from "@testing-library/react"

import { componentRender } from "~shared/lib/tests/componentRender"

import { SideBar } from "./SideBar"

describe("Sidebar", () => {
  test("свернуть Sidebar", async () => {
    componentRender(<SideBar />)
    const sideBar = screen.getByTestId("sidebar")
    const sideBarToggleBtn = screen.getByTestId("sidebar-button")

    expect(sideBar).toBeInTheDocument()
    expect(sideBar).not.toHaveClass(cls.collapsed)

    fireEvent.click(sideBarToggleBtn)
    expect(sideBar).toHaveClass(cls.collapsed)
  })
})
