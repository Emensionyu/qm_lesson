import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk';

import rootReducer from './reducers'
import { createStore,applyMiddleware } from 'redux';

const initialState={};

const middleWare =[thunk];

const store =createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleWare)
)

export default store;