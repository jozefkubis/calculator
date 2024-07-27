import { useCalculator } from "../contexts/CalculatorContext"

export function Button({ children }) {
  const { dispatch, screen } = useCalculator()

  const lastChar = screen[screen.length - 1]
  const isOperator = ["+", "-", "x", "/", "%", "."].includes(children)
  const isLastCharOperator = ["+", "-", "x", "/", "%", "."].includes(lastChar)

  const startOperator = ["+", "x", "/", "%", "."].includes(children)
  const startWithOperator = screen.length === 0 && startOperator

  function handleClick() {
    if (startWithOperator) return
    if (isOperator && isLastCharOperator) return

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
