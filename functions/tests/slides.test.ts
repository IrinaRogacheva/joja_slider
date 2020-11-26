import { addSlide, showSlide, moveSlide, deleteSlide, NEW_SLIDE_ID } from '../slides'
import {Presentation} from '../../entries/entries'

test('addSlide function', () => {
    const presentationBefore: Presentation = {
        name: 'New presentation',
        slidesList: [{
            background: '#fff',
            elements: [],
            id: '0'
        }],
        currentState: {
            currentSlide: {
                background: '#fff',
                elements: [],
                id: '0'
            },
            selectedElements: [],
            currentColor: '#fff',
            currentTextSize: 14,
            currentTextFont: 'Arial',
        }
    }
    const presentationAfter: Presentation = {
        name: 'New presentation',
        slidesList: [
            {
                background: '#fff',
                elements: [],
                id: '0'
            },
            {
                background: '#fff',
                elements: [],
                id: NEW_SLIDE_ID
            }
        ],
        currentState: {
            currentSlide: {
                background: '#fff',
                elements: [],
                id: NEW_SLIDE_ID
            },
            selectedElements: [],
            currentColor: '#fff',
            currentTextSize: 14,
            currentTextFont: 'Arial',
        }
    }
            
    expect(addSlide(presentationBefore)).toEqual(presentationAfter)
})

test('showSlide function', () => {
    const slideIndex = 1
    const presentationBefore: Presentation = {
        name: 'New presentation',
        slidesList: [
            {
                background: '#fff',
                elements: [],
                id: '0'
            },
            {
                background: '#fff',
                elements: [],
                id: '1'
            }
        ],
        currentState: {
            currentSlide: {
                background: '#fff',
                elements: [],
                id: '0'
            },
            selectedElements: [],
            currentColor: '#fff',
            currentTextSize: 14,
            currentTextFont: 'Arial',
        }
    }
    const presentationAfter: Presentation = {
        name: 'New presentation',
        slidesList: [
            {
                background: '#fff',
                elements: [],
                id: '0'
            },
            {
                background: '#fff',
                elements: [],
                id: '1'
            }
        ],
        currentState: {
            currentSlide: {
                background: '#fff',
                elements: [],
                id: '1'
            },
            selectedElements: [],
            currentColor: '#fff',
            currentTextSize: 14,
            currentTextFont: 'Arial',
        }
    }

    expect(showSlide(presentationBefore, slideIndex)).toEqual(presentationAfter)
})

test('moveSlide function', () => {
    const index = 1
    const newIndex = 3
    const presentationBefore: Presentation = {
        name: 'New presentation',
        slidesList: [
            {
                background: '#fff',
                elements: [],
                id: '0'
            }, 
            {
                background: '#fff',
                elements: [],
                id: '1'
            },
            {
                background: '#fff',
                elements: [],
                id: '2'
            },
            {
                background: '#fff',
                elements: [],
                id: '3'
            }
        ],
        currentState: {
            currentSlide: {
                background: '#fff',
                elements: [],
                id: '0'
            },
            selectedElements: [],
            currentColor: '#fff',
            currentTextSize: 14,
            currentTextFont: 'Arial',
        }
    }
    const presentationAfter: Presentation = {
        name: 'New presentation',
        slidesList: [
            {
                background: '#fff',
                elements: [],
                id: '0'
            },
            {
                background: '#fff',
                elements: [],
                id: '2'
            },
            {
                background: '#fff',
                elements: [],
                id: '3'
            },
            {
                background: '#fff',
                elements: [],
                id: '1'
            }
        ],
        currentState: {
            currentSlide: {
                background: '#fff',
                elements: [],
                id: '0'
            },
            selectedElements: [],
            currentColor: '#fff',
            currentTextSize: 14,
            currentTextFont: 'Arial',
        }
    }
    expect(moveSlide(presentationBefore, index, newIndex)).toEqual(presentationAfter)
})

test('deleteSlide function', () => {
    const presentationBefore: Presentation = {
        name: 'New presentation',
        slidesList: [
            {
                background: '#fff',
                elements: [],
                id: '0'
            },
            {
                background: '#fff',
                elements: [],
                id: '1'
            }
        ],
        currentState: {
            currentSlide: {
                background: '#fff',
                elements: [],
                id: '0'
            },
            selectedElements: [],
            currentColor: '#fff',
            currentTextSize: 14,
            currentTextFont: 'Arial',
        }
    }
    const presentationAfter: Presentation = {
        name: 'New presentation',
        slidesList: [
            {
                background: '#fff',
                elements: [],
                id: '1'
            }
        ],
        currentState: {
            currentSlide: {
                background: '#fff',
                elements: [],
                id: '1'
            },
            selectedElements: [],
            currentColor: '#fff',
            currentTextSize: 14,
            currentTextFont: 'Arial',
        }
    }
    expect(deleteSlide(presentationBefore)).toEqual(presentationAfter)
})