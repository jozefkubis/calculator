import { createContext, useContext, useReducer } from "react"
import { evaluate } from "mathjs"

const CalculatorContext = createContext()

const initialState = {
  screen: [],
}

//MARK: REDUCER
function reducer(state, action) {
  switch (action.type) {
    case "setScreen":
      return { ...state, screen: action.payload }

    case "clear":
      return initialState

    default:
      throw new Error("Invalid action")
  }
}

function CalculatorProvider({ children }) {
  const [{ screen }, dispatch] = useReducer(reducer, initialState)

  function calculate() {
    const newScreen = Array.isArray(screen) ? screen : [screen]

    if (screen.length > 0) {
      try {
        // Spojíme prvky obrazovky do jedného reťazca a vyhodnotíme výraz pomocou knižnice mathjs
        const onScreen = newScreen.join("").replace("x", "*")
        const result = evaluate(onScreen)

        // Nastavíme výsledok ako nový stav obrazovky
        dispatch({ type: "setScreen", payload: [result.toString()] })
      } catch {
        dispatch({ type: "setScreen", payload: newScreen })
      }
    }
  }

  return (
    <CalculatorContext.Provider
      value={{
        screen,
        dispatch,
        calculate,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  )
}

function useCalculator() {
  const context = useContext(CalculatorContext)
  if (context === undefined) {
    throw new Error("useCalculator must be used within a CalculatorProvider")
  }
  return context
}

export { CalculatorProvider, useCalculator }
