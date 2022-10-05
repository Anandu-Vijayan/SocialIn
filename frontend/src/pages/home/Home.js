import React from 'react'
import PostSide from '../../components/PostSide/PostSide'
import ProfileSide from '../../components/profileSide/ProfileSide'
import RightSide from '../../components/RightSide.js/RightSide'
import './Home.css' 

const home = () => {
  return (
    <div className='Home'>
        <ProfileSide/>
        <PostSide/>
        <RightSide/>
        
    </div>
  )
}

export default home