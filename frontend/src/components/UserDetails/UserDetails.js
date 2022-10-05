import React,{ useEffect }  from 'react'
import { useNavigate } from 'react-router-dom'

const UserDetails = () => {
  const navigate = useNavigate()

const userInfo = localStorage.getItem('userInfo')
useEffect(()=>{
  if(userInfo){
    navigate('/admin-home/userDetails')
  }else{
    navigate('/admin')
  }
},[])
  return (
    <div>UserDetails</div>
  )
}

export default UserDetails