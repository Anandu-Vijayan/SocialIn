import React, { useState } from 'react'
import './RightSide.css'
import Home from '../../img/Home.png'
import Noti from '../../img/Noti.png'
import Comment from '../../img/Comment.png'
import {UilSetting} from '@iconscout/react-unicons'
import TrendCard from '../TrendCard/TrendCard'
import ProfileModel from '../ProfileModel/ProfileModel'
import ShareModel from '../ShareModel/ShareModel'


const RightSide = () => {
  const [modelOpened, setModelOpened] = useState(false)
  return (
    <div className='RightSide'>
      <div className='navIcons'>
        <img src={Home} alt=""/>
        <UilSetting/>
        <img src={Noti} alt=""/>
        <img src={Comment} alt=""/>
      </div>

      <TrendCard/>
      <button className='button r-button' onClick={()=>setModelOpened(true)}>
        
        Share
      </button>
      <ShareModel
        modelOpened={modelOpened}
        setModelOpened={setModelOpened}
        />
    </div>
  )
}

export default RightSide