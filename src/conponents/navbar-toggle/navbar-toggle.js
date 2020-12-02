import React from 'react'
import _ from './navbar-toggle.module.scss'
import './navbar-toggle.css'

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Link} from 'react-router-dom'

import UserButton from '../navbar-toggle-user'


const NavbarToggle = () => {
    return(
        <React.Fragment >
            <Navbar.Toggle 
              aria-controls="basic-navbar-nav"
            />
           
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className={`${_.toggleContainer} mr-auto `}>
                </Nav>
                <Nav className = {_.nav}>
                    <Nav.Link disabled as={Link} to="/messages">Message</Nav.Link>
                    <Nav.Link disabled as={Link} to="/likes">Likes</Nav.Link>  
                    <UserButton/>
                </Nav>
            </Navbar.Collapse>
        </React.Fragment>
    )
}

export default NavbarToggle