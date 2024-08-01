import { useCalculator } from "../contexts/CalculatorContext"

const OPERATORS = ["+", "-", "x", "/", "%", ".", "="]
const NUMBERS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "(", ")"]
const ALLOWED_CHARACTERS = [...NUMBERS, ...OPERATORS]

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

    // console.log("First Operator:", firstOperator)
    // console.log("New Last Char:", newLastChar)

    const containsMultipleDecimals = value
      .split(/[+\-\x/%]/)
      .some((part) => part.split(".").length > 2)

    if (!value.split("").every((char) => ALLOWED_CHARACTERS.includes(char)))
      return
    if (firstOperator !== "-" && isOperator(firstOperator) && firstOperator)
      return
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
    if (e.key === "%" && screen.length > 0)
      dispatch({ type: "setScreen", payload: screen + "%x" })
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
