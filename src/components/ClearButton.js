import { useCalculator } from "../contexts/CalculatorContext"

export function ClearButton({ children }) {
  const { dispatch } = useCalculator()

  function clear() {
    dispatch({ type: "clear" })
  }

  return (
    <div>
      <button
        className="button delete-Btn"
        value={children}
        onClick={() => clear(children)}
      >
        {children}
      </button>
    </div>
  )
}
