// import { useEffect } from "react"
import { useCalculator } from "../contexts/CalculatorContext"

export function Button({ children }) {
  const { dispatch, screen, operatorArr } = useCalculator()

  let functionsArray = ["+", "-", "x", "/", "%", "."]

  const isOperator = functionsArray.includes(children)

  function handleClick(children) {
    if (isOperator) {
      dispatch({
        type: "setOperatorArr",
        payload: [...operatorArr, children],
      })
    }

    dispatch({ type: "setScreen", payload: [...screen, children] })
  }

  return (
    <div className="button">
      <button
        className="button"
        value={children}
        onClick={() => handleClick(children)}
      >
        {children}
      </button>
    </div>
  )
}
