import { combineReducers } from 'redux'
import students from './students.js'
import campuses from './campuses.js'


const primeReducer = combineReducers({students, campuses})

export default primeReducer

export * from './students.js'
export * from './campuses.js'