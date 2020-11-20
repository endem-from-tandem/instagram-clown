import React from 'react'
import { Link } from 'react-router-dom'
import _ from './navbar-brand.module.scss'

import Navbar from "react-bootstrap/Navbar";

import Logo from './../../img/logo.png'

const NavbarBrand = ({navBrandActive}) => {
    return(
        <Navbar.Brand as={Link} to="/">
            <img
                onClick = {navBrandActive}
                src={Logo}
                height="36"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
            />
         </Navbar.Brand>
    )
}

export default NavbarBrand