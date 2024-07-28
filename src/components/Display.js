import { useCalculator } from "../contexts/CalculatorContext"

export function Display() {
  const { screen, dispatch } = useCalculator()

  const newScreen = screen.length > 1 ? screen.join("") : screen

  function handleChange(e) {
    dispatch({ type: "setScreen", payload: e.target.value })
  }

  console.log(Number(newScreen))

  return (
    <div className="display">
      <input
        type="text"
        placeholder="0"
        value={newScreen}
        onChange={handleChange}
      />
    </div>
  )
}
