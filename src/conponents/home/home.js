import React from 'react'

import Container from 'react-bootstrap/Container'

import HomePosts from '../home-posts'
import HomeProfile from '../home-profile'
import HomeAuth from '../home-auth'


const Home = ({auth}) => {
    return(
        
        <Container className = 'mt-3 justify-content-center justify-content-lg-start d-flex'>
            {/* Content */}
            <div>
                <HomePosts/>
            </div>

            {/*Sidebar*/}
            {(auth)?<HomeProfile/>:<HomeAuth/>}
        </Container>
    )
}

export default Home