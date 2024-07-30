import { useCalculator } from "../contexts/CalculatorContext"

const OPERATORS = ["+", "-", "x", "/", "%", "."]
// const ZERO = "0."

export function Button({ children }) {
  const { dispatch, screen } = useCalculator()

  const lastChar = screen[screen.length - 1]
  const isOperator = (char) => OPERATORS.includes(char)
  const isEndOperator = isOperator(lastChar)

  const startOperator = isOperator(children)
  const startWithOperator = screen.length === 0 && startOperator

  function handleClick() {
    if (children !== "-" && children !== "." && startWithOperator) return
    if (isEndOperator && isOperator(children)) return
    // if (children === "." && !screen.includes(".")) children = ZERO

    dispatch({ type: "setScreen", payload: [...screen, children] })
  }

  return (
    <div className="button">
      <button className="button" value={children} onClick={handleClick}>
        {children}
      </button>
    </div>
  )
}
