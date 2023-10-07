import { combineReducers } from "@reduxjs/toolkit"

import { counterSlice } from "~widgets/Counter"

import { StateSchema } from "./types"

export const rootReducer = combineReducers<StateSchema>({
  [counterSlice.name]: counterSlice.reducer,
})
