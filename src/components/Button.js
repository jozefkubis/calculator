import { useCalculator } from "../contexts/CalculatorContext"

export function Button({ children }) {
  const { dispatch, screen } = useCalculator()

  function handleClick(children) {
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
