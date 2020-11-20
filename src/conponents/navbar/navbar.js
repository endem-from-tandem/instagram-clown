import _ from './navbar.module.scss'

import Navbar from "react-bootstrap/Navbar";
import Container from 'react-bootstrap/Container'

import NavbarToggle from './../navbar-toggle'
import NavbarSearchPanel from './../navbar-search-panel'
import NavbarBrand from './../navbar-brand'
import NavbarLogin from '../navbar-login'

const AppNavbar = ({auth}) => {
    
    return(
        <Navbar 
          className = {`${_.navbar}`}   expand="lg"
          sticky="top"
        >
            <Container className = {_.navbarContainer}>
                <NavbarBrand />
                <NavbarSearchPanel/>

                {auth? <NavbarToggle/> : <NavbarLogin/>}
            </Container>
            
        </Navbar>
    )
}

export default AppNavbar