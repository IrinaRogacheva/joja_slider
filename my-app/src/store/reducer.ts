import {Presentation} from '../entries/entries'
import * as actionTypes from './actions'
import {ActionType} from './actionType'
import {createPresentation, changePresentationName} from '../functions/presentation'
import {Reducer} from 'redux'
import {addSlide} from '../functions/slides';

const reducer: Reducer<any, ActionType> = (
    state: Presentation,
    action: ActionType
): Presentation => {
    switch (action.type) {
        case actionTypes.CREATE_PRESENTATION:
            return createPresentation()
        case actionTypes.CHANGE_NAME:
            return changePresentationName(state, action.payload)
        case actionTypes.ADD_SLIDE:
            return addSlide(state)    
    }

    return state
}

export default reducer