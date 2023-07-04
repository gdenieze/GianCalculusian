import { useState } from "react"
import { useForumHooks } from "../Hooks/useForumHooks"
import {useUserHooks} from '../Hooks/useUserHook'


const ForumInputs = ()=>{
    const {dispatch} = useForumHooks()
    const {user}= useUserHooks()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [error, setError] = useState('')

    

    const handleSubmit = async (e)=>{
        e.preventDefault()
        if(!user){
            setError('You must be log ine')
            return
        }

        const forum = {title, description}
        const response = await fetch('/api/forum',{
            method: 'POST',
            body: JSON.stringify(forum),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json =await response.json()
        if(!response.ok){
            setError(json.error)
        }
        if(response.ok){
            setTitle('')
            setDescription('')
            setError(null)
            console.log('new forum added')
            dispatch({type: 'CREATE_FORUM', payload: json})
        }

    }
    return(
        <form className="createForumInputs" onSubmit={handleSubmit}>
            <h2>Share your thoughts</h2>
            <p>Prove what you learn and take the challenges.</p>
            <label>Topic: </label>
            <input type='text' 
                onChange={(e)=> setTitle(e.target.value)}
                value={title} 
            />
            <label>Description: </label>
            <textarea type='text' 
                onChange={(e)=> setDescription(e.target.value)}
                value={description} 
            />
            <button>Submit</button>
            {error && <div className="error">{error}</div>}
            
        </form>
    )
}

export default ForumInputs