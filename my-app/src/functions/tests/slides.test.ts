import {/* addSlide,*/ moveSlide, deleteSlide, /*changeBackgroundColor, changeCurrentSlide, NEW_SLIDE_ID */} from '../slides'
import {Presentation} from '../../entries/entries'
import * as CONSTANTS from '../../entries/constants'
test('moveSlide function', () => {
    const newIndex = 2
    const presentationBefore: Presentation = {
        model: {
            name: CONSTANTS.DEFAULT_PRESENTATION_NAME,
            slidesList: [
                {
                    background: CONSTANTS.WHITE,
                    elements: [],
                    id: '0'
                }, 
                {
                    background: CONSTANTS.WHITE,
                    elements: [],
                    id: '1'
                },
                {
                    background: CONSTANTS.WHITE,
                    elements: [],
                    id: '2'
                },
                {
                    background: CONSTANTS.WHITE,
                    elements: [],
                    id: '3'
                },
                {
                    background: CONSTANTS.WHITE,
                    elements: [],
                    id: '4'
                }
            ],
            currentSlide: {
                background: CONSTANTS.WHITE,
                elements: [],
                id: '0'
            },
            selectedSlidesId: ['0', '3'],
            selectedElementsId: []
        },
        view: {
            color: CONSTANTS.WHITE,
            textSize: CONSTANTS.DEFAULT_TEXT_SIZE,
            textFont: CONSTANTS.DEFAULT_TEXT_FONT
        } 
    }
    const presentationAfter: Presentation = {
        model: {
            name: CONSTANTS.DEFAULT_PRESENTATION_NAME,
            slidesList: [
                {
                    background: CONSTANTS.WHITE,
                    elements: [],
                    id: '1'
                },
                {
                    background: CONSTANTS.WHITE,
                    elements: [],
                    id: '0'
                },
                {
                    background: CONSTANTS.WHITE,
                    elements: [],
                    id: '3'
                },
                {
                    background: CONSTANTS.WHITE,
                    elements: [],
                    id: '2'
                },
                {
                    background: CONSTANTS.WHITE,
                    elements: [],
                    id: '4'
                }
            ],
            currentSlide: {
                background: CONSTANTS.WHITE,
                elements: [],
                id: '0'
            },
            selectedSlidesId: ['0', '3'],
            selectedElementsId: []
        },
        view: {
            color: CONSTANTS.WHITE,
            textSize: CONSTANTS.DEFAULT_TEXT_SIZE,
            textFont: CONSTANTS.DEFAULT_TEXT_FONT
        } 
    }
    expect(moveSlide(presentationBefore, newIndex)).toEqual(presentationAfter)
})

test('deleteSlide function', () => {
    const presentationBefore: Presentation = {
        model: {
            name: CONSTANTS.DEFAULT_PRESENTATION_NAME,
            slidesList: [
                {
                    background: CONSTANTS.WHITE,
                    elements: [],
                    id: '0'
                }, 
                {
                    background: CONSTANTS.WHITE,
                    elements: [],
                    id: '1'
                },
                {
                    background: CONSTANTS.WHITE,
                    elements: [],
                    id: '2'
                },
                {
                    background: CONSTANTS.WHITE,
                    elements: [],
                    id: '3'
                },
                {
                    background: CONSTANTS.WHITE,
                    elements: [],
                    id: '4'
                }
            ],
            currentSlide: {
                background: CONSTANTS.WHITE,
                elements: [],
                id: '0'
            },
            selectedSlidesId: ['0', '3'],
            selectedElementsId: []
        },
        view: {
            color: CONSTANTS.WHITE,
            textSize: CONSTANTS.DEFAULT_TEXT_SIZE,
            textFont: CONSTANTS.DEFAULT_TEXT_FONT
        } 
    }
    const presentationAfter: Presentation = {
        model: {
            name: CONSTANTS.DEFAULT_PRESENTATION_NAME,
            slidesList: [
                {
                    background: CONSTANTS.WHITE,
                    elements: [],
                    id: '1'
                },
                {
                    background: CONSTANTS.WHITE,
                    elements: [],
                    id: '2'
                },
                {
                    background: CONSTANTS.WHITE,
                    elements: [],
                    id: '4'
                }
            ],
            currentSlide: {
                background: CONSTANTS.WHITE,
                elements: [],
                id: '1'
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
    expect(deleteSlide(presentationBefore)).toEqual(presentationAfter)
})