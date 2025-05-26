import React from 'react'

export const PokemonCard = ({ id, name, sprites }) => {
    return (
        <>
            <h2>{id}-{name}</h2>
            <img src={sprites.front_default} alt={name} />
            <img src={sprites.front_shiny} alt={name} />
            <img src={sprites.back_default} alt={name} />
            <img src={sprites.back_shiny} alt={name} />
        </>
    )
}
