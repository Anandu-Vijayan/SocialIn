import React from 'react'
import Cover from '../../img/Cover.jpeg'
import Profile from '../../img/Profile.jpeg'
import './ProfileCard.css'

const ProfileCard = () => {
    const Profilepage=true;
  return (
    <div className='ProfileCard'>
        <div className='ProfileImages'>
            <img src={Cover} alt=''/>
            <img src={Profile} alt=''/>

        </div>
        <div className='ProfileName'>
            <span>Anandu</span>
            <span>Webdeveloper</span>
        </div>


        <div className='followStatus'>
            <hr/>
            <div>
            <div className='follow'>
                <span>5M</span>
                <span>Followers</span>
            </div>
            <div className='vl'></div>
            <div className='follow'>
                <span>200</span>
                <span>Following</span>
            </div>
            {Profilepage && (
                <>
                <div className='vl'>

                </div>
                <div className='follow'>
                    <span>3</span>
                    <span>Posts</span>
                </div>
                </>
            )}
            </div>
            <hr/>
        </div>
        {<span>
            
            My Profile
        </span>}
       
    </div>
  )
}

export default ProfileCard