import React, { useEffect, useState } from 'react'
import LogoSearch from '../../components/LogoSearch/LogoSearch'
import {useSelector} from "react-redux"
import './Chat.css'
import { userChats } from '../../api/ChatRequest'
import Conversation from '../../components/Conversation/Conversation'
import { Link } from 'react-router-dom'
import Home from '../../img/Home.png'
import Noti from '../../img/Noti.png'
import Comment from '../../img/Comment.png'
import {UilSetting} from '@iconscout/react-unicons'
import ChatBox from '../../components/ChatBox/ChatBox'

const Chat = () => {

  const {user} = useSelector((state)=>state.authReducer.authData);
  const[chats,setChats]=useState([])
  const [currentChat,setCurrentChat]=useState(null)


  useEffect(()=>{
    const getChats=async()=>{
      try {
        const {data} = await userChats(user._id)
        setChats(data)
        console.log(data);
        
      } catch (error) {
        console.log(error);
        
      }
      
    }
    getChats()
  },[user])



  return (
    <div className='Chat'>
      {/* Left Side */}
      <div className='Left-side-chat'>
        <LogoSearch/>
        <div className='Chat-container'>

       
        <h2>Chats</h2>
        <div className='Chat-list'>
        {chats.map((chat)=>(

          <div onClick={()=>setCurrentChat(chat)}>
            <Conversation data={chat} currentUser={user._id}/>
          </div>
        ))}

        </div>
        </div>
      </div>
      {/* Right Side */}
      <div className='Right-side-chat'>
        <div style={{width:'20rem',alignSelf:'flex-end'}}>
        <div className='navIcons'>
      <Link to ='../home'>
        <img src={Home} alt=""/>
        </Link>
        <UilSetting/>
        <img src={Noti} alt=""/>
        <Link to ='../chat'>
        <img src={Comment} alt=""/>
        </Link>
      </div>
      
      </div>
      <div>
        {/* chat body */}
      <ChatBox chat={currentChat}currentUser={user._id}/>
      </div>

        
      </div>
    </div>
  )
}

export default Chat