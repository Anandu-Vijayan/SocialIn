import React from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'

const Auth = () => {
  return (
    <div className='Auth'>
        <div className='a_left'>
            <img className='logo' src={Logo} alt=''/>
            <div className='Webname'>
                <h1>SocialIn</h1>
                <h6>Connect Everyone</h6>
            </div>
        </div>
        <h1>Form</h1>
    </div>
  )
}

export default Auth