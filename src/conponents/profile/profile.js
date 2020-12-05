import React, { useEffect, useState } from 'react'
import _ from './profile.module.scss'

import Container from 'react-bootstrap/Container'

import ProfileInfo from '../profile-info'
import ProfileActions from '../profile-actions'
import ProfileUserDescription from '../profile-user-description'
import ProfilePosts from '../profile-posts'

import compose from '../../utils/compose'
import {withFirebaseService, withFirebaseUser} from '../hoc'
import Loader from '../loader'


const Profile = ({firebaseService, currentUser, id}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    //get user from db by request adress 
    useEffect(()=>{
        firebaseService.getDocFromCollection('users', id)
        .then((doc)=>{
            setUser(doc)
            setLoading(false)
        })
        .catch(err=> {
            setError(err)
        })
       
    },[id, currentUser])

    if(loading){return(<Loader/>)}

    if(!user){
        return ( 
            <h1 className = 'text-center mt-3'>
                User not found...
            </h1>
        )
    }
    
    const currentUserId = (currentUser)
     ? currentUser.id 
     : null

    return (
        <Container className = {`${_.profileContainer} mt-3`}>           
            <ProfileInfo user ={user}/>
            <ProfileUserDescription user={user}/>
            {(id === currentUserId)?<ProfileActions inProfile={true} user={user}/>:null}
            <ProfilePosts user ={user}/>
        </Container>
    )
}

export default compose(
    withFirebaseService(),
    withFirebaseUser()
)(Profile)