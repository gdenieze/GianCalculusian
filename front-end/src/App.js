import {BrowserRouter,Routes, Route, Navigate } from 'react-router-dom'
import { useUserHooks } from './Hooks/useUserHook';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Courses from './Pages/Courses'
import Limits from './Pages/Limits'
import IFL from './Pages/IFL';
import ILNL from './Pages/ILNL';
import IEF from './Pages/IEF';
import ITF from './Pages/ITF';
import IITF from './Pages/IITF';
import Matching from './Pages/Matching';
import Quiz from './Pages/Quiz';
// pages and components
import Home from './Pages/Home';
import PowerRule from './Pages/quiz/PowerRule';
import LogFunction from './Pages/quiz/LogFunction';
import LeadNatural from './Pages/quiz/LeadNatuLog';
import ExponentialFuncs from './Pages/quiz/ExponentialFuncs';
import TrigoFunctions from './Pages/quiz/TrigoFunctions';
import Inverse from './Pages/quiz/Inverse';
import Admin from './Pages/Admin';
import UserAdmin from './Pages/UserAdmin';
import Profile from './Pages/Profile'
import HomePage from './Pages/HomePage';
import Aboutpage from './Pages/Aboutpage';
import Games from './Pages/Games';
function App() {
  const {user}= useUserHooks()
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className='pages'>
          <Routes>
            <Route 
              path ="/forum"
              element ={user ? <Home/> : <Navigate to="/login"/>}
              />
            <Route 
              path ="/login"
              element ={!user ? <Login/> : <Navigate to="/"/>}
              />
            <Route 
              path ="/sign-up"
              element ={!user ?<Signup/> : <Navigate to="/"/>}
              />
              <Route 
              path ="courses"
              element ={user ?<Courses/>: <Navigate to="/login"/>}
              />
              <Route 
              path ="courses/limits"
              element ={user ?<Limits/>: <Navigate to="/login"/>}
              />
              <Route 
              path ="courses/ifl"
              element ={user ?<IFL/>: <Navigate to="/login"/>}
              />
              <Route 
              path ="courses/ilnl"
              element ={user ?<ILNL/>: <Navigate to="/login"/>}
              />
              <Route 
              path ="courses/ief"
              element ={user ?<IEF/>: <Navigate to="/login"/>}
              />
              <Route 
              path ="courses/itf"
              element ={user ?<ITF/>: <Navigate to="/login"/>}
              />
              <Route 
              path ="courses/iitf"
              element ={user ?<IITF/>: <Navigate to="/login"/>}
              />
              <Route 
              path ="games"
              element ={user ?<Games/>: <Navigate to="/login"/>}
              />
               <Route 
              path ="/games/matching"
              element ={user ?<Matching/>: <Navigate to="/login"/>}
              />
              <Route 
              path ="quiz"
              element ={user ?<Quiz/>: <Navigate to="/login"/>}
              />
              <Route 
              path ="/quiz/pr"
              element ={user ?<PowerRule/>: <Navigate to="/login"/>}
              />
              <Route 
              path ="/quiz/lf"
              element ={user ?<LogFunction/>: <Navigate to="/login"/>}
              />
              <Route 
              path ="/quiz/lnl"
              element ={user ?<LeadNatural/>: <Navigate to="/login"/>}
              />
              <Route 
              path ="/quiz/ief"
              element ={user ?<ExponentialFuncs/>: <Navigate to="/login"/>}
              />
              <Route 
              path ="/quiz/itf"
              element ={user ?<TrigoFunctions/>: <Navigate to="/login"/>}
              />
              <Route 
              path ="/quiz/iitf"
              element ={user ?<Inverse/>: <Navigate to="/login"/>}
              />
              <Route 
              path ="/admin"
              element ={user ?<Admin/>: <Navigate to="/login"/>}
              />
              <Route 
              path ="/admin/users"
              element ={user ?<UserAdmin/>: <Navigate to="/login"/>}
              />
              <Route 
              path ="/profile"
              element ={user ?<Profile/>: <Navigate to="/login"/>}
              />
              <Route 
              path ="/"
              element ={user ?<HomePage/>: <Navigate to="/login"/>}
              />
              <Route 
              path ="/about"
              element ={user ?<Aboutpage/>: <Navigate to="/login"/>}
              />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
