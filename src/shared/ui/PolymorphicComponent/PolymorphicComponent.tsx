import React from "react"

type PolymorphicComponentProps<T extends React.ElementType = "div"> = {
  component?: T
} & React.ComponentPropsWithoutRef<T>

export const PolymorphicComponent = <T extends React.ElementType>({
  component,
  ...rest
}: PolymorphicComponentProps<T>): JSX.Element => {
  const Component = component || "div"

  return <Component {...rest} />
}
