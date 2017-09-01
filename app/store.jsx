import { createStore, applyMiddleware } from 'redux';
import primeReducer from './reducers';
import createLogger from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk



export default createStore(primeReducer, applyMiddleware(thunkMiddleware, createLogger()))

export * from './reducers'