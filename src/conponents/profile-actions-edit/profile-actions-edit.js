import React, { useEffect, useRef, useState } from 'react'
import _ from './profile-actions-edit.module.scss'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ProgressBar from 'react-bootstrap/ProgressBar'

import {withFirebaseService} from '../hoc'
import firebase from 'firebase'

const EditProfile = ({user, firebaseService, inProfile}) => {
    
    const [form, setForm] = useState(
        (user)? {name:user.name, description:user.description} :
        {name:'', description:''}
    )
    
    const fileUploadRef = useRef(null)
    
    const [file, setFile] = useState(null)
    const [progress, setProgress] = useState(0)
    const [showProgress, setShowProgress] = useState(false)
    const [notification, setNotification] = useState(null)


    const changeHandler = e => {
        setForm({...form, [e.target.name]: e.target.value })
    }
    const changeFileHadler = e => {
        const file = e.target.files[0]
        setFile(file)
    }

    const submitRef =useRef(null)

    const saveChanges = async (e) => {
        const metadata = {
            contentType: 'image/jpeg',
        }
        setNotification(null)
        submitRef.current.disabled = true
        e.preventDefault()
        if(file){
            const avatarRef = firebase.storage().ref(`${user.id}/_avatar_`)
            const task = avatarRef.put(file, metadata)
            setShowProgress(true)
            task.on('state_changed',
                function progress(snapshot) {
                    const percentage = 
                    snapshot.bytesTransferred / snapshot.totalBytes * 100
                    setProgress(percentage)
                },
                function error(err){
                    console.log('upload avatar error')
                },

                async function complete() {
                    const fileURL = await avatarRef.getDownloadURL()
                    firebaseService.updateUserInFirestore(user, {...form, avatar:fileURL})
                    .then(()=>{
                        setNotification('Updates success')
                        setShowProgress(false)
                        setFile(null)
                        fileUploadRef.current.value = null
                        submitRef.current.disabled = false
                        console.log('user update')       
                    })
                    
                }
            )
        }else{
        
            firebaseService.updateUserInFirestore(user, {...form})
            .then(()=>{
                setNotification('Updates success')
                submitRef.current.disabled = false
                console.log('user update')
                
            })
        }
    }

    return (
        <div  className = {inProfile?null:_.homeProfileEditWidth}>
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
            <div className = 'mt-3 mb-1 text-primary font-weight-bold'>Upload avatar:</div>
            <div className = 'd-flex'>
            <Form.File 
              className ='mt-2'
              ref = {fileUploadRef} 
              id="exampleFormControlFile1" 
              onChange = {changeFileHadler}
            />
           
            <Button 
                ref = {submitRef}
                className = 'ml-auto mr-2 pl-4 pr-4 '
                type = 'submit'
            >
                 <FontAwesomeIcon icon = 'check'/>
            </Button>
            </div>
            {showProgress
            ?
            <ProgressBar 
              striped variant="primary"
              className = 'mt-3'
              now={progress}
              label={`${progress}%`} 
            />
            :null
            }
            <div className = 'text-muted mt-2 font-weight-bold'>
                {notification} 
            </div>
         
           
        </Form>
        </div>

    )
}

export default withFirebaseService() (EditProfile)