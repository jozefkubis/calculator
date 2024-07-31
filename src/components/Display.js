import { useCalculator } from "../contexts/CalculatorContext"

const OPERATORS = ["+", "-", "x", "/", "%", ".", "="]

export function Display() {
  const { screen, dispatch, calculate } = useCalculator()

  const onScreen = Array.isArray(screen) ? screen : [screen]
  const newScreen = onScreen.length > 0 ? onScreen.join("") : onScreen

  const lastChar = newScreen[newScreen.length - 1]
  const isOperator = (char) => OPERATORS.includes(char)
  const isEndOperator = isOperator(lastChar)

  function handleChange(e) {
    const value = e.target.value
    const newLastChar = value[value.length - 1]
    const firstOperator = value[0]

    const containsMultipleDecimals = value
      .split(/[+\-\x/%]/)
      .some((part) => part.split(".").length > 2)

    if (firstOperator !== "-" && isOperator(firstOperator)) return
    if (isEndOperator && isOperator(newLastChar)) return
    if (containsMultipleDecimals) return

    dispatch({ type: "setScreen", payload: value })
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" || e.key === "=") calculate()
    if (e.key === "Escape" || e.key === "Delete") dispatch({ type: "clear" })
    if (e.key === "." && screen.length === 0)
      dispatch({ type: "setScreen", payload: "0." })
    if (e.key === "=") e.preventDefault()
  }

  return (
    <div className="display">
      <input
        type="text"
        placeholder="0"
        value={newScreen}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  )
}
