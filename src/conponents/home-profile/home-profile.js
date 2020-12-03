import React, { useEffect, useState } from 'react'
import _ from './home-profile.module.scss'

import ProfileInfo from '../profile-info'
import ProfileActions from '../profile-actions'
import ProfileUserDescription from '../profile-user-description'
import { withFirebaseService } from '../hoc'
import {withFirebaseUser} from '../hoc'
import Loader from '../loader'
import compose from '../../utils/compose'


const HomeProfile = ({firebaseService, currentUser}) => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [user, setUser] = useState(null)

    useEffect(()=>{
        if(!currentUser){
            return
        }
        
        const currentUserId = currentUser.id
        firebaseService.getDocFromCollection('users', currentUserId)
        .then(data => {
            setUser(data)
            setLoading(false)
        })
        .catch(err => {
            setError(err)
        })

    },[currentUser])
  

    if(loading){
        return(
        <div className = {`${_.loader} d-none d-lg-block`}  >
            <Loader/>
        </div>
        )
    }
    
    return(
        <div className = {`${_.sidebar} position-fixed  d-none d-lg-block ml-5`}>
            <ProfileInfo user = {user}/>
            <ProfileUserDescription user ={user}/>
            <ProfileActions user ={user}/>
         </div>
    )
}

export default
 compose(
 withFirebaseUser(),
 withFirebaseService()
 )(HomeProfile)