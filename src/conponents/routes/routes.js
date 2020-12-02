import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import Navbar from '../navbar'
import Profile from '../profile'
import Home from '../home'
import Loader from '../loader'

const useRoute = (auth) => {
    if(auth === 'prefer'){
        return(
            <Loader/>
        )
    }
    return(
        <>
            <Navbar auth ={auth}/>
            <Switch>
                <Route path = '/' exact>
                    <Home auth ={auth}/>
                </Route>
                <Route 
                  path = '/profile/:id' 
                  render = {({match}) => <Profile id = {match.params.id}/>}
                
                />
                <Redirect to = '/'/>
            </Switch>
        </>
        )
}

export default useRoute
