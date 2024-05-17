import { useState } from "react"

export default function App() {
  const [screen, setScreen] = useState([])

  function handleClick(children) {
    setScreen([...screen, children])
  }

  function clear() {
    setScreen([])
  }

  return (
    <div className="calculator">
      <Display screen={screen} setScreen={setScreen} />
      <Buttons onHandleClick={handleClick} clear={clear} screen={screen} />
    </div>
  )
}

function Display({ screen, setScreen }) {
  return (
    <div className="display">
      <input
        type="text"
        value={screen.length > 1 ? screen.join("") : screen}
        onChange={(e) => setScreen(Number(e.target.value))}
      />
    </div>
  )
}

function Buttons({ onHandleClick, clear, screen }) {
  return (
    <div className="buttons">
      <Button clear={clear}>C</Button>
      <Button onHandleClick={onHandleClick}>()</Button>
      <Button onHandleClick={onHandleClick}>%</Button>
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
      <Button onHandleClick={onHandleClick}>+/-</Button>
      <Button onHandleClick={onHandleClick}>0</Button>
      <Button onHandleClick={onHandleClick}>,</Button>
      <Equals screen={screen}>=</Equals>
    </div>
  )
}

function Button({ children, onHandleClick, clear }) {
  return (
    <div className="button">
      <button
        className="button"
        value={children}
        onClick={() => (children !== "C" ? onHandleClick(children) : clear())}
      >
        {children}
      </button>
    </div>
  )
}

function Equals({ children, screen }) {
  return (
    <div className="button">
      <button className="button" value={children}>
        {children}
      </button>
      {console.log(screen)}
    </div>
  )
}
