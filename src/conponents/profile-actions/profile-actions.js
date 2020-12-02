import React, { useState } from 'react'
import _ from './profile-actions.module.scss'

import EditProfile from '../profile-actions-edit'

const ProfileActions = ({user}) => {
    const [edit, setEdit] = useState(false)
    const showEdit = () => {
        setEdit(!edit)
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
        </>
    )
}

export default ProfileActions