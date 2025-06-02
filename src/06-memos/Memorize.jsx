import React from 'react'
import { useCounter } from '../hooks/useCounter';
import { Small } from './Small';

export const Memorize = () => {
    const { counter, increment } = useCounter(10);
    const [show, setShow] = React.useState(true);

    return (
        <>
            <h1>Counter <Small value={ counter } /></h1>
            <button onClick={ () => increment() }>+1</button>
            <button 
                className='btn btn-outline-primary m-2'
                onClick={ () => setShow(!show) }>
                Show/Hide {JSON.stringify(show)}
            </button>
        </>
    )
}
