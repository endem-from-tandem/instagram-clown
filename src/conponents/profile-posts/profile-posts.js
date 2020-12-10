import React, { useEffect, useState } from 'react'
import _ from './profile-posts.module.scss'

import ProfilePost from '../profile-post'
import Loader from '../loader'
import { withFirebaseService } from '../hoc'


const ProfilePosts = ({firebaseService, user}) => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [profilePosts, setProfilePosts] = useState(null)
 
    useEffect(()=>{
       async function fetchData(){
           setLoading(true)
           const data = await firebaseService.getUserPosts(user)
           setProfilePosts(data)
           setLoading(false)
       }
       fetchData()
    },[user])

    if(loading){
        return(
            <Loader/>
        )
    }

    const posts =  profilePosts.map((item, idx) => {
        return <ProfilePost 
          src ={item.payload.url} 
          key = {idx}
        />
    })

   
    return(
        <div className = {`${_.postsContainer} flex-wrap mt-3 d-flex`}>
            {posts}
        </div>
    )
}

export default withFirebaseService() (ProfilePosts)