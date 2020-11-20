import React from 'react'
import _ from './profile.module.scss'

import Container from 'react-bootstrap/Container'


import ProfileInfo from '../profile-info'
import ProfileActions from '../profile-actions'
import ProfileUserDescription from '../profile-user-description'


import img from '../../img/girl.jpeg'
import img2 from '../../img/boy.jpeg'

const ProfilePosts = () => {
    return(
        <div className = {`${_.postsContainer} flex-wrap d-flex`}>
            <div className = {`${_.postsImgWrapper} `}>
                <img className = {_.postsImg} src = {img2} alt = 'img'/>    
            </div>       
            <div className = {`${_.postsImgWrapper} `}>
                <img className = {_.postsImg} src = {img} alt = 'img'/>    
            </div>    

            <div className = {`${_.postsImgWrapper} `}>
                <img className = {_.postsImg} src = {img2} alt = 'img'/>    
            </div>       
            <div className = {`${_.postsImgWrapper} `}>
                <img className = {_.postsImg} src = {img} alt = 'img'/>    
            </div>    

          
        </div>
    )
}


const Profile = ({short}) => {
       
    return (
        <Container 
          className = {
            `${_.profileContainer}
             ${short ? null : 'mt-3'}`
          }
        >
            <ProfileInfo/>
            <ProfileUserDescription/>
            <ProfileActions/>
            {/* show posts/ dont show */}
            {short ? null : <ProfilePosts/>}
        </Container>
        
    )
}

export default Profile