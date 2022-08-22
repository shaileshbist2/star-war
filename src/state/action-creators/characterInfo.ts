import { ActionType } from '../action-types/index'
import { Dispatch } from 'redux'
import { Action } from '../actions/character-info'

export interface CharacterProps {
    name: string,
    height: string,
    mass: string,
    skin_color: string,
    gender: string
}

export const setCharacterInfo = (data: CharacterProps) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.CHARATER_INFO,
            payload: data
        })
    }
}