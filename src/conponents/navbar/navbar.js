import _ from './navbar.module.scss'

import Navbar from "react-bootstrap/Navbar";
import Container from 'react-bootstrap/Container'

import NavbarToggle from './../navbar-toggle'
import NavbarSearchPanel from './../navbar-search-panel'
import NavbarBrand from './../navbar-brand'
import NavbarLoginModal from '../navbar-login-modal'

import UserButton from '../navbar-toggle-user'

const AppNavbar = ({auth}) => {
    
    return(
        <Navbar 
          className = {`${_.navbar}`}   expand="lg"
          sticky="top"
        >
            <Container className = {_.navbarContainer}>
                <NavbarBrand />
                <NavbarSearchPanel/>
                {auth?<UserButton inNav = {true} />:null}
                {auth? <NavbarToggle/> : <NavbarLoginModal/>}
            </Container>
            
        </Navbar>
    )
}

export default AppNavbar