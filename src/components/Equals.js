import { useCalculator } from "../contexts/CalculatorContext"

export function Equals({ children }) {
  const { calculate } = useCalculator()

  function handleClick() {
    calculate()
  }

  return (
    <div>
      <button className="button equal" value={children} onClick={handleClick}>
        {children}
      </button>
    </div>
  )
}
