import { useCalculator } from "../contexts/CalculatorContext"

export function ClearButton({ children }) {
  const { dispatch } = useCalculator()

  function clear() {
    dispatch({ type: "clear" })
  }

  return (
    <div className="button">
      <button
        className="button"
        value={children}
        onClick={() => clear(children)}
      >
        {children}
      </button>
    </div>
  )
}
