import { useCalculator } from "../contexts/CalculatorContext"
import { evaluate } from "mathjs"

export function Equals({ children }) {
  const { dispatch, screen } = useCalculator()

  function calculate() {
    const newScreen = Array.isArray(screen) ? screen : [screen]

    if (screen.length > 0) {
      try {
        // Spojíme prvky obrazovky do jedného reťazca a vyhodnotíme výraz pomocou knižnice mathjs
        const onScreen = newScreen.join("").replace("x", "*")
        const result = evaluate(onScreen)

        // Nastavíme výsledok ako nový stav obrazovky
        dispatch({ type: "setScreen", payload: [result.toString()] })
      } catch {
        dispatch({ type: "setScreen", payload: newScreen })
      }
    }
  }

  return (
    <div className="button">
      <button className="button" value={children} onClick={calculate}>
        {children}
      </button>
    </div>
  )
}
