import React from 'react'
import _ from './profile-posts.module.scss'

import img from '../../img/girl.jpeg'
import img2 from '../../img/boy.jpeg'

import ProfilePost from '../profile-post'

const fakeState = [img, img2]

const ProfilePosts = () => {
    const posts =  fakeState.map((item, idx) => {
        return <ProfilePost src ={item} key = {idx}/>
    })

   
    return(
        <div className = {`${_.postsContainer} flex-wrap mt-3 d-flex`}>
            {posts}
        </div>
    )
}

export default ProfilePosts