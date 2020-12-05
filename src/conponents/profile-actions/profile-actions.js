import React, { useState } from 'react'
import _ from './profile-actions.module.scss'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import EditProfile from '../profile-actions-edit'

const ProfileActions = ({user, inProfile}) => {
    const [edit, setEdit] = useState(false)
    const showEdit = () => {
        setEdit(!edit)
    }

    const [newPostButtonStyle, setNPBS] = useState(false)

    const [newPost, setNewPost] = useState(false)
    const showNewPost = () => {
        setNewPost(!newPost)
        setNPBS(!newPostButtonStyle)

    }
    return(
        <>
            <div className = 'mt-3 d-flex justify-content-center'>
           
                <button 
                    className = {`${_.btn}  btn btn-primary mr-2`}
                    onClick = {showEdit}
                >
                   
                    Edit profile
                </button>
                
                <button disabled className = {`${_.btn}  btn btn-outline-secondary mr-2`}>Messages</button>
                <button disabled className = {`${_.btn}  btn btn-outline-secondary mr-2`}>Contact</button>
                
            </div>
            
            <div className = {`${edit?null:'d-none'} mt-4`}>
                <EditProfile user = {user}/>
            </div>

            { inProfile ? 
            <div >
                <button 
                  className = {`${newPostButtonStyle?_.addPostButtonAnim:null} ${_.addPostButton}  font-weight-bold mt-4`}
                  onClick = {showNewPost}
                >
                    <FontAwesomeIcon icon="plus" />
                </button>
            </div>
            : null
            }

            
        </>
    )
}

export default ProfileActions