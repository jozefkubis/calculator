export default function App() {
  return (
    <div className="caluculator">
      <Display />
      <Buttons />
    </div>
  )
}

function Display() {
  return <div className="display"></div>
}

function Buttons() {
  return <div className="buttons"></div>
}
