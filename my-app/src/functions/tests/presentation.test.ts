import { createPresentation, NEW_SLIDE_ID } from '../../functions/presentation'
import {Presentation} from '../../entries/entries'
import * as CONSTANTS from '../../entries/constants'

test('createPresentation function', () => {
    const presentation: Presentation = {
        model: {
            name: CONSTANTS.DEFAULT_PRESENTATION_NAME,
            slidesList: [{
                background: CONSTANTS.WHITE,
                elements: [],
                id: NEW_SLIDE_ID
            }],
            currentSlide: {
                background: CONSTANTS.WHITE,
                elements: [],
                id: NEW_SLIDE_ID
            },
            selectedSlidesId: [],
            selectedElementsId: []
        },
        view: {
            color: CONSTANTS.WHITE,
            textSize: CONSTANTS.DEFAULT_TEXT_SIZE,
            textFont: CONSTANTS.DEFAULT_TEXT_FONT
        } 
    }
            
    expect(createPresentation()).toEqual(presentation)
})
