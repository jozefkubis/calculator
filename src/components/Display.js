//MARK: COMPONENTS
//MARK: DISPLAY
export function Display({ screen, dispatch }) {
  return (
    <div className="display">
      <input
        type="text"
        placeholder="0"
        value={screen.length > 1 ? screen.join("") : screen}
        // onChange={(e) => setScreen(e.target.value)}
        onChange={(e) =>
          dispatch({ type: "setScreen", payload: e.target.value })
        }
      />
    </div>
  )
}
