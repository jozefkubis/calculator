import { useCalculator } from "../contexts/CalculatorContext"

export function Equals({ children }) {
  const { calculate } = useCalculator()

  function handleClick() {
    calculate()
  }

  return (
    <div className="button">
      <button className="button" value={children} onClick={handleClick}>
        {children}
      </button>
    </div>
  )
}
