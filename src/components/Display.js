import { useCalculator } from "../contexts/CalculatorContext"

//MARK: DISPLAY
export function Display() {
  const { screen, dispatch } = useCalculator()

  return (
    <div className="display">
      <input
        type="text"
        placeholder="0"
        value={screen.length > 1 ? screen.join("") : screen}
        onChange={(e) =>
          dispatch({ type: "setScreen", payload: e.target.value })
        }
      />
    </div>
  )
}
