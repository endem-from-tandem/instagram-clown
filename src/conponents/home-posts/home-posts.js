import React, { Component, useEffect, useState } from 'react'
import {connect} from 'react-redux'

import HomePost from '../home-post'

import {withFirebaseService} from '../hoc'
import compose from '../../utils/compose'
import {homePostsLoaded} from '../../actions'
import Loader from '../loader'


const HomePostsH = (props) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [posts, setPosts] = useState(props.homePosts)

    const fbs = props.firebaseService

    useEffect(() => {
        setLoading(true)
        fbs.getHomePostsByDate()
            .then(data => {
                setPosts(data)
                setLoading(false)
            })
            .catch(err => {
                setError(err)
            })

    },[fbs])

    if(loading){
        return <Loader/>
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
/*
class HomePosts extends Component{
  
    componentDidMount(){
        const {firebaseService} = this.props
        firebaseService.getHomePosts()
          .then((data)=>{
            this.props.homePostsLoaded(data)
          })
          .catch((err) => {
              throw err
          })
    }

    render(){
        const {homePosts, loading} = this.props

        if(loading){
            return <Loader/>
        }

        return(

            homePosts.map((post, idx) => {
                return <HomePost 
                  key = {idx}
                  post = {post}
                />
            }
        ))
    }
}

*/

const mapStateToProps = ({homePosts, loading}) => {
    return {homePosts, loading}
}

const mapDispatchToProps = {
    homePostsLoaded
}

export default
compose(
    withFirebaseService(),
    connect(mapStateToProps, mapDispatchToProps)
    ) (HomePostsH)