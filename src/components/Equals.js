//MARK: EQUALS

export function Equals({ children, onCalculate }) {
  return (
    <div className="button">
      <button className="button" value={children} onClick={() => onCalculate()}>
        {children}
      </button>
    </div>
  )
}
