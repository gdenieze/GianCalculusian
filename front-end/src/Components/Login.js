import { useLogin } from '../Hooks/useLogin'
import { useState } from 'react'
import { Link }  from 'react-router-dom'
import { useUserHooks } from '../Hooks/useUserHook'

const Login = ()=>{

    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, error, isLoading} = useLogin() 
    const {user} = useUserHooks()

    const handleSubmit = async (e)=>{
        e.preventDefault()
        console.log(email,password)
        await login(email,password)
    }

    return (
        <div className='login-wrapper text-center ' >
        <form className='login' onSubmit={handleSubmit}>
            <h3>Log In</h3>
            <label>Email:</label>
            <input 
            type='email'
            onChange={(e)=>{setEmail(e.target.value)}}
            value={email}
            />
            <label>Password:</label>
            <input 
            type='password'
            onChange={(e)=>{setPassword(e.target.value)}}
            value={password}
            />
            <button disabled={isLoading}>Log in</button>
            {error && <div className='error'>{error}</div>}
            {!user && (
                <div className="create mt-3">
                   <span>Create Account:</span> <Link to='/sign-up'>Sign Up</Link>
                </div>
            )}
        </form>
        </div>
    )
}

export default Login