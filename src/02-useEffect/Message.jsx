import React, { useEffect } from 'react'

export const Message = () => {

    useEffect(() => {

        const onclick = () => {
            console.log('click');
        }
        window.addEventListener('click', onclick);
        return () => {
            window.removeEventListener('click', onclick);
        }
    }, []);

    return (
        <>
            <h3>Usuario ya existe</h3>
        </>
    )
}



