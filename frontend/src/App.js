
import './App.css';
import Auth from './pages/Auth/Auth';
import Home from "./pages/home/Home"
import Profile from './pages/Profile/Profile';
import {Routes,Route,Navigate} from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Chat from './pages/Chat/Chat';
import AdminAuth from './pages/Admin/AdminAuth';
import AdminHome from './pages/AdminHome/AdminHome';
// import AdminFeed from './components/AdminFeed/AdminFeed';
import UserDetails from './components/UserDetails/UserDetails';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  const user =useSelector((state)=>state.authReducer.authData)

  useEffect(()=>{
    console.log(user,"00999");
  })
  return (
    <div className="App">
     {/* <div className='blur' style={{top:'-18%',right:'0'}}></div>
     <div className='blur' style={{top:'36%',left:'-8rem'}}></div> */}
     <Routes>
      <Route path = '/' element={user?<Navigate to = "home"/>:<Navigate to ='auth'/>}/>
      <Route path ='/home' element={user?<Home/>:<Navigate to='../auth'/> }/>
      <Route path ='/auth' element ={user?<Navigate to ="../home"/>:<Auth/>}/>
      <Route path ='/profile/:id' element = {user?<Profile/>:<Navigate to ="../auth"/>}/>
      <Route path ='chat' element = {user?<Chat/>:<Navigate to ="../auth"/>}/>    
     </Routes>
     <div>
     <Routes>
      <Route path = '/admin' element={<AdminAuth/>}/>
        <Route path ='/admin-home' element={<AdminHome/>}>
        <Route path = 'dashBoard' element={<Dashboard/>}/>
      <Route path = 'userDetails' element={<UserDetails/>}/>

        </Route>
    
    
      
     </Routes>
     </div>


    </div>
  );
}

export default App;
