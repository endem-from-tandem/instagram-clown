import React, { Component, useEffect, useState } from 'react'
import {connect} from 'react-redux'

import HomePost from '../home-post'

import {withFirebaseService} from '../hoc'
import compose from '../../utils/compose'
import {homePostsLoaded} from '../../actions'
import Loader from '../loader'
import { faBellSlash } from '@fortawesome/free-solid-svg-icons'

import {db} from '../../firebase'

const HomePostsH = ({firebaseService}) => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
   const [posts, setPosts] = useState([])



    useEffect(()=>{
        setLoading(true)
        //get posts
        /*firebaseService.getHomePostsByDate()
        .then(data => {
            setPosts(data)
            
            setMounted(true)
        })
        .catch(err => {
            setError(err)
        })
        */

        db.collection('home-posts').onSnapshot(snap => {
            const home_posts = snap.docs.map(doc => doc.data())
            setPosts(home_posts)
            setLoading(false)
        })
    },[])


    if(loading){
        return <Loader/>
    }

    if(posts.length == 0){
        return(
            <h2 className = 'text-muted'>Be first who create a post</h2>
        )
    }

    return(
        posts.map((post, idx) => {
            return <HomePost 
              key = {idx}
              post = {post}
            />
        }) 
    )
}


export default withFirebaseService()(HomePostsH)