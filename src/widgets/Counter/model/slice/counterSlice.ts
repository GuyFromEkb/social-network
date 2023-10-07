import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { ICounterSchema } from "../types/counterSchema"

const initialState: ICounterSchema = {
  value: 0,
}
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { actions: counterActions } = counterSlice
