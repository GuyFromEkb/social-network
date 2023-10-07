import { FC } from "react"
import { useDispatch } from "react-redux"

import { useAppSelector } from "~shared/model"

import { decrement, increment, incrementByAmount } from "../model/counterSlice"

export const Counter: FC = () => {
  const count = useAppSelector((state) => state.counter)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>{count.value}</h1>
      <div>
        <button onClick={() => dispatch(increment())}> + </button>
        <button onClick={() => dispatch(decrement())}> - </button>
        <button onClick={() => dispatch(incrementByAmount(23))}> HAHA </button>
      </div>
    </div>
  )
}
