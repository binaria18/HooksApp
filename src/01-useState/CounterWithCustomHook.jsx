import { useCounter } from '../hooks/useCounter'

export const CounterHook = () => {
    const { counter, increment, decrement, reset } = useCounter()
    
    return (
        <>
            <h3>Counter app with hook</h3>
            <p>
                { counter }
            </p>
            <button onClick={() => {
                increment(1)
            }}>+1</button>
            <button onClick={() => {
                reset()
            }}>Reset</button>
            <button onClick={() => {
                decrement(1)
            }}>-1</button>
        </>
    )
}
