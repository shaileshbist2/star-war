import { ActionType } from '../action-types/index'

interface Payload {
    name: string,
    height: string,
    mass: string,
    skin_color: string,
    gender: string
}

interface CharacterInfoAction {
    type: ActionType.CHARATER_INFO
    payload: Payload
}

export type Action = CharacterInfoAction