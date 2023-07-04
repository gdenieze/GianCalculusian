import React from 'react'
import { useEffect } from 'react'
import Adminforum from '../Components/Adminforum'
import { useForumHooks } from '../Hooks/useForumHooks'
import {useUserHooks} from '../Hooks/useUserHook'
import { Link } from 'react-router-dom'


function Admin() {
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

  // const [workouts, setWorkout] = useState(null)

  // useEffect(()=>{
  //   const fetchData = async()=>{
  //     const response = await fetch('/api/forum')
  //     const json = await response.json()

  //     if(response.ok){
  //       setWorkout(json)
  //     }
  //   }
  //   fetchData()
  // },[])
  return (
    <div className='forumadmin container '>
     <div className="headeradmin">
              <div className='header-wrapper'>Forum List</div>
              <Link to='/admin/users'><div className='header-wrapper'>User List</div></Link>
      </div>
            
      {forum && forum.map((forums)=>(
          <Adminforum key={forums._id} forum ={forums}/>
      ))}
    </div>
  )
}

export default Admin