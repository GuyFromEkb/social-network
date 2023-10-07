import { FC } from "react"

import { useAppDispatch, useAppSelector } from "~shared/model"

import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue"
import { counterActions } from "../model/slice/counterSlice"

export const Counter: FC = () => {
  const count = useAppSelector(getCounterValue)
  const dispatch = useAppDispatch()
  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={() => dispatch(counterActions.increment())}> + </button>
        <button onClick={() => dispatch(counterActions.decrement())}> - </button>
        <button onClick={() => dispatch(counterActions.incrementByAmount(20))}> ADD 20 </button>
      </div>
    </div>
  )
}
