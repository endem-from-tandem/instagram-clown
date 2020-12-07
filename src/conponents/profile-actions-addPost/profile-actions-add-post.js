import React, { useRef, useState } from 'react'
import _ from './profile-actions-add-post.module.scss'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Form from 'react-bootstrap/Form'
import ProgressBar from 'react-bootstrap/ProgressBar'

import {withFirebaseService} from '../hoc'
import firebase from 'firebase'


const AddPost = ({newPost, firebaseService}) => {
    const [error, setError] = useState(null)
    const[file, setFile] = useState(null)
    const[notification, setNotification] = useState(null)
    const [progress, setProgress] = useState(0)
    const [showProgress, setShowProgress] = useState(false)

    const addPostButtonRef = useRef(null)
    const fileInputRef = useRef(null)

    const fileChanged = () => {
        setFile(fileInputRef.current.files[0])
    }


    const addPostButtonClick = () => {
        addPostButtonRef.current.disabled = true
        setError(null)
        if(!file){
            addPostButtonRef.current.disabled = false
            setError('File is empty...')
            return   
        }

        //push to firestore

    }

   
    return (
        <>
        <div className = { newPost? `${_.addPostFormContainer} mt-4 ml-3`: 'd-none'}>
            <input  
                onChange = {fileChanged}
                ref ={fileInputRef} 
                type = 'file'
            /> 
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
            <Form.Group className = 'mt-3' controlId="exampleForm.ControlTextarea1">
                <Form.Control
                  as="textarea" 
                  placeholder = {'description...'}
                  rows={2} 
                />
            </Form.Group>
            <div className = 'font-weight-bold text-danger'>{error}</div>
        </div>
        <button 
          ref = {addPostButtonRef}
          onClick = {addPostButtonClick}
          className = { newPost? ` ${_.addPostButton}  font-weight-bold mt-5 ml-2` : 'd-none'}
        >
            <FontAwesomeIcon icon="plus" />
        </button>
        
        </>
    )
}

export default withFirebaseService()(AddPost)