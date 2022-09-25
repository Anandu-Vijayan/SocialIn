import React, { useEffect, useState } from 'react'
import './InfoCard.css'
import {UilPen} from '@iconscout/react-unicons'
import ProfileModel from '../ProfileModel/ProfileModel'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import * as UserApi from '../../api/UserRequest.js'
import { logOut } from '../../actions/AuthAction'

const InfoCard = () => {
    const [modelOpened,setModelOpened] = useState(false)
    const dispatch = useDispatch()
    const params=useParams()

    const profileUserId = params.id
    const [profileUser,setProfileUser]=useState({})
    const {user} = useSelector((state)=>(state.authReducer.authData))

    const handleLogOut =()=>{
        dispatch(logOut())

    }

    useEffect(()=>{
        const fetchProfileUser = async()=>{
            if(profileUserId === user._id)
            {
                setProfileUser(user)
                console.log(user);
            }
            else{
                const profileUser = await UserApi.getUser(profileUser)
                setProfileUser(profileUser)
                console.log(profileUser);
            }
        }
        fetchProfileUser();
    },[user])
    
  return (
    <div className='InfoCard'>
        <div className='infoHead'>
            <h4>Profile Info</h4>
            {user._id === profileUserId ? (
                <div>
                <UilPen width='2rem' height='1.2rem' onClick={()=>setModelOpened(true)}/>
                <ProfileModel  modelOpened={modelOpened}
                setModelOpened={setModelOpened}
                data={user}
    />
                
                </div>
            ):("")}
            
           
        </div>
        <div className='Info'>
            <span>
                <b>Status :</b>
            </span>
            <span>{profileUser.relationship}</span>

        </div>
        <div className='Info'>
            <span>
                <b> Lives in : </b>
            </span>
            <span>{profileUser.livesin}</span>

        </div>
        <div className='Info'>
            <span>
                <b> Works : </b>
            </span>
            <span>{profileUser.worksAt}</span>

        </div>
        <button className='button logout-button' onClick={handleLogOut}>
            LogoOut
        </button>
    </div>
  )
}

export default InfoCard