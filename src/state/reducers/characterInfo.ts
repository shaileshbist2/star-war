import { Action } from '../actions/character-info'
import { ActionType } from '../action-types/index'

const initialState = {
    name: "",
    height: "",
    mass: "",
    skin_color: "",
    gender: ""
}

const reducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.CHARATER_INFO:
            return action.payload
        default:
            return state
    }
}

export default reducer