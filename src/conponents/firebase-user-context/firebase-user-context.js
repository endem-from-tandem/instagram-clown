import React from 'react'

const {
    Provider: FirebaseUserProvider,
    Consumer: FirebaseUserConsumer
} = React.createContext()

export {
    FirebaseUserProvider,
    FirebaseUserConsumer
}