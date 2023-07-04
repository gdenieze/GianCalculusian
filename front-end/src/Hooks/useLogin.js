import { useState } from "react";
import {useUserHooks} from "./useUserHook"

export const useLogin = ()=>{
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useUserHooks()   

    const login = async (email, password,lrn) => {
        setIsLoading (true)
        setError(null)

        const response = await fetch('/api/user/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email,password,lrn})
        })
        const json =await response.json()

        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }
        if(response.ok){
            //save to localstorage
            localStorage.setItem('user', JSON.stringify(json))

            //update authencontext
            dispatch({type: 'LOGIN',payload: json})
            setIsLoading(false)

        }
    }
    return { login, error, isLoading}
}