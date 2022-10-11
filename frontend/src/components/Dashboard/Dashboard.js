import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Dashboard.css'
import axios from "axios"
import Box from '@mui/material/Box';

const Dashboard = () => {
  const [users,setUsers]=useState('')

  const navigate = useNavigate()

  const userInfo = localStorage.getItem('userInfo')
  const [state,setState]=useState(false)

  useEffect(()=>{
    getUser()
    if(userInfo){
      navigate('/admin-home/dashboard')
    }else{
      navigate('/admin')
    }
  },[state]
  )
  const getUser=async()=>{
    axios.get('/user').then((res)=>{
      console.log("response",res.data);
      setUsers(res.data)
      console.log(res.data);
    })}
  return (
    <div>
       
      
       <Box className='Box1'
      sx={{
        width: 150,
        height: 150,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        
        },
      }}
    >
     
      <div className='Box2'>Total Users
      <h1 className='count'>{users.length}</h1>
      
      </div>
    </Box>
    <Box className='Box1'
      sx={{
        width: 150,
        height: 150,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        
        },
      }}
    >
      <div className='Box2'>Total Posts
      
      </div>
    </Box>
    </div>
    
    
  )
}

export default Dashboard