import { Buttons } from "./components/Buttons"
import { Display } from "./components/Display"
import { CalculatorProvider } from "./contexts/CalculatorContext"

//MARK: APP
export default function App() {
  return (
    <div className="calculator">
      <CalculatorProvider>
        <Display />
        <Buttons />
      </CalculatorProvider>
    </div>
  )
}
