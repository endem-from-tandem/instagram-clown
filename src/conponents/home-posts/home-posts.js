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
    const [mounted, setMounted] =useState(false)


    useEffect(()=>{
        db.collection('home-posts').orderBy('date', 'desc')
        .onSnapshot(sn => {
            console.log(posts)
            setPosts(sn.docs.map(doc => doc.data()))
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

    const postItems =  posts.map((post, idx) => {
        return <HomePost 
          key = {idx}
          post = {post}
        />
    }) 

    return(
        <div>
            {postItems}
        </div>
    )
}


export default withFirebaseService()(HomePostsH)