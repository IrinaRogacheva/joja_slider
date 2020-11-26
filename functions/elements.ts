import {Presentation, Element, Slide, Size, Position} from '../entries/entries'
       
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

function changeElementSize(presentation: Presentation, elementIndex: number, elementSize: Size): Presentation {
    const copySlidesList: Array<Slide> = presentation.slidesList.slice()
    const currentSlide: Slide = {...presentation.currentState.currentSlide}
    currentSlide.elements[elementIndex].elementSize = elementSize
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

function changeTextSize(presentation: Presentation, elementIndex: number, textSize: number): Presentation {
    const copySlidesList: Array<Slide> = presentation.slidesList.slice()
    const currentSlide: Slide = {...presentation.currentState.currentSlide}
    currentSlide.elements[elementIndex].text.textSize = textSize
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

function changeTextFont(presentation: Presentation, elementIndex: number, textFont: string): Presentation {
    const copySlidesList: Array<Slide> = presentation.slidesList.slice()
    const currentSlide: Slide = {...presentation.currentState.currentSlide}
    currentSlide.elements[elementIndex].text.textFont = textFont
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

function changeBackgroundColor(presentation: Presentation, backgroundColor: string): Presentation {
    const copySlidesList: Array<Slide> = presentation.slidesList.slice()
    const currentSlide: Slide = {...presentation.currentState.currentSlide}
    currentSlide.background.backgroundColor = backgroundColor
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

function changeTextColor(presentation: Presentation, elementIndex: number, textColor: string): Presentation {
    const copySlidesList: Array<Slide> = presentation.slidesList.slice()
    const currentSlide: Slide = {...presentation.currentState.currentSlide}
    currentSlide.elements[elementIndex].text.textColor = textColor
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

function changePrimitiveBorderColor(presentation: Presentation, elementIndex: number, primitiveBorderColor: string): Presentation {
    const copySlidesList: Array<Slide> = presentation.slidesList.slice()
    const currentSlide: Slide = {...presentation.currentState.currentSlide}
    currentSlide.elements[elementIndex].primitive.primitiveBorderColor = primitiveBorderColor
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

function changePrimitiveFillColor(presentation: Presentation, elementIndex: number, primitiveFillColor: string): Presentation {
    const copySlidesList: Array<Slide> = presentation.slidesList.slice()
    const currentSlide: Slide = {...presentation.currentState.currentSlide}
    currentSlide.elements[elementIndex].primitive.primitiveFillColor = primitiveFillColor
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

export {
    addElement,
    deleteElement,
    moveElement,
    changeElementSize,
    changeTextSize,
    changeTextFont,
    changeBackgroundColor,
    changeTextColor,
    changePrimitiveBorderColor,
    changePrimitiveFillColor
}