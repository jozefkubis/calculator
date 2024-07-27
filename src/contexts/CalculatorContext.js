import { createContext, useContext, useReducer } from "react"

const CalculatorContext = createContext()

const initialState = {
  screen: [],
  operatorArr: [],
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

  return (
    <CalculatorContext.Provider
      value={{
        screen,
        dispatch,
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
