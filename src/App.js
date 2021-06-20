import './App.css';

function App({ state, store, increment, decrement }) {

  const handleIncrement = () => {
    store.dispatch(increment());
  }

  const handleDecrement = () => {
    store.dispatch(decrement());
  }

  return (
    <section>
      <h1>{state}</h1>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </section>
  )
}

export default App;
