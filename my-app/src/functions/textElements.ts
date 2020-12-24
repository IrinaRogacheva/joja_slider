import {Presentation, Element, Slide} from '../entries/entries'

function changeTextSize(presentation: Presentation, elementIndex: number, textSize: number): Presentation {
    if (presentation.currentState.currentSlide.elements[elementIndex].text === null) {
        return presentation
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
        text: {
            ...copyElement.text,
            textSize: textSize
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

function changeTextFont(presentation: Presentation, elementIndex: number, textFont: string): Presentation {
    if (presentation.currentState.currentSlide.elements[elementIndex].text === null) {
        return presentation
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
        text: {
            ...copyElement.text,
            textFont: textFont
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

function changeTextColor(presentation: Presentation, elementIndex: number, textColor: string): Presentation {
    if (presentation.currentState.currentSlide.elements[elementIndex].text === null) {
        return presentation
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
        text: {
            ...copyElement.text,
            textColor: textColor
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

export {
    changeTextSize,
    changeTextFont,
    changeTextColor
}