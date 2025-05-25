import React, { useEffect } from 'react'
import { useState } from 'react'
import { Message } from './Message'

export const SimpleForm = () => {
    const [formulario, setform] = useState({
        username1: 'Usuario',
        email1: 'Email'
    });
    const { username1, email1 } = formulario;
    const handleInputChange = (e) => {
        setform({
            ...formulario, // Mantiene los valores actuales
            [e.target.name]: e.target.value // Cambia el valor del input que se está modificando
        });
    }
    useEffect(() => {
        //console.log('formulario cambiado');
    }, [formulario]);

    return (
        <>
            <h3>Formulario simple</h3>
            <hr />
            <input
                type="text"
                className="form-control mb-2"
                placeholder="Username"
                name="username1"
                //value={username}
                onChange={handleInputChange}
            />
            <input
                type="email"
                className="form-control mb-2"
                placeholder="test@test.com"
                name="email1"
                //value={email}
                onChange={handleInputChange}
            />
            {
                (username1 === 'Marta' || email1 === 'test@test.com') && <Message />
            }
        </>
    )
}