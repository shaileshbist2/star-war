import { ActionType } from '../action-types/index'

interface Payload {
    name: string
}

interface CharacterAction {
    type: ActionType.CHARATER
    payload: Payload
}

export type Action = CharacterAction