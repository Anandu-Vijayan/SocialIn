import React,{ useEffect, useState }  from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Swal from 'sweetalert2'

const UserDetails = () => {
  const [users,setUsers]=useState('')
  const navigate = useNavigate()

const userInfo = localStorage.getItem('userInfo');
const [state,setState]=useState(false);
useEffect(()=>{
  getUser()
  if(userInfo){
    navigate('/admin-home/userDetails')
  }else{
    navigate('/admin')
  }
},[state])

const handleDelete=(id)=>{
  console.log(id)
  
  axios(
    {
      method:'delete',
      url:'http://localhost:5000/admin/deleteUser',
      data:{
        userId:id
      }
    }
  ).then((response)=>{
    console.log(response);
    setState(!state)
  })

  

}








const getUser=async()=>{
  axios.get('/user').then((res)=>{
    console.log("response",res.data);
    setUsers(res.data)
  })
}

  return (
    <div>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>UserName</TableCell>
            <TableCell align="right">Firstname</TableCell>
            <TableCell align="right">Lastname&nbsp;</TableCell>
            <TableCell align="right">Status&nbsp;</TableCell>
            <TableCell align="right">Options&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { users&&users?.map((item,index)=>(
            <TableRow
              
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
               {item.username}
              </TableCell>
              <TableCell align="right">{item.firstname}</TableCell>
              <TableCell align="right">{item.lastname}</TableCell>
              <TableCell align="right">{item.relationship}</TableCell>
              <TableCell align="right"><button onClick={()=>{handleDelete(item._id)}}>Delete</button></TableCell>
              
              
            </TableRow>
            ))  }
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default UserDetails