import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
// import deleteIcon from '../Components/images/delete.png'
// import {useUserHooks} from '../Hooks/useUserHook'




function UserAdmin({user}) {
  // const {dispatch} = useUserHooks
//   const handleClick = async () =>{
    
//     const response = await fetch('/admin/users' + user._id, {
//     method: 'DELETE' 
// })
//     const json = await response.json()
//     if (response.ok){
//         dispatch({type: 'DELETE_USER', payload: json})
//     }
// }

  const[userlist,setUserlist]= useState([])

  useEffect(()=>{
    Axios.get('http://localhost:3000/admin/users').then((res)=>{
      setUserlist(res.data)
    })
  },[])

  

 


  return (
   <>
    <div className='container'>
    <div className="headeradmin">
              <Link to='/admin'><div className='header-wrapper'>Forum List</div></Link>
              <Link to='/admin/users'><div className='header-wrapper'>User List</div></Link>
      </div>
      {userlist.map((val,key)=>(
        <>
         <div key={key} className='userdata'>
          <p>{val.email}</p>
          <p>{val.password}</p>
         </div>
          
          </>
      ))}
    </div>
   </>
  )
}

export default UserAdmin