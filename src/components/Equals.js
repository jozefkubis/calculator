import { useCalculator } from "../contexts/CalculatorContext"
import { evaluate } from "mathjs"

export function Equals({ children }) {
  const { dispatch, screen } = useCalculator()

  function calculate() {
    // Predpokladajme, že 'screen' obsahuje čísla a operátory ako reťazec
    // Napríklad: screen = ["12", "+", "7", "x", "3"]
    if (screen.length > 0) {
      let result
      try {
        // Spojíme prvky obrazovky do jedného reťazca a vyhodnotíme výraz pomocou knižnice mathjs
        result = evaluate(screen.join("").replace("x", "*"))
      } catch (error) {
        console.error("Chyba pri výpočte:", error)
        result = "Chyba"
      }

      // Nastavíme výsledok ako nový stav obrazovky
      dispatch({ type: "setScreen", payload: [result.toString()] })
    }
  }

  return (
    <div className="button">
      <button className="button" value={children} onClick={() => calculate()}>
        {children}
      </button>
    </div>
  )
}
