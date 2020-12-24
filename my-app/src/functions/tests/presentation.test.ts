import { createPresentation } from '../../functions/presentation'
import {Presentation} from '../../entries/entries'

test('createPresentation function', () => {
    const presentation: Presentation = {
        name: 'New presentation',
        slidesList: [{
            background: '#fff',
            elements: [],
            id: '00000000-0000-0000-0000-000000000000'
        }],
        currentState: {
            currentSlide: {
                background: '#fff',
                elements: [],
                id: '00000000-0000-0000-0000-000000000000'
            },
            selectedElements: [],
            currentColor: '#fff',
            currentTextSize: 14,
            currentTextFont: 'Arial',
        }
    }
            
    expect(createPresentation()).toEqual(presentation)
})
