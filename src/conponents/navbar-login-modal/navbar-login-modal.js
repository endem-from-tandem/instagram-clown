import React, { useRef, useState } from 'react'
import _ from './navbar-login-modal.module.scss'
import { Button, Modal, Form } from 'react-bootstrap'
import {withFirebaseService} from '../hoc'

import firebase from 'firebase'

const NavbarLoginModal = ({firebaseService}) => {
    const [error, setError] = useState(null)
    const [form, setForm] = useState({
        email:'', password:''
    })


    const[show, setShow] = useState(false)
    const handleClose = () => {
         setShow(false)
         setError(null)
    }

    const handleShow = () => setShow(true)
   
    const changeHandler = e => {
        setForm({...form, [e.target.name]: e.target.value })
    }
   
    const loginButtonRef = useRef(null)
    const registerButtonRef = useRef(null)
    const googleButtonRef = useRef(null)

    const onSignUp = (e) => {
        setError(null)
        loginButtonRef.current.disabled = true
        registerButtonRef.current.disabled = true
        googleButtonRef.current.disabled = true

        firebaseService.userSignUpWithEmail(form.email, form.password)
          .then(()=> {
              let newUser =firebaseService.getCurrentUser()
              newUser = {...newUser, posts:[], description:''}
              console.log(newUser, 'newUserff')
              //push user to database
              firebaseService.addUserToFirestore(newUser)
                .then(()=>{
                    console.log('user added')
                })
                .catch((e)=>{
                    console.log('error')
                })
          })
          .catch(e => {
              setError(e.message)
              loginButtonRef.current.disabled = false
              registerButtonRef.current.disabled = false
              googleButtonRef.current.disabled = false
          })
    }

    const onLogin = (e) => {
        setError(null)
        e.preventDefault()
        loginButtonRef.current.disabled = true
        registerButtonRef.current.disabled = true
        googleButtonRef.current.disabled = true

        firebaseService.userLoginWithEmail(form.email, form.password)
          .catch(e => {
              setError(e.message)
              loginButtonRef.current.disabled = false
              registerButtonRef.current.disabled = false
              googleButtonRef.current.disabled = false
          })
    }

    const onGoogle = () => {
        setError(null)
        loginButtonRef.current.disabled = true
        registerButtonRef.current.disabled = true
        googleButtonRef.current.disabled = true

        firebaseService.userSignWithGoogle()
          .then(result => {
              let newUser =firebaseService.getCurrentUser()
              newUser = {...newUser, posts:[], description:''}
              //push user to database
              firebaseService.getDocFromCollection('users', newUser.id)
              .then((data)=> {
                  if(!data){
                    firebaseService.addUserToFirestore(newUser)
                    .then(()=>{
                        console.log('user added')
                    })
                    .catch((e)=>{
                        console.log('error')
                    })
                  }
              })
             
          })
    }

    return(
        <>
        <Button
          variant = 'primary'
          onClick = {handleShow}>
              Sign In
        </Button>

        <Modal 
          show={show} 
          onHide={handleClose}
          aria-labelledby="contained-modal-title-vcenter"
      centered
        >
            <Modal.Header closeButton>
                <Modal.Title >Sign in</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit = {onLogin}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                          type="email"
                          name = 'email'
                          placeholder="Enter email" 
                          onChange ={changeHandler}
                          required
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                          type="password"
                          name = 'password'
                          placeholder="Password" 
                          required
                          onChange ={changeHandler}
                        />
                    </Form.Group>
                
                    <Button
                      variant="primary"
                      type="submit"
                      ref ={loginButtonRef}
                    >
                        Log in
                    </Button>
                    <Button 
                      ref = {registerButtonRef}
                      className = 'ml-2'
                      variant="light"
                      onClick = {onSignUp}
                    >
                        Sign up
                    </Button>

                    <Button 
                      ref = {googleButtonRef}
                      onClick = {onGoogle}
                      className = {`${_.googleButton}  ml-2 `}
                      variant = 'null'
                      
                    >
                    </Button>
                    <hr/>
                    <div className = 'mt-2 text-danger'>{error}</div>
                </Form>
            </Modal.Body>
           
      </Modal>

        </>
    )
}

export default withFirebaseService()(NavbarLoginModal)