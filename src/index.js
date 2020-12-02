import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'

import App from './conponents/app'
import ErrorBoundry from './conponents/error-boundry'
import FirebaseService from './services/firebase-service'
import {FirebaseServiceProvider} from './conponents/firebase-service-context'

import store from './store'

const firebaseService = new FirebaseService()

ReactDOM.render(
  <Provider store = {store}>
    <ErrorBoundry>
        <FirebaseServiceProvider value = {firebaseService}>
          <Router>
            <React.StrictMode>
              <App />
            </React.StrictMode>
          </Router>
          </FirebaseServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);

