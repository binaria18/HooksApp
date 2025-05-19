import { useState } from 'react'
export function CounterApp() {
    const [counters, setCounters] = useState({
        count1: 10,
        count2: 20,
        count3: 30
    })
    
    return (
        <>
            <h3>Simple counter app</h3>
            <p>
                Counter 1: { counters.count1 } <br/>
                Counter 2: { counters.count2 } <br/>
                Counter 3: { counters.count3 } <br/>
            </p>
            <button onClick={() => {
                setCounters({
                ...counters,
                count1: counters.count1+1
                })
            }}>+1</button>
        </>
    )
}

