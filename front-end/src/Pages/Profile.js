


import React, { useState } from 'react'
import userProfile from '../Components/userprofile.png'
import {useUserHooks} from '../Hooks/useUserHook'
// import axios from 'axios'

function Profile() {
    const {user} = useUserHooks()
    
    // const details = details.details
    // console.log(details.details)
    const [name, setName]=useState('')
    const [lrn, setLRN]=useState('')
    const [section, setSection]=useState('')
    const [descr, setDescr]=useState('')
    const [pending, setPending] =useState(false)

    // const [details, setDetails] =useState({})
    // useEffect(()=>{
    //     axios.get('http://localhost:3000/profile')
    //     .then(res=>{
    //         console.log(res)
    //         setDetails(res.data)
    //     })
    //     .catch(err=>{
    //         console.log(err)
    //     })
    // })



    const handleSubmit = (e) =>{
        e.preventDefault( )
        const details = {name, section, descr};
        setPending(true)

        fetch('http://localhost:3000/profile', {
            method: 'POST', 
            headers: {'Content-type': "application/json"},
            body: JSON.stringify(details)
        }).then(()=>{
            console.log('details added to the profile page')
            setPending(false)
        })
    }
  return (
    <div className='container'>
        <div className='row mt-5'>
            <div className='col-4'>
            <form onSubmit={handleSubmit} className='profile-inputs'>
            <label>Name:</label>
            <input 
            type='text'
            required
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />
            <label>Student-Number:</label>
            <input 
            type='text'
            required
            value={lrn}
            onChange={(e)=>setLRN(e.target.value)}
            />
            <label>Course:</label>
            <input 
            type='text'
            required
            value={section}
            onChange={(e)=>setSection(e.target.value)}
            />
            <label>Description:</label>
            <input 
            type='text'
            required
            value={descr}
            onChange={(e)=>setDescr(e.target.value)}
            />
            {!pending && <button>Done</button>}
            {pending && <button disabled>Adding details...</button>}
            </form>
            </div>
            <div className='profile-page col-8 p-5' >
                        <div className='profilepic'>
                            <div>
                                <img src={userProfile} alt='pro' className='img-fluid'/>
                            </div>
                        </div>
                        <h2>Name: {name}</h2>
                        <p>Section: {section}</p>
                        <h5>About:</h5>
                        <p>Hello Im {name}: {descr}</p>
                        <h5>Email: {user.email}</h5>
                        
            </div>
            <div className='col-4 p-2 row align-items-center justify-content-center '>
                        <div className='col row align-items-center justify-content-center'>
                           
                        </div>
            </div>
        </div>
       
       
       
    </div>
  )
}

export default Profile

