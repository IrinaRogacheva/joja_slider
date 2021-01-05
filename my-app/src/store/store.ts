import {Store, createStore} from 'redux'
import {DispatchType, ActionType} from './actionType'
import { Presentation } from '../entries/entries'
import {NEW_PRESENTATION} from '../entries/constants'
import reducer from './reducer'

const initialState: Presentation = NEW_PRESENTATION

export const store: Store<Presentation, ActionType> & {
    dispatch: DispatchType
} = createStore(reducer, initialState)