import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

  const navigate = useNavigate()

  const userInfo = localStorage.getItem('userInfo')

  useEffect(()=>{
    if(userInfo){
      navigate('/admin-home/dashboard')
    }else{
      navigate('/admin')
    }
  },[])
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard