import React, { useState } from 'react'
import './Post.css'
import Comment from '../../img/Comment.png'
import Like from '../../img/Liked.png'
import NotLike from '../../img/NotLike.png'
import Share from '../../img/Share.png'
import { useSelector } from 'react-redux'
import { likePost } from '../../api/PostRequest'


const Post = ({data}) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  console.log(data.image);
  const {user} = useSelector((state)=>state.authReducer.authData)

  const [liked,setLiked] = useState(data.likes.includes(user._id))
  const [likes,setLikes] = useState(data.likes.length)

  const handleLike =()=>{
    setLiked((prev)=>!prev)
    likePost(data._id,user._id)
    liked? setLikes((prev)=>prev -1) : setLikes((prev)=>prev+1)
  }




  return (
    <div className='Post'>

        <img src={data.image ? PF + data.image : ""} alt="" />


        <div className="postReact">
            <img className='React' src={liked?Like: NotLike} alt='' onClick={handleLike}/>
            <img className='React' src={Comment} alt=''/>
            <img className='React' src={Share} alt=''/>
        </div>
        <span style={{color:"var(--gray)", fontSize: '12px'}}>{likes} likes</span>
        <div className='detail'>
          <span><b>{data.name}</b></span>
          <span> {data.desc}</span>
        </div>


    </div>
  )
}

export default Post