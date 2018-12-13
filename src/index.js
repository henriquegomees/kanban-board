import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import Multi from 'redux-multi'
import Thunk from 'redux-thunk'
import Reducer from 'store/'

import App from './App'

import './index.css'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(Thunk, Multi)(createStore)(Reducer, devTools)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'))