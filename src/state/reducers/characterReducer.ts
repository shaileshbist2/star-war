import { Action } from '../actions/character'
import { ActionType } from '../action-types/index'

const initialState = ""

const reducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.CHARATER:
            return action.payload
        default:
            return state
    }
}

export default reducer