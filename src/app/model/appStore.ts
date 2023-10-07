import { configureStore } from "@reduxjs/toolkit"

import { rootReducer } from "./rootReducer"
import { StateSchema } from "./types"

export const createAppStore = (initialState?: StateSchema) => {
  return configureStore({
    reducer: rootReducer,
    devTools: __ENV_IS_DEV__,
    preloadedState: initialState,
  })
}

export const appStore = createAppStore()

export type AppStore = ReturnType<typeof createAppStore>
