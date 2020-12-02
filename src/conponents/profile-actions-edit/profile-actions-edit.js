import React, { useRef, useState } from 'react'
import _ from './profile-actions-edit.module.scss'

import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {withFirebaseService} from '../hoc'

const EditProfile = ({user, firebaseService}) => {
    

    const [form, setForm] = useState({
        name:user.name, description:user.description
    })
    
    const submitRef =useRef(null)

    const changeHandler = e => {
        setForm({...form, [e.target.name]: e.target.value })
    }

    const saveChanges = (e) => {
        submitRef.current.disabled = true
        e.preventDefault()
        firebaseService.updateUserInFirestore(user, form)
        .then(()=>{
            submitRef.current.disabled = false
            console.log('user update')
            
        })
    }

    return (
        <div className = {_.editContainer}>
        <Form onSubmit ={saveChanges}>    
            <InputGroup className="mb-2">
                <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">name</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  name = 'name'
                  required
                  value = {form.name}
                  onChange ={changeHandler}
                />
            </InputGroup>
            <InputGroup>
                <InputGroup.Prepend>
                <InputGroup.Text>about</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  value = {form.description}
                  as="textarea"
                  name='description'
                  onChange ={changeHandler}
                />
            </InputGroup>
            <div className = 'mt-3 text-dark'>Upload avatar:</div>
            <Form.File disabled id="exampleFormControlFile1" />
            <Button 
                ref = {submitRef}
                className = 'mt-4'
                variant = {'dark'}
                type = 'submit'
            >
                Save changes
            </Button>
           
        </Form>
        </div>

    )
}

export default withFirebaseService() (EditProfile)