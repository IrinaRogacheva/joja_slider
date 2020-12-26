import {Presentation} from '../entries/entries'
import * as actionTypes from './actions'
import {ActionType} from './actionType'
import {createPresentation} from '../functions/presentation'
import {Reducer} from 'redux'

const reducer: Reducer = (
    state: Presentation,
    action: ActionType
): Presentation => {
    switch (action.type) {
        case actionTypes.CREATE_PRESENTATION:
            return createPresentation()
        /**case actionTypes.CHANGE_PRESENTATION_NAME:
            return changePresentationName(state)*/
    }

    return state
}

export default reducer