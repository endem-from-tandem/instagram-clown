import React from 'react'
import _ from './navbar-toggle.module.scss'
import './navbar-toggle.css'

import { Link } from 'react-router-dom'

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


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
                    <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </React.Fragment>
    )
}

export default NavbarToggle