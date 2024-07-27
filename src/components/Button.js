import { useCalculator } from "../contexts/CalculatorContext"

export function Button({ children }) {
  const { dispatch, screen, functionsArr } = useCalculator()

  function handleClick(children) {
    const functionsArray = ["+", "-", "x", "/", "%", "."]

    const isOperator = functionsArray.includes(children)

    if (isOperator) {
      dispatch({
        type: "setFunctionsArr",
        payload: [...functionsArr, children],
      })
    }

    if (functionsArr.length > 0) {
      // const x = functionsArr
      console.log(children)
    }

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
