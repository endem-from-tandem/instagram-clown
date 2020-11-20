import React from 'react'
import _ from './home-posts.module.scss'

import Post from '../post'

const fakeState = [1,2,3,4]

const HomePosts = () => {
    return(
        fakeState.map((item, idx) => {
            return <Post key = {idx}/>
        })
    )
}

export default HomePosts