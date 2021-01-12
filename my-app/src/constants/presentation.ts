import {Presentation} from "../entries/entries"
import { v4 as uuidv4 } from 'uuid'
import * as CONSTANTS from '../constants/defaultView'

const newSlideId = uuidv4()

export const NEW_PRESENTATION: Presentation = {
    model: { 
        name: CONSTANTS.DEFAULT_PRESENTATION_NAME, 
        slidesList: [{ 
            background: CONSTANTS.WHITE_BACK_COLOR, 
            elements: [], 
            id: newSlideId  
        }], 
        currentSlide: { 
            background: CONSTANTS.WHITE_BACK_COLOR, 
            elements: [], 
            id: newSlideId 
        }, 
        selectedSlidesId: [newSlideId], 
        selectedElementsId: [] 
    }, 
    view: { 
        textColor: CONSTANTS.BLACK, 
        textSize: CONSTANTS.DEFAULT_TEXT_SIZE, 
        textFont: CONSTANTS.DEFAULT_TEXT_FONT,
        textAlign: CONSTANTS.DEFAULT_TEXT_ALIGN,
        textBold: CONSTANTS.DEFAULT_TEXT_BOLD,
        textItalic: CONSTANTS.DEFAULT_TEXT_ITALIC,
        textUnderline: CONSTANTS.DEFAULT_TEXT_UNDERLINE,
        primitiveBorderColor: CONSTANTS.BLACK,
        primitiveFillColor: CONSTANTS.WHITE,
        background: CONSTANTS.WHITE_BACK_COLOR,
        b: false
    } 
} as Presentation