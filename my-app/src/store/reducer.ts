import {Presentation} from '../entries/entries'
import * as actionTypes from './actions'
import {ActionType} from './actionType'
import {createPresentation, changePresentationName, openPresentation} from '../functions/presentation'
import {Reducer} from 'redux'
import {addSlide, selectSlides, deleteSlide, changeBackgroundColor, changeCurrentSlide} from '../functions/slides'
import {addElement} from '../functions/elements'
import {PRIMITIVE_CIRCLE, PRIMITIVE_TRIANGLE, PRIMITIVE_RECTANGLE, IMAGE, TEXT} from '../entries/constants'
import {addText} from '../functions/textElements'

const reducer: Reducer<any, ActionType> = (
    state: Presentation,
    action: ActionType
): Presentation => {
    switch (action.type) {
        case actionTypes.CREATE_PRESENTATION:
            return createPresentation(state)
        case actionTypes.CHANGE_NAME:
            return changePresentationName(state, action.payload)
        case actionTypes.ADD_SLIDE:
            return addSlide(state)    
        case actionTypes.SELECT_SLIDES:
            return selectSlides(state, action.payload)  
        case actionTypes.ADD_PRIMITIVE_CIRCLE:
            return addElement(state, PRIMITIVE_CIRCLE)
        case actionTypes.ADD_PRIMITIVE_TRIANGLE:
            return addElement(state, PRIMITIVE_TRIANGLE)
        case actionTypes.ADD_PRIMITIVE_RECTANGLE:
            return addElement(state, PRIMITIVE_RECTANGLE)
        case actionTypes.CHANGE_CURRENT_SLIDE:
            return changeCurrentSlide(state, action.payload) 
        case actionTypes.DELETE_SLIDE:
            return deleteSlide(state) 
        case actionTypes.CHANGE_BACKGROUND_SLIDE:
            return changeBackgroundColor(state, action.payload) 
        case actionTypes.OPEN_PRESENTATION:
            return openPresentation(action.payload)
        case actionTypes.ADD_ELEMENT:
            return addElement(state, IMAGE)  
        case actionTypes.ADD_TEXT:
            return addElement(state, TEXT) 
        case actionTypes.CHANGE_TEXT:
            return addText(state, action.payload)        
            
    }

    return state
}

export default reducer