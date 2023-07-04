import { useForumHooks } from "../Hooks/useForumHooks"
import LikeButton from '../Components/LikeButton'
import {useUserHooks} from '../Hooks/useUserHook'
import deleteIcon from '../Components/images/delete.png'
import userProfile from "../Components/userprofile.png"

const ForumDetails = ({ forum })=>{

    const {dispatch} = useForumHooks()
    const {user} = useUserHooks()
    
    const handleClick = async () =>{
        if(!user){
            return
        }
        const response = await fetch('/api/forum/' + forum._id, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${user.token}`
        }
    })
        const json = await response.json()
        if (response.ok){
            dispatch({type: 'DELETE_FORUM', payload: json})
        }
    }
    return (
        <div className="forum-details col-12">
            <div className="username">
                <div className="imgprofile">
                    <img src={userProfile} alt="profile"/>
                </div>
                <p>{user.email}</p>
            </div>
            <h4>{forum.title}</h4>
            <p>{forum.description}</p>
            <div className='delete' onClick={handleClick}><img src={deleteIcon} alt='delete'/></div>
            <LikeButton/>
        </div>
    )
}
export default ForumDetails