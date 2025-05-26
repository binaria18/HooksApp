import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { useCounter } from '../hooks/useCounter'
import { LoadingMessage } from './LoadingMessage'
import { PokemonCard } from './PokemonCard'

export const MultipleCustomHooks = () => {

    const { counter, decrement, increment } = useCounter(1)

    // Cuando cambie el counter, se vuelve a ejecutar el useFetch
    let url = 'https://pokeapi.co/api/v2/pokemon/'+(counter)
    const { data, isLoading, hasError, error } = useFetch(url)
    
    return (
        <>
            <h3>MultipleCustomHooks</h3>
            <ul>
                {isLoading && <li><LoadingMessage /></li>}
                {hasError && <li>{error}</li>}
                {
                    data && !isLoading && !hasError &&
                    <PokemonCard 
                        id={data.id} 
                        name={data.name} 
                        sprites={data.sprites} />
                    
                }
            </ul>
            <button 
                className='btn btn-primary' 
                onClick={() => counter > 1 && decrement()}>
                    Anterior
            </button>
            <button 
                className='btn btn-primary' 
                onClick={() => increment()}>
                    Siguiente
            </button>
        </>
    )
}

