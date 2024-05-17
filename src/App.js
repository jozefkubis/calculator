import { useState } from "react"

export default function App() {
  const [screen, setScreen] = useState([])

  return (
    <div className="calculator">
      <Display screen={screen} setScreen={setScreen} />
      <Buttons />
    </div>
  )
}

function Display({ screen, setScreen }) {
  return (
    <div className="display">
      <input
        type="text"
        value={screen}
        onChange={(e) => setScreen(Number(e.target.value))}
      />
    </div>
  )
}

function Buttons({ screen, setScreen, children }) {
  return (
    <div className="buttons">
      <Button>C</Button>
      <Button>()</Button>
      <Button>%</Button>
      <Button>/</Button>
      <Button>7</Button>
      <Button>8</Button>
      <Button>9</Button>
      <Button>X</Button>
      <Button>4</Button>
      <Button>5</Button>
      <Button>6</Button>
      <Button>-</Button>
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
      <Button>+</Button>
      <Button>+/-</Button>
      <Button>0</Button>
      <Button>,</Button>
      <Button>=</Button>
    </div>
  )
}

function Button({ screen, setScreen, children }) {
  return (
    <div className="button">
      <button className="button" value={children}>
        {children}
      </button>
    </div>
  )
}
