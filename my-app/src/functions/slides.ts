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

function moveSlide(presentation: Presentation, newIndex: number): Presentation {
    const newId: string = presentation.model.slidesList[newIndex].id
    const copySlides: Array<Slide> = presentation.model.slidesList.slice()
    const moveElements: Array<Slide> = []
    const selectedSlidesId: Array<string> = presentation.model.selectedSlidesId.slice()
    for (let i = 0; i < copySlides.length; i++) {
        if (selectedSlidesId.includes(copySlides[i].id)) {
            const tempMoveElement: Slide = copySlides.splice(i, 1)[0]
            moveElements.push(tempMoveElement)
            i--
        }
    }
    let index: number = 0
    for (let i = 0; i < copySlides.length; i++) {
        if (copySlides[i].id === newId) {
            index = i
            break
        }
    }

    for (let i = index; i < index + moveElements.length; i++) {
        copySlides.splice(i, 0, moveElements[i-index])
    }
    return {...presentation,
        model: {...presentation.model,
            slidesList: copySlides
        }
    } as Presentation     
}

function deleteSlide(presentation: Presentation): Presentation {
    const copySlides: Array<Slide> = presentation.model.slidesList.slice()
    const selectedSlidesId: Array<string> = presentation.model.selectedSlidesId
    let currentSlide: Slide = presentation.model.currentSlide
    let currentSlideIndex: number = 0
    for (let i = 0; i < copySlides.length; i++) {
        if (copySlides[i].id === currentSlide.id) {
            currentSlideIndex = i
            break
        }
    }
    console.log(currentSlideIndex)
    for (let i = 0; i < copySlides.length; i++) {
        if (selectedSlidesId.includes(copySlides[i].id)) {
            copySlides.splice(i, 1)
            i--
        }
    }
    if (currentSlideIndex < copySlides.length) {
        currentSlide = {...copySlides[currentSlideIndex]}
    }
    else {
        currentSlide = {...copySlides[copySlides.length-1]}
    }

    console.log(currentSlide.id)
    return {...presentation,
        model: {...presentation.model,
            currentSlide: currentSlide,
            selectedSlidesId: [],
            slidesList: copySlides
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