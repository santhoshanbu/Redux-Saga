import {combineReducers} from 'redux'
import fetch from './fetch'

 const reducer=combineReducers({'data':fetch})

 export default reducer