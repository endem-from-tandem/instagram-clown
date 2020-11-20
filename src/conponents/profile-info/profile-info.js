import React from 'react'
import _ from './profile-info.module.scss'

import Image from 'react-bootstrap/Image'

import clown from '../../img/girl.jpeg'

const ProfileInfo = () => {
    return(
        <div className = {`${_.profileInfo}  d-flex justify-content-center`}>
            <div className = {`${_.followers} p-2 mt-2`}>
                <div className = 'font-weight-bold'>11K</div>
                <div className = 'text-muted'>Followers</div>
            </div>

            <div className = {`${_.avatar} mx-2 p-1 `}>
                <Image
                    src ={clown}
                    width={72}
                    height={72}
                />
            </div>

            <div className = {`${_.following}  p-2 mt-2`}>
                <div className = 'font-weight-bold'>11K</div>
                <div className = 'text-muted'>Following</div>
            </div>
        </div>
    )
}

export default ProfileInfo