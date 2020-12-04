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

function deleteElement(presentation: Presentation): Presentation {
    const elementsArray = presentation.currentState.currentSlide.elements.slice()
    const selectedElements = presentation.currentState.selectedElements
    for (let i = 0; i < selectedElements.length; i++) {
        for (let j = 0; j < elementsArray.length; j++) {
            if(elementsArray[j].id === selectedElements[i])
            {
                elementsArray.splice(j, 1)
                break
            }
        }
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
            currentSlide: currentSlide,
            selectedElements: []
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

export {
    addElement,
    deleteElement,
    moveElement,
    changeElementSize,
    changeBackgroundColor,
    selectElements
}