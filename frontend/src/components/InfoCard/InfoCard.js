import React from 'react'
import './InfoCard.css'
import {UilPen} from '@iconscout/react-unicons'

const InfoCard = () => {
  return (
    <div className='InfoCard'>
        <div className='infoHead'>
            <h4>YourInfo</h4>
            <div>
            <UilPen width='2rem' height='1.2rem'/>
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