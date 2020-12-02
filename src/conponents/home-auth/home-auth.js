import React from 'react'
import _ from './home-auth.module.scss'

const HomeAuth = () => {
    return(
        <div className = {`${_.auth} mt-5  position-fixed  d-none d-lg-block ml-5`}>
            <h1 className = 'text-primary'>News</h1>
            <hr/>
            <div className = 'text-dark mb-1'> 
            Добавлена возможность авторизации через сервис <b>Firebase auth</b>. </div>
            <div className = 'text-muted mb-3'>25.04.2020</div>
            <hr/>
            <div className = 'text-dark mb-1'>
            Настроен сервис <b>Firebase</b> для работы с <b>auth, realtime database, </b> и <b>hosting</b> служб.
            </div>
            <div className = 'text-muted mb-3'>25.04.2020</div>
           
        </div>
    )
}

export default HomeAuth