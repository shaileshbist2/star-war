import { combineReducers } from 'redux'
import characterReducer from './characterReducer'
import characterInfo from './characterInfo'

const reducers = combineReducers({
    character: characterReducer,
    info: characterInfo
})

export default reducers

export type State = ReturnType<typeof reducers>
