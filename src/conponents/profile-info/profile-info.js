import React, { useEffect, useLayoutEffect, useState } from 'react'
import _ from './profile-info.module.scss'

import default_avatar from '../../img/default_avatar.png'

const ProfileInfo = ({user}) => {
    const [avatar, setAvatar] = useState(default_avatar)
    
    useEffect(()=>{
        (user)
            ? setAvatar(user.avatar)
            : setAvatar(default_avatar)
    },[user])
    
    return(
        <div className = {`${_.profileInfo}  d-flex justify-content-center`}>
            <div className = {`${_.followers} p-2 mt-2`}>
                <div className = 'font-weight-bold'>0</div>
                <div className = 'text-muted'>Followers</div>
            </div>

            <div className = {`${_.avatar} mx-2 `}>
                <img
                    src = {avatar || default_avatar}              
                    width='72px'
                    height='72px'
                    alt ='avatar'
                />
            </div>

            <div className = {`${_.following}  p-2 mt-2`}>
                <div className = 'font-weight-bold'>0</div>
                <div className = 'text-muted'>Following</div>
            </div>
        </div>
    )
}

export default ProfileInfo