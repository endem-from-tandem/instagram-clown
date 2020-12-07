import React, { useRef, useState } from 'react'
import _ from './profile-actions-add-post.module.scss'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Form from 'react-bootstrap/Form'
import ProgressBar from 'react-bootstrap/ProgressBar'

import {withFirebaseService} from '../hoc'
import firebase from 'firebase'

import {nanoid} from 'nanoid'


const AddPost = ({newPost, user, firebaseService}) => {
    const [error, setError] = useState(null)
    const[file, setFile] = useState(null)
    const[description, setDescription] = useState(null)
    const[notification, setNotification] = useState(null)
    const [progress, setProgress] = useState(0)
    const [showProgress, setShowProgress] = useState(false)

    const addPostButtonRef = useRef(null)
    const fileInputRef = useRef(null)

    const fileChanged = () => {
        setFile(fileInputRef.current.files[0])
    }

    const descriptionChanged = (e) => {
        setDescription(e.target.value)
    }
    const addPostButtonClick = () => {
        addPostButtonRef.current.disabled = true
        setError(null)
        if(!file){
            addPostButtonRef.current.disabled = false
            setError('File is empty...')
            return   
        }

        //generate id
        const postId = nanoid()
        console.log(postId)
        //push img to storage
        const postRef = firebase.storage().ref(`${user.id}/posts/${postId}`)
        const task = postRef.put(file)
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
                    //push postId to firestore user.posts[]
                    firebaseService.updateUserPostsInFirestore(user, postId)
                    .then(async()=>{
                        console.log('post aded to firestore user')
                        //push post to firestore posts collection
                        const fileURL = await postRef.getDownloadURL()
                        const dataPost = new Date()
                        
                        const post = {
                            id:postId,
                            payload:{
                                url:fileURL,
                                description: description
                            },
                            author:user,
                            date: dataPost
                        }
                        firebaseService.updatePostsCollection(post)
                    })
                    .catch((err)=> {
                        console.log(err)
                    })

                    
                }
        )
        

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
                  onChange = {descriptionChanged}
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