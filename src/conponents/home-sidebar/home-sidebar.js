import React from 'react'
import _ from './home-sidebar.module.scss'

import Profile from '../profile'


const HomeSidebar = () => {
    return(
        <div className = {`${_.sidebar} position-fixed  d-none d-lg-block ml-5`}>
            <Profile short/>
        </div>
    )
}

export default HomeSidebar