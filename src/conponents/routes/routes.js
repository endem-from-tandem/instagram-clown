import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import Navbar from '../navbar'
import Profile from '../profile'
import Home from '../home'

const isAuthenticated = true

const useRoute = (auth) => {
    if(auth){
        return(
            <>
                <Navbar auth ={true}/>
                <Switch>
                    <Route path = '/' exact>
                        <Home auth ={true}/>
                    </Route>
                    <Route path = '/profile' exact>
                        <Profile />
                    </Route>
                    <Redirect to = '/'/>
                </Switch>
            </>
        )
    }
    return (
        <>
            <Navbar auth ={false}/>
            <Switch>
                <Route path = '/' exact>
                    <Home auth ={false}/>
                </Route>
                <Redirect to = '/'/>
            </Switch>
        </>
    )
}

export default useRoute
