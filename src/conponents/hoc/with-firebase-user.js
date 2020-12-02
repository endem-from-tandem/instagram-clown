import React from 'react'

import {FirebaseUserConsumer} from '../firebase-user-context'

const withFirebaseUser = () => (Wrapped) => {
    return (props) => {
        return (
            <FirebaseUserConsumer>
                {
                    (currentUser) => {
                        return(
                            <Wrapped 
                              {...props} 
                              currentUser = {currentUser} 
                            />
                        )
                    }
                }
            </FirebaseUserConsumer>
        )
    }
}

export default withFirebaseUser