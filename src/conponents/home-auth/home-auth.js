import React from 'react'
import _ from './home-auth.module.scss'

const HomeAuth = () => {
    return(
        <div className = {`${_.auth}  text-center position-fixed  d-none d-lg-block ml-5`}>
            <h3 className = 'text-secondary'>First time on instagram clown?</h3>
            <button className = ' btn btn-lg btn-dark '>Register</button>           
        </div>
    )
}

export default HomeAuth