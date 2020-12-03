import React from 'react'
import _ from './profile-user-description.module.scss'

const ProfileUserDescrtiption = ({user}) => {
    const name = (user) ? (user.name || user.email) : null
    const description = (user) ? user.description : null
    return (
        <div className = {`${_.userDescription} mt-3`}>
            <div className = ' h5 font-weight-bold'>
                {name}
            </div>
            <div className = 'text-muted '>
                 {description}
                
            </div>
        </div>
    )
}

export default ProfileUserDescrtiption
