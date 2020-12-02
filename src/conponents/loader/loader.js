import React from 'react'
import _ from './loader.module.scss'
import Loader from 'react-loader-spinner'

const Spinner = () => {
    return(
        <div className = {_.container}>
            <Loader
                type="ThreeDots"
                color="#222"
                height={100}
                width={100}
            />
        </div>
    )
}

export default Spinner