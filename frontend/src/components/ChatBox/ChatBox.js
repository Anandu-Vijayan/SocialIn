import React, { useEffect, useState } from 'react'
import { getUser } from '../../api/UserRequest'

const ChatBox = ({chat,currentUser}) => {
    const [userData,setUserData] = useState(null)


    // fetching dat for header
    useEffect(()=>{
        const userId = chat?.memebers?.find((id)=> id !==currentUser)
        const getUserData = async ()=>{
            try {
                const {data} = await getUser (userId)
                setUserData(data);
                console.log(data);
            } catch (error) {
                console.log(error)
            }
        }
        if(chat !==null) getUserData()

    },[chat,currentUser])
  return (
   <>
   <div className='ChatBox-container'>

   </div>
   </>
  )
}

export default ChatBox