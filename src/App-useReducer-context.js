import { useReducer } from "react"
import { evaluate } from "mathjs"
import { Buttons } from "./components/Buttons"
import { Display } from "./components/Display"

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

//MARK: APP
export default function App() {
  // const [screen, setScreen] = useState([])
  const [{ screen }, dispatch] = useReducer(reducer, initialState)

  //MARK: HANDLERS

  //MARK: handleClick function
  function handleClick(children) {
    // setScreen([...screen, children])
    dispatch({ type: "setScreen", payload: [...screen, children] })
    // console.log(typeof screen)
  }

  //MARK: clear function
  function clear() {
    // setScreen([])
    dispatch({ type: "clear" })
  }

  //MARK: onMultiple function
  function calculate() {
    // Predpokladajme, že 'screen' obsahuje čísla a operátory ako reťazec
    // Napríklad: screen = ["12", "+", "7", "x", "3"]
    if (screen.length > 0) {
      let result
      try {
        // Spojíme prvky obrazovky do jedného reťazca a vyhodnotíme výraz pomocou knižnice mathjs
        result = evaluate(screen.join("").replace("x", "*"))
      } catch (error) {
        console.error("Chyba pri výpočte:", error)
        result = "Chyba"
      }

      // Nastavíme výsledok ako nový stav obrazovky
      // setScreen([result.toString()])
      dispatch({ type: "setScreen", payload: [result.toString()] })
    }
  }

  return (
    <div className="calculator">
      <Display screen={screen} dispatch={dispatch} />
      <Buttons
        onHandleClick={handleClick}
        screen={screen}
        clear={clear}
        onCalculate={calculate}
      />
    </div>
  )
}
