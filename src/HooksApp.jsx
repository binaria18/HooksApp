import './App.css'
import { CounterApp } from './01-useState/CounterApp'
import { CounterHook } from './01-useState/CounterWithCustomHook'
import { SimpleForm } from './02-useEffect/SimpleForm'
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
import { FocusScreen } from './04-useRef/FocusScreen'
import { Layout } from './05-useLayoutEffect/Layout'
import { Memorize } from './06-memos/Memorize'

function App() {
  
  return (
    <>
      <h1>Hooks app: contadores, formularios y conexión con Api</h1>
      <h2>Counters:</h2>
      <div className='row'>
        <div className='col border m-1 p-2'>
          <CounterApp />
        </div>
        <div className='col border m-1 p-2'>
          <CounterHook />
        </div>
      </div>
      <h2>Forms:</h2>
      <div className='row'>
        <div className='col border m-1 p-2'>
          <SimpleForm />
        </div>
        <div className='col border m-1 p-2'>
          <FormWithCustomHook />
        </div>
      </div>
      <div className='row'>
        <div className='col border m-1 p-2'>
          <MultipleCustomHooks />
        </div>
      </div>
      <div className='row'>
        <div className='col border m-1 p-2'>
          <FocusScreen />
        </div>
        <div className='col border m-1 p-2'>
          <Layout />
        </div>
      </div>
      <div className='row'>
        <div className='col border m-1 p-2'>
          <Memorize />
        </div>
      </div>
    </>
  )
}

export default App
