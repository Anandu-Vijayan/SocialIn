import { Box, Stack } from '@mui/system'
import React from 'react'
import AdminFeed from '../../components/AdminFeed/AdminFeed'
import AdminNav from '../../components/AdminNav/AdminNav'
import AdminSide from '../../components/AdminSide/AdminSide'
import './AdminHome.css'

const AdminHome = () => {
  return (
    <div>
        <AdminNav/>
      <Stack direction='row' justifyContent='space-between'>
      <AdminSide/>
      <AdminFeed/>
      
      </Stack>
    </div>
  )
}

export default AdminHome