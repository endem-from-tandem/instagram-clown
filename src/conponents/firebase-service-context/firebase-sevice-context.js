import React from 'react'

const {
    Provider: FirebaseServiceProvider,
    Consumer: FirebaseServiceConsumer
} = React.createContext()

export {
    FirebaseServiceProvider,
    FirebaseServiceConsumer
}