import { AppBar, Button } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import './AdminNav.css'
import {NavLink, useNavigate } from 'react-router-dom';


const AdminNav = () => {
  const navigate = useNavigate()
 
  const [user,setUser]=useState('')
  useEffect(()=>{
    const userInfo=localStorage.getItem('userInfo')
    if(userInfo){
      setUser(JSON.parse(userInfo))
      console.log(userInfo)
    }
  },[])
  const logout=()=>{
    if(localStorage.removeItem("userInfo")){

      navigate('/admin')
    }
  }
  return (
    <div className='AdminNav'>
         <Stack direction='row' justifyContent='space-between'>
        <Box>
            SocialIn

        </Box>
        <Box>
        {user ? <NavLink onClick={logout} to='/admin'>
                <Button>Logout</Button>
              </NavLink> : <NavLink to="/admin">
                Login
              </NavLink>
}
        </Box>
        </Stack>
      
    </div>
  )
}

export default AdminNav