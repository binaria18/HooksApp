import React, { useEffect } from 'react'
import { Message } from './Message'
import { useForm } from '../hooks/useForm'

export const FormWithCustomHook = () => {
    
    const { myform, handleInputChange, username, email, password, resetForm } = useForm({
        username: '',
        email: '',
        password: ''
    });

    ///const { username, email, password } = myform;

    useEffect(() => {
        console.log('useEffect');
    }, [myform]);

    return (
        <>
            <h3>Form - custom hook</h3>
            <hr />
            <input
                type="text"
                className="form-control mb-2"
                placeholder="Username"
                name="username"
                id="username"
                value={username}
                onChange={handleInputChange}
            />
            <input
                type="email"
                className="form-control mb-2"
                placeholder="test@test.com"
                name="email"
                id="email"
                value={email}
                onChange={handleInputChange}
            />
            <input
                type="password"
                className="form-control mb-2"
                placeholder="password"
                name="password"
                id="password"
                value={password}
                onChange={handleInputChange}
            />
            <button onClick={ resetForm }>Reset</button>

            {
                console.log(username, email, password)
            }
            
            {`${password} - ${username} - ${email}`}
            {(username === 'Marta' || email === 'test@test.com') && <Message />}
        </>
    )
}