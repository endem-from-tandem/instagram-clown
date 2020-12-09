import React, { useEffect, useState } from 'react'
import _ from './app.module.scss'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../font-awesome-icons'

import firebase from 'firebase'

import useRoute from '../routes/routes'
import {withFirebaseService} from '../hoc'
import {db} from '../../firebase'
import {FirebaseUserProvider} from '../firebase-user-context'


const App = ({firebaseService}) => {
    const [auth, setAuth] = useState('prefer')
    const [currentUser, setCurrentUser] = useState(null)
   
    useEffect(()=>{
        firebase.auth().onAuthStateChanged(user => {
            if(user){
                const currentUser =firebaseService.getCurrentUser()
                db.collection("users").doc(currentUser.id)
                .onSnapshot((doc) => {
                    setCurrentUser(doc.data())
                    console.log("Current user: ", doc.data());
                })
                setAuth(true)
            } else{
                setAuth(false)
                setCurrentUser(null)
            }
        })
    },[])
   
    return(
        <FirebaseUserProvider value = {currentUser}>
            <div className = {_.app}>
                {useRoute(auth)}
            </div>
        </FirebaseUserProvider>
    )
}

export default withFirebaseService() (App)