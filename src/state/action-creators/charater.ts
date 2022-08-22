import { ActionType } from '../action-types/index'
import { Dispatch } from 'redux'
import { Action } from '../actions/character'

export interface CharacterProps {
    name: string
}

export const search = (data: CharacterProps) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.CHARATER,
            payload: data
        })
    }
}