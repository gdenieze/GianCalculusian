import { useState } from 'react'
import { useSignup } from '../Hooks/useSignup'
import { Link }  from 'react-router-dom'
import { useUserHooks } from '../Hooks/useUserHook'


const Signup = ()=>{
    const {user} = useUserHooks()
    const [email,setEmail] = useState('')
    // const [lrn,setLRN] = useState('')
    const [password, setPassword] = useState('')
    const {signup,error,isLoading} = useSignup()
   

    const handleSubmit = async (e)=>{
        e.preventDefault()
        console.log(email,password)
        await signup(email,password)
        
    }

    return (
        <div className='sign-up-wrapper  text-center'>
        <form className='Sign-up' onSubmit={handleSubmit}>
            <h3>Sign up</h3>
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
             {/* <label>LRN:</label> */}
            {/* <input 
            type='text' 
            onChange={(e)=>{setLRN(e.target.value)}}
            value={lrn}
            /> */}
            <div className='caution'>
                <p>Symbols, numbers, and capital letters are required in the password.</p>
            </div>
            <button disabled= {isLoading}>Sign Up</button>
            {error && <div className='error'>{error}</div>}
            {!user && (
                <div className="create mt-3">
                   <span>Already have account:</span> <Link to='/login'>Login</Link>
                </div>
            )}
           
        </form>
        </div>
    )
}

export default Signup