import React, { useState } from 'react'
import './InfoCard.css'
import {UilPen} from '@iconscout/react-unicons'
import ProfileModel from '../ProfileModel/ProfileModel'

const InfoCard = () => {
    const [modelOpened,setModelOpened] = useState(false)






  return (
    <div className='InfoCard'>
        <div className='infoHead'>
            <h4>YourInfo</h4>
            <div>
            <UilPen width='2rem' height='1.2rem' onClick={()=>setModelOpened(true)}/>
            <ProfileModel  modelOpened={modelOpened}
            setModelOpened={setModelOpened}/>

            </div>
           
        </div>
        <div className='Info'>
            <span>
                <b> Status </b>
            </span>
            <span> Single </span>

        </div>
        <div className='Info'>
            <span>
                <b> Lives in </b>
            </span>
            <span> Kochi </span>

        </div>
        <div className='Info'>
            <span>
                <b> Works </b>
            </span>
            <span> SocialIn </span>

        </div>
        <button className='button logout-button'>
            LogoOut
        </button>
    </div>
  )
}

export default InfoCard