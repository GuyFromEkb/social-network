import React, { ErrorInfo, ReactNode } from "react"

interface IErrorBoundaryProps {
  children: ReactNode
  fallBack: ReactNode
}
interface IState {
  hasError: boolean
}

export class ErrorBoundary extends React.Component<IErrorBoundaryProps, IState> {
  constructor(props: IErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(_error: Error) {
    return { hasError: true }
  }

  componentDidCatch(_error: Error, _info: ErrorInfo) {}

  render() {
    const { hasError } = this.state
    const { fallBack, children } = this.props
    if (hasError) {
      return fallBack
    }

    return children
  }
}
