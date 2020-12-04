import {Presentation, Slide} from '../entries/entries'
import {changeSlideInSlidesList} from '../functions/elements'

function changeBackgroundColor(presentation: Presentation, backgroundColor: string): Presentation {
    const currentSlide: Slide = {
        ...presentation.currentState.currentSlide,
        background: backgroundColor
    }
    return {
        ...presentation,
        slidesList: changeSlideInSlidesList(presentation, currentSlide),
        currentState: {
            ...presentation.currentState,
            currentSlide: currentSlide
        }
    } 
}

function selectElements(presentation: Presentation, elementsIdArray: Array<string>): Presentation
{
    return {
        ...presentation,
        currentState: {
            ...presentation.currentState,
            selectedElements: elementsIdArray
        }
    } 
}

function showSlide(presentation: Presentation, slideIndex: number): Presentation {
    const newCurrentSlide = {...presentation.slidesList[slideIndex]}
    return {
        ...presentation,
        currentState: {
            ...presentation.currentState,
            currentSlide: newCurrentSlide
        }
    }
}

function changeCurrTextSize(presentation: Presentation, textSize: number): Presentation {
    return {
        ...presentation,
        currentState: {
            ...presentation.currentState,
            currentTextSize: textSize
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

function changeCurrentColorFont(presentation: Presentation, color: string): Presentation {
    return {
        ...presentation,
        currentState: {
            ...presentation.currentState,
            currentColor: color
        }
    }
}

export {
    changeBackgroundColor,
    selectElements,
    showSlide,
    changeCurrTextSize,
    changeCurrentTextFont,
    changeCurrentColorFont
}