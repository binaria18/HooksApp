import React, { useRef, useLayoutEffect } from 'react'

export const PokemonCard = ({ id, name, sprites }) => {

    const h2Ref = useRef();

    useLayoutEffect(() => {
        h2Ref.current.style.color = 'red'
        const { width, height } = h2Ref.current.getBoundingClientRect();
        console.log(`El ancho del título es: ${width}px y la altura es: ${height}px`);
    }, [name])

    return (
        <>
            <h2 ref={h2Ref}>{id}-{name}</h2>
            <img src={sprites.front_default} alt={name} />
            <img src={sprites.front_shiny} alt={name} />
            <img src={sprites.back_default} alt={name} />
            <img src={sprites.back_shiny} alt={name} />
        </>
    )
}
