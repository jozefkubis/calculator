import { useCalculator } from "../contexts/CalculatorContext"

export function Display() {
  const { screen, dispatch, operatorArr } = useCalculator()

  console.log(operatorArr)

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
