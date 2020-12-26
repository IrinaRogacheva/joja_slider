import {Presentation} from "../entries/entries"

export type ActionType = {
    type: string
}

export type DispatchType = (args: ActionType) => ActionType