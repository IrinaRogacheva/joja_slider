import {Presentation, Slide} from '../entries/entries'
import {changeSlideInSlidesList} from '../functions/elements'
import { v4 as uuidv4 } from 'uuid'
export const NEW_SLIDE_ID = uuidv4()

function addSlide(presentation: Presentation): Presentation {
    const currentSlide: Slide = {...presentation.model.currentSlide}
    const currentSlideId: string = currentSlide.id
    const newSlide: Slide = {
        background: {...presentation.model.currentSlide}.background,
        elements: [],
        id: NEW_SLIDE_ID
    }
    const copySlides: Array<Slide> = presentation.model.slidesList.slice()
    for (let i = 0; i < copySlides.length; i++) {
        if(copySlides[i].id === currentSlideId)
        {
            const index = copySlides.indexOf(copySlides[i]) + 1
            copySlides.splice(index, 0, newSlide)
            break
        }
    }
    return {...presentation,
        model: {...presentation.model,
            slidesList: copySlides,
            currentSlide: newSlide
        }
    } as Presentation  
}

function moveSlide(presentation: Presentation, index: number, newIndex: number): Presentation {
    const copySlides: Array<Slide> = presentation.model.slidesList.slice()
    const moveElement: Slide = copySlides.splice(index, 1)[0]
    copySlides.splice(newIndex, 0, moveElement)
    return {...presentation,
        model: {...presentation.model,
            slidesList: copySlides
        }
    } as Presentation
}

function deleteSlide(presentation: Presentation): Presentation {
    const copySlides: Array<Slide> = presentation.model.slidesList.slice()
    const currentSlideId: string = presentation.model.currentSlide.id
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
    return {...presentation,
        model: {...presentation.model,
            slidesList: copySlides,
            currentSlide: newCurrentSlide
        }
    } as Presentation  
}

function changeBackgroundColor(presentation: Presentation, backgroundColor: string): Presentation {
    const currentSlide: Slide = {
        ...presentation.model.currentSlide,
        background: backgroundColor
    }
    return {...presentation,
        model: {...presentation.model,
            slidesList: changeSlideInSlidesList(presentation, currentSlide),
            currentSlide: currentSlide
        }
    } as Presentation 
}

function changeCurrentSlide(presentation: Presentation, slideIndex: number): Presentation {
    const newCurrentSlide = {...presentation.model.slidesList[slideIndex]}
    return {...presentation,
        model: {...presentation.model,
            currentSlide: newCurrentSlide
        }
    } as Presentation
}

export {
    moveSlide,
    deleteSlide,
    addSlide,
    changeBackgroundColor,
    changeCurrentSlide
}