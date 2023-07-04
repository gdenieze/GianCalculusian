import { useState } from "react";
import {useUserHooks} from "./useUserHook"

export const useSignup = ()=>{
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useUserHooks()   

    const signup = async (email, password, lrn) => {
        setIsLoading (true)
        setError(null)

        const response = await fetch('/api/user/sign-up', {
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
    return { signup, error, isLoading}
}