import React from 'react'
import { Outlet } from 'react-router-dom'
import './AdminFeed.css'

const AdminFeed = () => {
  return (
    <div className='AdminFeed'>
        <Outlet/>
    </div>
  )
}

export default AdminFeed