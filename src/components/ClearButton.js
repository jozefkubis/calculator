//MARK: CLEARBUTTON

export function ClearButton({ children, clear }) {
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
