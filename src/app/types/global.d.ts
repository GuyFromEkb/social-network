declare module "*.scss" {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames
  export = classNames
}

declare module "*.svg" {
  import React = require("react")
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
  export default ReactComponent
}

declare module "*.jpg"
declare module "*.jpeg"
declare module "*.png"
declare module "*.json"

//env variables
declare const __ENV_IS_DEV__: boolean
declare const __ENV_GITHUB_REPO_NAME__: string | undefined

//⚠️ FSD hack redux infering types
declare type AppRootState = import("../model/types").AppRootState
declare type AppDispatch = import("../model/types").AppDispatch
