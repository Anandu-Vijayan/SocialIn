import React from 'react'
import './Post.css'
import Comment from '../../img/Comment.png'
import Like from '../../img/Liked.png'
import NotLike from '../../img/NotLike.png'
import Share from '../../img/Share.png'

const Post = ({data}) => {
  return (
    <div className='Post'>
        <img src={data.img} alt="" />


        <div className="postReact">
            <img className='React' src={data.Liked?Like: NotLike} alt=''/>
            <img className='React' src={Comment} alt=''/>
            <img className='React' src={Share} alt=''/>
        </div>
        <span style={{color:"var(--gray)", fontSize: '12px'}}>{data.likes} likes</span>
        <div className='detail'>
          <span><b>{data.name}</b></span>
          <span> {data.desc}</span>
        </div>


    </div>
  )
}

export default Post