import {addSlide, moveSlide, deleteSlide, changeBackgroundColor, changeCurrentSlide} from '../slides'
import {Presentation} from '../../entries/entries'
import * as CONSTANTS from '../../entries/constants'

test('addSlide function', () => {
    const presentationBefore: Presentation = {
        model: {
            name: CONSTANTS.DEFAULT_PRESENTATION_NAME,
            slidesList: [{
                background: CONSTANTS.WHITE_BACK_COLOR,
                elements: [],
                id: '0'
            },
            {
                background: CONSTANTS.WHITE_BACK_COLOR,
                elements: [],
                id: '1'
            }],
            currentSlide: {
                background: CONSTANTS.WHITE_BACK_COLOR,
                elements: [],
                id: '0'
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
    
    const presentationAfter: Presentation = {
        model: {
            name: CONSTANTS.DEFAULT_PRESENTATION_NAME,
            slidesList: [
                {
                    background: CONSTANTS.WHITE_BACK_COLOR,
                    elements: [],
                    id: '0'
                },
                {
                    background: CONSTANTS.WHITE_BACK_COLOR,
                    elements: [],
                    id: '1'
                },
                {
                    background: CONSTANTS.WHITE_BACK_COLOR,
                    elements: [],
                    id: '2'
                }
            ],
            currentSlide: {
                background: CONSTANTS.WHITE_BACK_COLOR,
                elements: [],
                id: '2'
            },
            selectedSlidesId: ['2'],
            selectedElementsId: []
        },
        view: {
            color: CONSTANTS.WHITE,
            textSize: CONSTANTS.DEFAULT_TEXT_SIZE,
            textFont: CONSTANTS.DEFAULT_TEXT_FONT
        } 
    }
            
    expect(addSlide(presentationBefore)).toEqual(presentationAfter)
})    

test('moveSlide function', () => {
    const newIndex = 2
    const presentationBefore: Presentation = {
        model: {
            name: CONSTANTS.DEFAULT_PRESENTATION_NAME,
            slidesList: [
                {
                    background: CONSTANTS.WHITE_BACK_COLOR,
                    elements: [],
                    id: '0'
                }, 
                {
                    background: CONSTANTS.WHITE_BACK_COLOR,
                    elements: [],
                    id: '1'
                },
                {
                    background: CONSTANTS.WHITE_BACK_COLOR,
                    elements: [],
                    id: '2'
                },
                {
                    background: CONSTANTS.WHITE_BACK_COLOR,
                    elements: [],
                    id: '3'
                },
                {
                    background: CONSTANTS.WHITE_BACK_COLOR,
                    elements: [],
                    id: '4'
                }
            ],
            currentSlide: {
                background: CONSTANTS.WHITE_BACK_COLOR,
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
                    background: CONSTANTS.WHITE_BACK_COLOR,
                    elements: [],
                    id: '1'
                },
                {
                    background: CONSTANTS.WHITE_BACK_COLOR,
                    elements: [],
                    id: '0'
                },
                {
                    background: CONSTANTS.WHITE_BACK_COLOR,
                    elements: [],
                    id: '3'
                },
                {
                    background: CONSTANTS.WHITE_BACK_COLOR,
                    elements: [],
                    id: '2'
                },
                {
                    background: CONSTANTS.WHITE_BACK_COLOR,
                    elements: [],
                    id: '4'
                }
            ],
            currentSlide: {
                background: CONSTANTS.WHITE_BACK_COLOR,
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
                    background: CONSTANTS.WHITE_BACK_COLOR,
                    elements: [],
                    id: '0'
                }
            ],
            currentSlide: {
                background: CONSTANTS.WHITE_BACK_COLOR,
                elements: [],
                id: '0'
            },
            selectedSlidesId: ['0'],
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
                    background: CONSTANTS.WHITE_BACK_COLOR,
                    elements: [],
                    id: '1'
                }
            ],
            currentSlide: {
                background: CONSTANTS.WHITE_BACK_COLOR,
                elements: [],
                id: '1'
            },
            selectedSlidesId: ['1'],
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

test('changeBackgroundColor function', () => {
    const backgroundColor = CONSTANTS.BLACK_BACK_COLOR
    const presentationBefore: Presentation = {
        model: {
            name: CONSTANTS.DEFAULT_PRESENTATION_NAME,
            slidesList: [{
                background: CONSTANTS.WHITE_BACK_COLOR,
                elements: [],
                id: '0'
            }],
            currentSlide: {
                background: CONSTANTS.WHITE_BACK_COLOR,
                elements: [],
                id: '0'
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
    const presentationAfter: Presentation = {
        model: {
            name: CONSTANTS.DEFAULT_PRESENTATION_NAME,
            slidesList: [{
                background: CONSTANTS.BLACK_BACK_COLOR,
                elements: [],
                id: '0'
            }],
            currentSlide: {
                background: CONSTANTS.BLACK_BACK_COLOR,
                elements: [],
                id: '0'
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
    expect(changeBackgroundColor(presentationBefore, backgroundColor)).toEqual(presentationAfter)
})

test('changeCurrentSlidefunction', () => {
    const slideId = '1'
    const presentationBefore: Presentation = {
        model: {
            name: CONSTANTS.DEFAULT_PRESENTATION_NAME,
            slidesList: [
                {
                    background: CONSTANTS.WHITE_BACK_COLOR,
                    elements: [],
                    id: '0'
                },
                {
                    background: CONSTANTS.WHITE_BACK_COLOR,
                    elements: [],
                    id: '1'
                }
            ],
            currentSlide: {
                background: CONSTANTS.WHITE_BACK_COLOR,
                elements: [],
                id: '0'
            },
            selectedSlidesId: ['0'],
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
                    background: CONSTANTS.WHITE_BACK_COLOR,
                    elements: [],
                    id: '0'
                },
                {
                    background: CONSTANTS.WHITE_BACK_COLOR,
                    elements: [],
                    id: '1'
                }
            ],
            currentSlide: {
                background: CONSTANTS.WHITE_BACK_COLOR,
                elements: [],
                id: '1'
            },
            selectedSlidesId: ['1'],
            selectedElementsId: []
        },
        view: {
            color: CONSTANTS.WHITE,
            textSize: CONSTANTS.DEFAULT_TEXT_SIZE,
            textFont: CONSTANTS.DEFAULT_TEXT_FONT
        } 
    }
    expect(changeCurrentSlide(presentationBefore, slideId)).toEqual(presentationAfter)
})