import React from 'react'
import { useState } from 'react'

export const useForm = ( initialForm = {} ) => {

    const [myform, setform] = useState(initialForm);
    
    const handleInputChange = (e) => {
        setform({
            ...myform, // Mantiene los valores actuales
            [e.target.name]: e.target.value // Cambia el valor del input que se está modificando
        });
    }
    const resetForm = () => {
        setform(initialForm);
    }

    return {
        ...myform,
        myform,
        handleInputChange,
        resetForm
    }
}


