import type { ICounterSchema } from "~widgets/Counter"

import type { AppStore } from "./appStore"

export type StateSchema = {
  counter: ICounterSchema
}

export type AppRootState = ReturnType<AppStore["getState"]>
export type AppDispatch = AppStore["dispatch"]
