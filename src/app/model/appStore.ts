import { configureStore } from "@reduxjs/toolkit"

import { counterSlice } from "~widgets/Counter"

export const appStore = configureStore({
  reducer: {
    [counterSlice.name]: counterSlice.reducer,
  },
})

export type AppRootState = ReturnType<typeof appStore.getState>
export type AppDispatch = typeof appStore.dispatch
