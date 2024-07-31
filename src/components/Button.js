import { useCalculator } from "../contexts/CalculatorContext"

const ZERO = "0."
const OPERATORS = ["+", "-", "x", "/", "%", "."]

export function Button({ children }) {
  const { dispatch, screen } = useCalculator()

  const lastChar = screen[screen.length - 1]
  const isOperator = (char) => OPERATORS.includes(char)
  const isEndOperator = isOperator(lastChar)

  const startOperator = isOperator(children)
  const startWithOperator = screen.length === 0 && startOperator

  function handleClick() {
    // Ak je prvý znak operátor a obrazovka je prázdna, vráti sa
    if (children !== "-" && children !== "." && startWithOperator) return

    // Ak je posledný znak operátor a nový znak je tiež operátor, vráti sa
    if (isEndOperator && isOperator(children)) return

    // Ak je nový znak desatinná bodka a obrazovka je prázdna, nastaví sa na "0."
    if (children === "." && screen.length === 0) {
      dispatch({ type: "setScreen", payload: ZERO })
      return
    }

    // Kontrola viacnásobných desatinných bodiek
    const newScreen = [...screen, children].join("")
    const containsMultipleDecimals = newScreen
      .split(/[+\-\x/%]/)
      .some((part) => part.split(".").length > 2)

    if (containsMultipleDecimals) return

    dispatch({ type: "setScreen", payload: newScreen })
  }

  return (
    <div>
      <button className="button" value={children} onClick={handleClick}>
        {children}
      </button>
    </div>
  )
}
