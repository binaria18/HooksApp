import React, { useRef } from 'react'

export const FocusScreen = () => {

    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.select();
        // inputRef.current.focus(); // If you want to focus the input instead of selecting its content
    }

    return (
        <>
            <h1>Focus Screen</h1>
            <input
                type="text"
                className="form-control"
                placeholder="Ingrese su nombre"
                ref={inputRef}
                // This will focus the input when the component mounts
                autoFocus
            />

            <button 
                className="btn btn-primary mt-2"
                onClick={handleClick}>
                Set Focus
            </button>
        </>
    )
}

