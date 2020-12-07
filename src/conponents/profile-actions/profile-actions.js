import React, { useState } from 'react'
import _ from './profile-actions.module.scss'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Form from 'react-bootstrap/Form'

import EditProfile from '../profile-actions-edit'
import AddPost from '../profile-actions-addPost'

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
            <div className = 'd-flex '>
                <button 
                  className = {`${newPostButtonStyle?_.addPostButtonAnim:null} ${_.addPostButton}  font-weight-bold mt-5`}
                  onClick = {showNewPost}
                >
                    <FontAwesomeIcon icon="plus" />
                </button>
                <AddPost 
                  user = {user}
                  newPost = {newPost}
                />
            </div>
            : null
            }
        </>
    )
}

export default ProfileActions