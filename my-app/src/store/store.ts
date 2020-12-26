import {Store, createStore} from 'redux'
import {DispatchType, ActionType} from './actionType'
import { Presentation } from '../entries/entries'
import {createPresentation} from '../functions/presentation'
import reducer from './reducer'

const initialState: Presentation = createPresentation()

export const store: Store<Presentation, ActionType> & {
    dispatch: DispatchType
} = createStore(reducer, initialState)