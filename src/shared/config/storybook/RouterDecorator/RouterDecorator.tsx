import { Decorator, Parameters } from "@storybook/react"
import { ReactNode } from "react"
import { MemoryRouterProps } from "react-router"
import { MemoryRouter } from "react-router-dom"

interface IParameters extends Parameters {
  memoryRouterProps?: MemoryRouterProps
  children?: ReactNode
}
export const RouterDecorator: Decorator<IParameters> = (Story, ctx) => {
  const { memoryRouterProps } = ctx.parameters
  return <MemoryRouter {...memoryRouterProps}>{<Story {...ctx} />}</MemoryRouter>
}

export const getRouterDecoratorParams = (memoryRouterProps?: IParameters["memoryRouterProps"]) => {
  return { memoryRouterProps }
}
