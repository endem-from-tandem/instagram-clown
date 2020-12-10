import React from 'react'
import _ from './post.module.scss'

import Container from 'react-bootstrap/Container'

import PostImg from '../home-post-img'
import PostAuthor from '../home-post-author'
import PostReaction from '../post-reaction'


const HomePost = ({post}) => {
    const {date, author, payload, id} = post
    return(
        <Container className = {`${_.postContainer}`}>
           <PostAuthor postId = {id} author={author} date={date} /> 
            <PostImg  payload = {payload}/>
            <PostReaction/>
        </Container>  
    )
}

export default HomePost