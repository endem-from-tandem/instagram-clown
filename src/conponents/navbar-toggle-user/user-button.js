import React, { useState } from 'react'
import _ from './user-button.module.scss'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Nav from 'react-bootstrap/Nav'
import {Link, Redirect} from 'react-router-dom'

import compose from '../../utils/compose'
import {withFirebaseUser} from '../hoc'
import {withFirebaseService} from '../hoc'

const UserButton = ({inNav, firebaseService, currentUser}) => {
    const [showOptions, setShowOptions] = useState(false)
    const [logOut, setLogOut] = useState(null)
    
    if(!currentUser){
        return(null)
    }

    let userStringIdentif

    if(currentUser.name){
        userStringIdentif =  
        (currentUser.name.split(' ').length === 2)
        ? `${currentUser.name.split(' ')[0].substring(0,1).toUpperCase()}${currentUser.name.split(' ')[1].substring(0,1).toUpperCase()}`
        :   currentUser.email.substring(0,2).toUpperCase()
    } else{
        userStringIdentif = currentUser.email.substring(0,2).toUpperCase()
    }
    const currentUserId = currentUser.id
   
    const showUserOptions = () => {
        setShowOptions(!showOptions)
    }

    const onLogOut = () => {
        firebaseService.userSignOut()
        setLogOut(true)
        
    }

    if(logOut){
        return <Redirect to='/'/>
    }


    return(
        <div className = {`${_.container} ${inNav?`d-lg-none ml-5 ${_.lgOptions}`:'d-none d-lg-block ml-2'}`}>
            <button 
              className ={`${_.userButton} btn btn-primary`}
              onClick = {showUserOptions}
            >
                 {userStringIdentif}
            </button>
            
            <div 
              className = {
                `${_.userOptions}
                ${showOptions?null:'d-none'}`
              }
            >
                <Nav.Link 
                    className = {_.profileLink} 
                    as={Link} 
                    to={`/profile/${currentUserId}`}
                >
                    <FontAwesomeIcon  icon="user" /> <div>Profile</div>
                </Nav.Link>

                <Nav.Link 
                    disabled
                    className = {_.profileLink} 
                    as={Link} 
                    to={`/setting`}
                >
                    <FontAwesomeIcon  icon="user-cog" /> Setting
                </Nav.Link>

                <button 
                className = 'btn text-danger'
                onClick = {onLogOut}
                >
                    Log out
                </button>
            </div>
        </div>
    )
}

export default
    compose( withFirebaseService(), withFirebaseUser()) (UserButton)
