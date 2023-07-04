import {useEffect} from 'react'
import ForumDetails from '../Components/ForumDetails'
import ForumInputs from '../Components/ForumInputs'
import { useForumHooks } from '../Hooks/useForumHooks'
import {useUserHooks} from '../Hooks/useUserHook'


const Home = ()=>{
    const {forum, dispatch } = useForumHooks()
    const {user} = useUserHooks()
    

    useEffect(()=>{
        const fetchForums = async ()=>{
            const response = await fetch('/api/forum',{
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json()
            if (response.ok){
                dispatch({type: 'SET_FORUM', payload: json})
            }
        }
        if(user){
            fetchForums()
        }
  
      
    }, [dispatch, user]) 
    return(
        <div className="home">
            <div className="container">
                <div className='row'>
                    <div className='forum col-sm-12 col-md-6'>
                        <div className='forum-input'>
                            <ForumInputs/>
                        </div>
                    </div>
                    <div className='forum col-sm-12 col-md-6'>
                        {forum && forum.map((forums)=>(
                            <ForumDetails key={forums._id} forum ={forums}/>
                        ))}
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Home