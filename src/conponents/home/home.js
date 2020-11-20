import React from 'react'

import Container from 'react-bootstrap/Container'

import HomePosts from '../home-posts'
import HomeSidebar from '../home-sidebar'
import HomeAuth from '../home-auth'


const Home = ({auth}) => {
    return(
        <Container className = 'mt-3 justify-content-center justify-content-lg-start d-flex'>
            {/* Content */}
            <div>
                <div className = 'p-3 border bg-primary text-light rounded'>
                 ¯\_(ツ)_/¯
                </div>

                <HomePosts/>
            </div>

            {/*Sidebar*/}
            {(auth)?<HomeSidebar/>:<HomeAuth/>}
        </Container>
    )
}

export default Home