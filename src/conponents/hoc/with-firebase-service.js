import React from 'react'
import {FirebaseServiceConsumer} from '../firebase-service-context'

const withFirebaseService = () => (Wrapped) => {
    return (props) => {
        return (
            <FirebaseServiceConsumer>
                {
                    (firebaseService) => {
                        return(
                            <Wrapped 
                              {...props} 
                              firebaseService = {firebaseService} 
                            />
                        )
                    }
                }
            </FirebaseServiceConsumer>
        )
    }
}

export default withFirebaseService