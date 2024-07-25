import { Equals } from "./Equals"
import { ClearButton } from "./ClearButton"
import { Button } from "./Button"

//MARK: COMPONENTS
//MARK: BUTTONS
export function Buttons({ onHandleClick, screen, clear, onCalculate }) {
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
