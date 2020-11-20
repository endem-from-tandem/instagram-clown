import React, {useRef} from 'react'
import _ from './navbar-search-panel.module.scss'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup"


const NavbarSearchPanel = () => {
    const inputRef = useRef(null)

    const focusSearchInput = () => {
        inputRef.current.focus()
    }

    return(
        <Form inline className =  {`${_.searchPanelContainer} d-none d-md-block`}>
            <InputGroup> 
                <InputGroup.Prepend>
                    <InputGroup.Text 
                      className = {_.searchIconContainer}
                      onClick = {focusSearchInput}
                    >
                        <FontAwesomeIcon className ={_.searchIcon} icon="search" />
                    </InputGroup.Text>
                </InputGroup.Prepend>
                    <Form.Control
                        ref = {inputRef}
                        className={`${_.searchInput}`}
                        type="text"
                        placeholder="Search here.."
                />
            </InputGroup>
        </Form>
    )
}

export default NavbarSearchPanel