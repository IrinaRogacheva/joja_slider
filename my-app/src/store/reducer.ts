import {Presentation} from '../entries/entries'
import * as actionTypes from './actions'
import {ActionType} from './actionType'
import {createPresentation, changePresentationName, openPresentation, showStopPresentation} from '../functions/presentation'
import {Reducer} from 'redux'
import {addSlide, selectSlides, deleteSlide, changeBackgroundColor, changeCurrentSlide, showPrevSlide, showNextSlide} from '../functions/slides'
import {addElement, changeElementSize, moveElement, selectElements} from '../functions/elements'
import {PRIMITIVE_CIRCLE, PRIMITIVE_TRIANGLE, PRIMITIVE_RECTANGLE, IMAGE, TEXT} from '../constants/elements'
import {addText, changeTextAlign, changeTextBold, changeTextFont, changeTextItalic, changeTextSize, changeTextUnderline} from '../functions/textElements'
import { redo, undo } from '../functions/history'

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
        case actionTypes.SELECT_ELEMENTS:
            return selectElements(state, action.payload)       
        case actionTypes.UNDO:
            return undo(state)
        case actionTypes.REDO:
            return redo(state)
        case actionTypes.MOVE_ELEMENT:
            return moveElement(state, action.payload)
        case actionTypes.RESIZE_ELEMENT:
            return changeElementSize(state, action.payload) 
        case actionTypes.CHANGE_TEXT_ALIGN:
            return changeTextAlign(state, action.payload)
        case actionTypes.TEXT_BOLD:                
            return changeTextBold(state)
        case actionTypes.TEXT_ITALIC:
            return changeTextItalic(state)
        case actionTypes.TEXT_UNDERLINE:
            return changeTextUnderline(state)
        case actionTypes.CHANGE_FONT:
            return changeTextFont(state, action.payload)
        case actionTypes.TEXT_SIZE:
            return changeTextSize(state, action.payload)
        case actionTypes.SHOW_STOP_PRESENTATION:
            return showStopPresentation(state, action.payload)
        case actionTypes.SHOW_PREV_SLIDE:
            return showPrevSlide(state)     
        case actionTypes.SHOW_NEXT_SLIDE:
            return showNextSlide(state)             
    }

    return state
}

export default reducer