import React from 'react'
import ReactDOM from 'react-dom'
import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'
import * as serviceWorker from './serviceWorker';

import promise from 'redux-promise'
import multi from 'redux-multi'
import thunki from 'redux-thunk'

import AuthOrApp from './main/authOrApp'
import reducers from './main/reducers'


const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
    && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(multi,promise,thunki)(createStore)(reducers,devTools)
ReactDOM.render(
<Provider store={store}>
    <AuthOrApp />  
</Provider>
, document.getElementById('app'))   

serviceWorker.unregister();
