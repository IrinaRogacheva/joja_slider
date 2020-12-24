import {Presentation, Slide} from '../entries/entries'
import { v4 as uuidv4 } from 'uuid'
export const NEW_SLIDE_ID = uuidv4()

function addSlide(presentation: Presentation): Presentation {
    const currentSlide: Slide = {...presentation.currentState.currentSlide}
    const currentSlideId: string = currentSlide.id
    const newSlide: Slide = {
        background: {...presentation.currentState.currentSlide}.background,
        elements: [],
        id: NEW_SLIDE_ID
    }
    const copySlides: Array<Slide> = presentation.slidesList.slice()
    for (let i = 0; i < copySlides.length; i++) {
        if(copySlides[i].id === currentSlideId)
        {
            const index = copySlides.indexOf(copySlides[i]) + 1
            copySlides.splice(index, 0, newSlide)
            break
        }
    }
    return {...presentation,
        slidesList: copySlides,
        currentState: {
            ...presentation.currentState,
            currentSlide: newSlide
        }
    }  
}

function moveSlide(presentation: Presentation, index: number, newIndex: number): Presentation {
    const copySlides: Array<Slide> = presentation.slidesList.slice()
    const moveElement: Slide = copySlides.splice(index, 1)[0]
    copySlides.splice(newIndex, 0, moveElement)
    return {
        ...presentation,
        slidesList: copySlides
    }
}

function deleteSlide(presentation: Presentation): Presentation {
    const copySlides: Array<Slide> = presentation.slidesList.slice()
    const currentSlideId: string = presentation.currentState.currentSlide.id
    let newCurrentSlide: Slide = copySlides[0]
    for (let i = 0; i < copySlides.length; i++) {
        if(copySlides[i].id === currentSlideId)
        {
            const index = copySlides.indexOf(copySlides[i])
            copySlides.splice(index, 1)
            newCurrentSlide = copySlides[i]
            break
        }
    }
    return {
        ...presentation,
        slidesList: copySlides,
        currentState: {
            ...presentation.currentState,
            currentSlide: newCurrentSlide
        }
    }
}

export {
    moveSlide,
    deleteSlide,
    addSlide
}