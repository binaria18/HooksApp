import React from 'react'
import { useFetch } from '../hooks/useFetch'

export const MultipleCustomHooks = () => {
    const { data, isLoading, hasError, error} = useFetch('https://pokeapi.co/api/v2/pokemon?limit=10')

    return (
        <>
            <h3>MultipleCustomHooks</h3>
            <ul>
                {isLoading && <li>Loading...</li>}
                {hasError && <li>{error}</li>}
                {data && data.results && data.results.map(poke => (
                    <li key={poke.name}>{poke.name}</li>
                ))}
            </ul>
        </>
    )
}

