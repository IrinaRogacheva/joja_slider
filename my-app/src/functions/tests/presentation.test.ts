import { createPresentation, NEW_SLIDE_ID } from '../../functions/presentation'
import {Presentation} from '../../entries/entries'


test('createPresentation function', () => {
    const presentation: Presentation = {
        name: 'New presentation',
        slidesList: [{
            background: '#fff',
            elements: [],
            id: NEW_SLIDE_ID
        }],
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
            
    expect(createPresentation()).toEqual(presentation)
})
