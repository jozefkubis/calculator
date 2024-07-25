import { useState } from "react"
import { evaluate } from "mathjs"

//MARK: APP
export default function App() {
  const [screen, setScreen] = useState([])

  //MARK: HANDLERS

  //MARK: handleClick function
  function handleClick(children) {
    setScreen([...screen, children])
    // console.log(typeof screen)
  }

  //MARK: clear function
  function clear() {
    setScreen([])
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
      setScreen([result.toString()])
    }
  }

  return (
    <div className="calculator">
      <Display screen={screen} setScreen={setScreen} />
      <Buttons
        onHandleClick={handleClick}
        screen={screen}
        clear={clear}
        onCalculate={calculate}
      />
    </div>
  )
}

//MARK: COMPONENTS

//MARK: DISPLAY
function Display({ screen, setScreen }) {
  return (
    <div className="display">
      <input
        type="text"
        placeholder="0"
        value={screen.length > 1 ? screen.join("") : screen}
        onChange={(e) => setScreen(e.target.value)}
      />
    </div>
  )
}

//MARK: BUTTONS
function Buttons({ onHandleClick, screen, clear, onCalculate }) {
  return (
    <div className="buttons">
      <ClearButton clear={clear}>C</ClearButton>
      <Button onHandleClick={onHandleClick}>(</Button>
      <Button onHandleClick={onHandleClick}>)</Button>
      <Button onHandleClick={onHandleClick}>/</Button>
      <Button onHandleClick={onHandleClick}>7</Button>
      <Button onHandleClick={onHandleClick}>8</Button>
      <Button onHandleClick={onHandleClick}>9</Button>
      <Button onHandleClick={onHandleClick}>x</Button>
      <Button onHandleClick={onHandleClick}>4</Button>
      <Button onHandleClick={onHandleClick}>5</Button>
      <Button onHandleClick={onHandleClick}>6</Button>
      <Button onHandleClick={onHandleClick}>-</Button>
      <Button onHandleClick={onHandleClick}>1</Button>
      <Button onHandleClick={onHandleClick}>2</Button>
      <Button onHandleClick={onHandleClick}>3</Button>
      <Button onHandleClick={onHandleClick}>+</Button>
      <Button onHandleClick={onHandleClick}>%</Button>
      <Button onHandleClick={onHandleClick}>0</Button>
      <Button onHandleClick={onHandleClick}>.</Button>
      <Equals onCalculate={onCalculate} screen={screen}>
        =
      </Equals>
    </div>
  )
}

//MARK: BUTTON
function Button({ children, onHandleClick }) {
  return (
    <div className="button">
      <button
        className="button"
        value={children}
        onClick={() => onHandleClick(children)}
      >
        {children}
      </button>
    </div>
  )
}

//MARK: CLEARBUTTON
function ClearButton({ children, clear }) {
  return (
    <div className="button">
      <button
        className="button"
        value={children}
        onClick={() => clear(children)}
      >
        {children}
      </button>
    </div>
  )
}

//MARK: EQUALS
function Equals({ children, onCalculate }) {
  return (
    <div className="button">
      <button className="button" value={children} onClick={() => onCalculate()}>
        {children}
      </button>
    </div>
  )
}
