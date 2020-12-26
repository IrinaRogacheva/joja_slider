import {Presentation, Element, Slide} from '../entries/entries'


function changeTextSize(presentation: Presentation, textSize: number): Presentation {
    const copySlidesList: Array<Slide> = presentation.slidesList.slice()
    const currentSlide: Slide = {...presentation.currentState.currentSlide}
    const copyElements: Array<Element> = presentation.currentState.currentSlide.elements.slice()
    const selectedElements: Array<Element> = presentation.currentState.selectedElements.slice()
    for (let i = 0; i < selectedElements.length; i++) {
        if (selectedElements[i].text !== null) {
            selectedElements[i] = {
                ...selectedElements[i],
                text: {
                    ...selectedElements[i].text,
                    textSize: textSize
                }
            }
        }
    }
    for (let i = 0; i < selectedElements.length; i++) {
        for (let j = 0; i < copyElements.length; j++) {
            if (selectedElements[i].id === copyElements[j].id) {
                copyElements[j] = selectedElements[i]
                break
            }
        }
    }
    currentSlide.elements = copyElements
    for (let i = 0; i < copySlidesList.length; i++) {
        if(copySlidesList[i].id === currentSlide.id)
        {
            copySlidesList[i] = currentSlide
            break
        }
    }
    return {
        ...presentation,
        slidesList: copySlidesList,
        currentState: {
            ...presentation.currentState,
            currentSlide: currentSlide,
            selectedElements: selectedElements
        }
    }   
}

function changeCurrentTextSize(presentation: Presentation, textSize: number): Presentation {
    return {
        ...presentation,
        currentState: {
            ...presentation.currentState,
            currentTextSize: textSize
        }
    }
}


function changeTextFont(presentation: Presentation, textFont: string): Presentation {
    const copySlidesList: Array<Slide> = presentation.slidesList.slice()
    const currentSlide: Slide = {...presentation.currentState.currentSlide}
    const copyElements: Array<Element> = presentation.currentState.currentSlide.elements.slice()
    const selectedElements: Array<Element> = presentation.currentState.selectedElements.slice()
    for (let i = 0; i < selectedElements.length; i++) {
        if (selectedElements[i].primitive !== null) {
            selectedElements[i] = {
                ...selectedElements[i],
                text: {
                    ...selectedElements[i].text,
                    textFont: textFont
                }
            }
        }
    }
    for (let i = 0; i < selectedElements.length; i++) {
        for (let j = 0; i < copyElements.length; j++) {
            if (selectedElements[i].id === copyElements[j].id) {
                copyElements[j] = selectedElements[i]
                break
            }
        }
    }
    currentSlide.elements = copyElements
    for (let i = 0; i < copySlidesList.length; i++) {
        if(copySlidesList[i].id === currentSlide.id)
        {
            copySlidesList[i] = currentSlide
            break
        }
    }
    return {
        ...presentation,
        slidesList: copySlidesList,
        currentState: {
            ...presentation.currentState,
            currentSlide: currentSlide,
            selectedElements: selectedElements
        }
    }   
}

function changeCurrentTextFont(presentation: Presentation, textFont: string): Presentation {
    return {
        ...presentation,
        currentState: {
            ...presentation.currentState,
            currentTextFont: textFont
        }
    }
}


function changeTextColor(presentation: Presentation,  textColor: string): Presentation {
    const copySlidesList: Array<Slide> = presentation.slidesList.slice()
    const currentSlide: Slide = {...presentation.currentState.currentSlide}
    const copyElements: Array<Element> = presentation.currentState.currentSlide.elements.slice()
    const selectedElements: Array<Element> = presentation.currentState.selectedElements.slice()
    for (let i = 0; i < selectedElements.length; i++) {
        if (selectedElements[i].primitive !== null) {
            selectedElements[i] = {
                ...selectedElements[i],
                text: {
                    ...selectedElements[i].text,
                    textColor: textColor
                }
            }
        }
    }
    for (let i = 0; i < selectedElements.length; i++) {
        for (let j = 0; i < copyElements.length; j++) {
            if (selectedElements[i].id === copyElements[j].id) {
                copyElements[j] = selectedElements[i]
                break
            }
        }
    }
    currentSlide.elements = copyElements
    for (let i = 0; i < copySlidesList.length; i++) {
        if(copySlidesList[i].id === currentSlide.id)
        {
            copySlidesList[i] = currentSlide
            break
        }
    }
    return {
        ...presentation,
        slidesList: copySlidesList,
        currentState: {
            ...presentation.currentState,
            currentSlide: currentSlide,
            selectedElements: selectedElements
        }
    }   
}


export {
    changeTextSize,
    changeCurrentTextSize,
    changeTextFont,
    changeCurrentTextFont,
    changeTextColor
}