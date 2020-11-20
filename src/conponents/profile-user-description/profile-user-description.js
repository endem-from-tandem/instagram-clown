import React from 'react'
import _ from './profile-user-description.module.scss'

const ProfileUserDescrtiption = () => {
    return (
        <div className = {`${_.userDescription} mt-3`}>
            <div className = ' h5 font-weight-bold'>
                Hyper Chad Chadson
            </div>
            
            <div className = 'text-muted mt-3'>
                I drinks protein... Eat creatin... And i'm Chad! 
                Need more musculs... Need more musculs...
                Need more musculs... Need more musculs...
            </div>
        </div>
    )
}

export default ProfileUserDescrtiption
