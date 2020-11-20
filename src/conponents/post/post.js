import React from 'react'
import _ from './post.module.scss'

import Container from 'react-bootstrap/Container'

import PostImg from '../post-img'
import PostAuthor from '../post-author'
import PostReaction from '../post-reaction'

import Profile from '../profile'

const Post = () => {
    return(
        <Container className = {`${_.postContainer}`}>
            <PostAuthor/>
            <PostImg/>
            <PostReaction/>
        </Container>  
    )
}

export default Post