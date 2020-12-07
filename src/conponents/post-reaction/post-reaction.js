import React from 'react'
import _ from './post-reaction.module.scss'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const PostReaction = () => {
    return(null)
    return (
        <div className ={`${_.postReaction} d-flex`}>
            <div className ='pr-5'>
                <FontAwesomeIcon 
                    className ='mr-2'
                    color ='red'
                    icon ='heart'
                />
                    9M
            </div>
            <div>
                <FontAwesomeIcon
                    className ='mr-2'
                    color ='gray'
                    icon ='comment-dots'
                />   
                    3
            </div>
        </div>
    )
}

export default PostReaction;
