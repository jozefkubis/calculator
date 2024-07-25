export function Button({ children, onHandleClick }) {
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
