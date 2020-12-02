import React from 'react'
import _ from './profile-user-description.module.scss'

const ProfileUserDescrtiption = ({user}) => {
    return (
        <div className = {`${_.userDescription} mt-3`}>
            <div className = ' h5 font-weight-bold'>
                {user.name || user.email}
            </div>
            <div className = 'text-muted mt-3'>
                 {user.description}
                
            </div>
        </div>
    )
}

export default ProfileUserDescrtiption
