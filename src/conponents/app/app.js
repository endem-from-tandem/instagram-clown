import React, { useState } from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import _ from './app.module.scss'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../font-awesome-icons'

import useRoute from '../routes/routes'


const App = () => {
    const [auth, setAuth] = useState(true)
    console.log(auth)

    const changeAuth = () => {
        setAuth(!auth)
    }
    return(
        <>
        <div className = 'text-center fixed-bottom'>
          <button onClick ={changeAuth} className = 'btn btn-light'>AUTH</button>
        </div>
        
        <Router>
            {useRoute(auth)}
        </Router>
        </>
    )
}

export default App