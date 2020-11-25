import {Presentation, Element, Slide, Size} from '../entries/entries'
       
function addElement(presentation: Presentation, element: Element): Presentation {
    const copySlidesList: Array<Slide> = presentation.slidesList.slice()
    const currentSlide: Slide = {...presentation.currentState.currentSlide}
    currentSlide.elements.push(element)
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
            currentSlide: currentSlide
        }
    }
}

function deleteElement(presentation: Presentation, elementIndex: number): Presentation {
    const copySlidesList: Array<Slide> = presentation.slidesList.slice()
    const currentSlide: Slide = {...presentation.currentState.currentSlide}
    currentSlide.elements.splice(elementIndex, 1)
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
            currentSlide: currentSlide
        }
    }
}

function moveElement(presentation: Presentation, elementIndex: number, position: Position): Presentation {
    const copySlidesList: Array<Slide> = presentation.slidesList.slice()
    const currentSlide: Slide = {...presentation.currentState.currentSlide}
    currentSlide.elements[elementIndex].elementPosition = position
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
            currentSlide: currentSlide
        }
    }
}

function changeElementSize(presentation: Presentation, slideIndex: number, elementIndex: number, elementSize: Size): Presentation {
    presentation.slidesList[slideIndex].elements[elementIndex].elementSize = elementSize 
    presentation.currentState.currentSlide.elements[elementIndex].elementSize = elementSize 
    return presentation
}

function changeTextSize(presentation: Presentation, slideIndex: number, elementIndex: number, textSize: number): Presentation {
    presentation.currentState.currentSlide.elements[elementIndex].text.textSize = textSize
    presentation.slidesList[slideIndex].elements[elementIndex].text.textSize = textSize
    return presentation
}

function changeTextFont(presentation: Presentation, slideIndex: number, elementIndex: number, textFont: string): Presentation {
    presentation.currentState.currentSlide.elements[elementIndex].text.textFont = textFont
    presentation.slidesList[slideIndex].elements[elementIndex].text.textFont = textFont
    return presentation
}

function changeBackgroundColor(presentation: Presentation, slideIndex: number, backgroundColor: string): Presentation {
    presentation.currentState.currentSlide.background.backgroundColor = backgroundColor
    presentation.slidesList[slideIndex].background.backgroundColor = backgroundColor
    return presentation
}

function changeTextColor(presentation: Presentation, slideIndex: number, elementIndex: number, textColor: string): Presentation {
    presentation.currentState.currentSlide.elements[elementIndex].text.textColor = textColor
    presentation.slidesList[slideIndex].elements[elementIndex].text.textColor = textColor
    return presentation
}

function changePrimitiveBorderColor(presentation: Presentation, slideIndex: number, elementIndex: number, primitiveBorderColor: string): Presentation {
    presentation.currentState.currentSlide.elements[elementIndex].primitive.primitiveBorderColor = primitiveBorderColor
    presentation.slidesList[slideIndex].elements[elementIndex].primitive.primitiveBorderColor = primitiveBorderColor
    return presentation
}

function changePrimitiveFillColor(presentation: Presentation, slideIndex: number, elementIndex: number, primitiveFillColor: string): Presentation {
    presentation.currentState.currentSlide.elements[elementIndex].primitive.primitiveFillColor = primitiveFillColor
    presentation.slidesList[slideIndex].elements[elementIndex].primitive.primitiveFillColor = primitiveFillColor
    return presentation
}

export {
    addElement,
    deleteElement,
    moveElement,
    changeElementSize, 
    changeBackgroundColor, 
    changePrimitiveBorderColor,
    changePrimitiveFillColor, 
    changeTextColor, 
    changeTextFont, 
    changeTextSize
}