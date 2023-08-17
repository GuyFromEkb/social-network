import { FC, useEffect, useState } from "react"

export const BugButtonForTest: FC = () => {
  const [err, setErr] = useState(false)

  useEffect(() => {
    if (err) {
      throw new Error("HA_HA_HA")
    }
  }, [err])

  return (
    <button data-testid={"bug-btn-test"} onClick={() => setErr(true)}>
      Bug Button
    </button>
  )
}
