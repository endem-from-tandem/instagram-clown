import React from 'react'
import _ from './profile-post.module.scss'

const ProfilePost = ({src}) => {
    return(
        <div className = {`${_.postsImgWrapper} `}>
            <img className = {_.postsImg} src = {src} alt = 'img'/>    
        </div>     
    )
}

export default ProfilePost