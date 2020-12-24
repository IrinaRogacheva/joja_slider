import {Presentation, Element, Slide} from '../entries/entries'

function changePrimitiveBorderColor(presentation: Presentation, elementIndex: number, primitiveBorderColor: string): Presentation {
    if (presentation.currentState.currentSlide.elements[elementIndex].primitive === null) {
        return
    }
    const copySlidesList: Array<Slide> = presentation.slidesList.slice()
    const copyCurrentSlide: Slide = {...presentation.currentState.currentSlide}
    let slideInd: number
    for (let i = 0; i < copySlidesList.length; i++) {
        if(copySlidesList[i].id === copyCurrentSlide.id) {
            slideInd = i
            break
        }
    }
    const slideIndex = slideInd
    const copyElements: Array<Element> = presentation.slidesList[slideIndex].elements.slice()
    const copyElement: Element = copyElements[elementIndex]
    const newCopyElement = {
        ...copyElement,
        primitive: {
            ...copyElement.primitive,
            primitiveBorderColor: primitiveBorderColor
        }
    }
    copyElements[elementIndex] = {...newCopyElement}
    copySlidesList[slideIndex] = {
        ...copySlidesList[slideIndex],
        elements: copyElements
    }
    
    return {
        ...presentation,
        slidesList: copySlidesList,
        currentState: {...presentation.currentState,
            currentSlide: copySlidesList[slideIndex]
        }
    }
}

function changePrimitiveFillColor(presentation: Presentation, elementIndex: number, primitiveFillColor: string): Presentation {
    if (presentation.currentState.currentSlide.elements[elementIndex].primitive === null) {
        return
    }
    const copySlidesList: Array<Slide> = presentation.slidesList.slice()
    const copyCurrentSlide: Slide = {...presentation.currentState.currentSlide}
    let slideInd: number
    for (let i = 0; i < copySlidesList.length; i++) {
        if(copySlidesList[i].id === copyCurrentSlide.id) {
            slideInd = i
            break
        }
    }
    const slideIndex = slideInd
    const copyElements: Array<Element> = presentation.slidesList[slideIndex].elements.slice()
    const copyElement: Element = copyElements[elementIndex]
    const newCopyElement = {
        ...copyElement,
        primitive: {
            ...copyElement.primitive,
            primitiveFillColor: primitiveFillColor
        }
    }
    copyElements[elementIndex] = {...newCopyElement}
    copySlidesList[slideIndex] = {
        ...copySlidesList[slideIndex],
        elements: copyElements
    }
    
    return {
        ...presentation,
        slidesList: copySlidesList,
        currentState: {...presentation.currentState,
            currentSlide: copySlidesList[slideIndex]
        }
    }
}

export {changePrimitiveBorderColor,changePrimitiveFillColor}