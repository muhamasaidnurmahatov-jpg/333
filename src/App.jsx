import countStore from "./store/store"
function App() {
  const count = countStore(store => store.count)
  const incrementCount = countStore(s => s.incrementCount)
  const decrementCount = countStore(s => s.decrementCount)
  const resetCount = countStore(s => s.resetCount)
  const plusCount = countStore(s => s.plusCount)
  const minusCount = countStore(s => s.minusCount)

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => incrementCount()}>+</button>
      <button onClick={() => decrementCount()}>-</button>
      <button onClick={() => resetCount()}>Reset</button>
      <button onClick={() => plusCount()}>+5</button>
      <button onClick={() => minusCount()}>-5</button>
    </>
  )
}

export default App
