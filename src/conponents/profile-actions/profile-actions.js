import React from 'react'
import _ from './profile-actions.module.scss'

const ProfileActions = () => {
    return(
        <div className = 'mt-3 d-flex justify-content-center'>
            <button className = {`${_.btn}  btn btn-outline-primary mr-2`}>Edit profile</button>
            <button className = {`${_.btn}  btn btn-outline-primary mr-2`}>Statistic</button>
            <button className = {`${_.btn} btn btn-outline-primary`}>Contact</button>
        </div>
    )
}

export default ProfileActions