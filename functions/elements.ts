import {Presentation, Element, Slide, Size, Position} from '../entries/entries'
       
function addElement(presentation: Presentation, element: Element): Presentation {
    const elementsArray = presentation.currentState.currentSlide.elements.slice()
    elementsArray.push(element)
    const currentSlide: Slide = {
        ...presentation.currentState.currentSlide,
        elements: elementsArray
    }
    const copySlidesList: Array<Slide> = presentation.slidesList.slice()
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
    const elementsArray = presentation.currentState.currentSlide.elements.slice()
    elementsArray.splice(elementIndex, 1)
    const currentSlide: Slide = {
        ...presentation.currentState.currentSlide,
        elements: elementsArray
    }
    const copySlidesList: Array<Slide> = presentation.slidesList.slice()
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
    const elementsArray = presentation.currentState.currentSlide.elements.slice()
    elementsArray[elementIndex] = {
        ...presentation.currentState.currentSlide.elements[elementIndex],
        elementPosition: position
    }
    const currentSlide: Slide = {
        ...presentation.currentState.currentSlide,
        elements: elementsArray
    }
    const copySlidesList: Array<Slide> = presentation.slidesList.slice()
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
    const elementsArray = presentation.currentState.currentSlide.elements.slice()
    elementsArray[elementIndex] = {
        ...presentation.currentState.currentSlide.elements[elementIndex],
        elementSize: elementSize
    }
    const currentSlide: Slide = {
        ...presentation.currentState.currentSlide,
        elements: elementsArray
    }
    const copySlidesList: Array<Slide> = presentation.slidesList.slice()
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
    if (presentation.currentState.currentSlide.elements[elementIndex].text === null) {
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

function changeCurrTextSize(presentation: Presentation, textSize: number): Presentation {
    return {
        ...presentation,
        currentState: {
            ...presentation.currentState,
            currentTextSize: textSize
        }
    } 
}

function changeTextFont(presentation: Presentation, elementIndex: number, textFont: string): Presentation {
    if (presentation.currentState.currentSlide.elements[elementIndex].text === null) {
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

function changeCurrentTextFont(presentation: Presentation, textFont: string): Presentation {
    return {
        ...presentation,
        currentState: {
            ...presentation.currentState,
            currentTextFont: textFont
        }
    }
}

function changeBackgroundColor(presentation: Presentation, backgroundColor: string): Presentation {
    const copySlidesList: Array<Slide> = presentation.slidesList.slice()
    const currentSlide: Slide = {
        ...presentation.currentState.currentSlide,
        background: backgroundColor
    }
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
    if (presentation.currentState.currentSlide.elements[elementIndex].text === null) {
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

function changeCurrentColorFont(presentation: Presentation, color: string): Presentation {
    return {
        ...presentation,
        currentState: {
            ...presentation.currentState,
            currentColor: color
        }
    }
}

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

export {
    addElement,
    deleteElement,
    moveElement,
    changeElementSize,
    changeTextSize,
    changeCurrTextSize,
    changeTextFont,
    changeCurrentTextFont,
    changeBackgroundColor,
    changeTextColor,
    changeCurrentColorFont,
    changePrimitiveBorderColor,
    changePrimitiveFillColor
}