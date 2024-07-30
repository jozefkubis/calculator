import { useCalculator } from "../contexts/CalculatorContext"

export function Display() {
  const { screen, dispatch, calculate } = useCalculator()

  const onScreen = Array.isArray(screen) ? screen : [screen]
  const newScreen = onScreen.length > 0 ? onScreen.join("") : onScreen

  function handleChange(e) {
    dispatch({ type: "setScreen", payload: e.target.value })
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") calculate()
    if (e.key === "Escape" || e.key === "Delete") dispatch({ type: "clear" })
  }

  console.log(screen)
  console.log(onScreen)
  console.log(newScreen)

  return (
    <div className="display">
      <input
        type="text"
        placeholder="0"
        value={newScreen}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  )
}
