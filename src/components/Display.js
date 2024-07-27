import { useCalculator } from "../contexts/CalculatorContext"

export function Display() {
  const { screen, dispatch, operatorArr } = useCalculator()

  console.log(operatorArr)

  function offOperator() {
    if (screen.length > 0 || operatorArr.length < 1) {
      return screen.join("")
    } else {
      return screen
    }
  }

  return (
    <div className="display">
      <input
        type="text"
        placeholder="0"
        value={offOperator()}
        onChange={(e) =>
          dispatch({ type: "setScreen", payload: e.target.value })
        }
      />
    </div>
  )
}
