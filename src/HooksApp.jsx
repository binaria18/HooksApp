import './App.css'
import { CounterApp } from './01-useState/CounterApp'
import { CounterHook } from './01-useState/CounterWithCustomHook'

function App() {
  
  return (
    <>
      <h1>Hooks app</h1>
      <h2>Counters:</h2>
      <hr/>
      <CounterApp />
      <hr/>
      <CounterHook />
    </>
  )
}

export default App
