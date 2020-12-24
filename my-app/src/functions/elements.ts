import {Presentation, Element, Slide, Size, Position} from '../entries/entries'
       
function addElement(presentation: Presentation, element: Element): Presentation {
    const elementsArray = presentation.currentState.currentSlide.elements.slice()
    elementsArray.push(element)
    const currentSlide = changeCurrentSlide(presentation, elementsArray)
    return {
        ...presentation,
        slidesList: changeSlideInSlidesList(presentation, currentSlide),
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
    const currentSlide = changeCurrentSlide(presentation, elementsArray)
    return {
        ...presentation,
        slidesList: changeSlideInSlidesList(presentation, currentSlide),
        currentState: {
            ...presentation.currentState,
            currentSlide: currentSlide,
            selectedElements: []
        }
    }
}

function moveElement(presentation: Presentation, position: Position): Presentation {
    const elementsArray = presentation.currentState.currentSlide.elements.slice()
    const selectedElements = presentation.currentState.selectedElements.slice()
    for (let i = 0; i < elementsArray.length; i++) {
        if(elementsArray[i].id === selectedElements[0])
        {
            elementsArray[i] = {
                ...presentation.currentState.currentSlide.elements[i],
                elementPosition: position
            }
            break
        }
    
    }
    const currentSlide = changeCurrentSlide(presentation, elementsArray)
    return {
        ...presentation,
        slidesList: changeSlideInSlidesList(presentation, currentSlide),
        currentState: {
            ...presentation.currentState,
            currentSlide: currentSlide,
            selectedElements: []
        }
    }
}

function changeElementSize(presentation: Presentation, elementIndex: number, elementSize: Size): Presentation {
    const elementsArray = presentation.currentState.currentSlide.elements.slice()
    const selectedElements = presentation.currentState.selectedElements
    for (let i = 0; i < elementsArray.length; i++) {
        if(elementsArray[i].id === selectedElements[0])
        {
            elementsArray[i] = {
                ...presentation.currentState.currentSlide.elements[i],
                elementSize: elementSize
            }
            break
        }
    
    }
    const currentSlide = changeCurrentSlide(presentation, elementsArray)
    return {
        ...presentation,
        slidesList: changeSlideInSlidesList(presentation, currentSlide),
        currentState: {
            ...presentation.currentState,
            currentSlide: currentSlide,
            selectedElements: []
        }
    }    
}

function changeSlideInSlidesList(presentation: Presentation, currentSlide: Slide): Array<Slide>
{
    const copySlidesList: Array<Slide> = presentation.slidesList.slice()
    for (let i = 0; i < copySlidesList.length; i++) {
        if(copySlidesList[i].id === currentSlide.id)
        {
            copySlidesList[i] = currentSlide
            break
        }
    }
    return copySlidesList
}

function changeCurrentSlide(presentation: Presentation, elementsArray: Array<Element>): Slide
{
    return {
        ...presentation.currentState.currentSlide,
        elements: elementsArray
    }
}

export {
    addElement,
    deleteElement,
    moveElement,
    changeElementSize,
    changeSlideInSlidesList,
    changeCurrentSlide
}