
import { useLogout } from '../Hooks/useLogout'
import { Link }  from 'react-router-dom'
import { useUserHooks } from '../Hooks/useUserHook'
import logo from '../Components/images/callogo.png'
import userProfile from '../Components/userprofile.png'





const Navbar = () => {
    const {logout} = useLogout()
    const {user} = useUserHooks()
  
   
    const handleClick = ()=>{
     logout()
    }
  return (



<div className='nav'>
     <div className="container">
        <div className="nav-wrapper row align-items-center justify-content-between  ">
            <div className="nav-item-wrapper col-sm-4 col-md-3 ">
                <Link to='/'>
                    <div className='navbar-brand '>
                        <img src={logo} alt='logo'></img>
                    </div>
                </Link>
            </div>
           {user && (
                <div className="nav-item-wrapper col-sm-4 col-md-3">
                    <ul className='nav-li'>
                        <Link to='/' className='space-li'>Home</Link>
                        <Link to='/about' className='space-li'>About</Link>
                        <Link to='/forum' className='space-li'>Forum</Link>
                        <Link to='courses'  className='space-li'>Courses</Link>
                        <Link to='quiz' className='space-li'>Quiz</Link>
                        <Link to='games' className='space-li'>Games</Link> 
                         {/* <Link to='admin'><li className='admin-link'>Admin</li></Link>  */}
                   </ul>
                </div>
                )} 
            <div className="nav-item-wrapper col-sm-4 col-md-3 ">
                <div className='row'>
                   {user && (
                        <div className="nav-profile col row align-items-center d-sm-none d-md-block">
                            <div className='col userprofile-nav '>
                                <img src={userProfile} alt="profile"/>
                                    <Link to="profile">
                                        <p>{user.email}</p>
                                    </Link> 
                                <button className='logout' onClick={handleClick}>Logout</button>
                            </div>
                        </div> 
                    )} 
                </div>
            </div>
        </div>
  </div>
  </div>
 
  )
}

export default Navbar