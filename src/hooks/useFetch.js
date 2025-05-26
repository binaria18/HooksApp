import React, { useEffect, useState } from 'react'

export const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError:false,
        error: null,
    })

    useEffect(() => {
        setState({
            ...state,
            isLoading: true
        })
        getFetch()
    }, [url])

    const getFetch = async() => {

        await new Promise (resolve => setTimeout(resolve, 1500)) //pausa

        try {
            const resp = await fetch(url)
            const data = await resp.json()
            setState({
                data: data,
                isLoading: false,
                hasError: false,
                error: null
            })
        } catch (error) {
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                error: error.message
            })
        }
    }

    return{
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
        error: state.error
    }
}

