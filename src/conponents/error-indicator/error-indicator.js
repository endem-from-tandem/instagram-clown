import React from 'react'
import _ from './error-indicator.module.scss'

import img from '../../img/error-indicator.png'

const ErrorIndicator = () => {
    return(
        <div className = {_.container}>
            <img className = {_.image} src = {img} alt = 'error-indicator'/>
            <div className = 'text-danger'> E R R O R </div>
            <div> Something wrong... Try again...</div>
        </div>
    )
}

export default ErrorIndicator