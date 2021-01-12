import {Presentation, Element, Slide, Size, Position, ElementType, ImageElement, Primitive, Text, View} from '../entries/entries'
import { v4 as uuidv4 } from 'uuid'
  
function currentValues(view: View, e: Element): Element {
    if (e.elementType === ElementType.primitive) {
        return {
            ...e,
            id: uuidv4(),
            primitiveBorderColor: view.primitiveBorderColor,
            primitiveFillColor: view.primitiveFillColor
        } as Primitive
    }
    else if (e.elementType === ElementType.text) {
        return {
            ...e,
            id: uuidv4(),
            textSize: view.textSize,
            textFont: view.textFont,
            textColor: view.textColor,
            textAlign: view.textAlign,
            textBold: view.textBold,
            textItalic: view.textItalic,
            textUnderline: view.textUnderline          
        } as Text
    }
    else {
        return {
            ...e,
            id: uuidv4()
        } as ImageElement
    }
}

function addElement(presentation: Presentation, element: Element): Presentation {
    const elementsArray = presentation.model.currentSlide.elements.slice()
    element = {
        ...element,
        id: uuidv4()
        }
    elementsArray.push(element)
    const currentSlide = changeCurSlide(presentation, elementsArray)
    return {...presentation,
        model: {...presentation.model,
            slidesList: changeSlideInSlidesList(presentation, currentSlide),
            currentSlide: currentSlide,
            selectedElementsId: [element.id]
        }
    } as Presentation
}

function deleteElement(presentation: Presentation): Presentation {
    const elementsArray = presentation.model.currentSlide.elements.slice()
    const selectedElements = presentation.model.selectedElementsId
    for (let i = 0; i < selectedElements.length; i++) {
        for (let j = 0; j < elementsArray.length; j++) {
            if(elementsArray[j].id === selectedElements[i])
            {
                elementsArray.splice(j, 1)
                break
            }
        }
    }
    const currentSlide = changeCurSlide(presentation, elementsArray)
    return {...presentation,
        model: {...presentation.model,
            slidesList: changeSlideInSlidesList(presentation, currentSlide),
            currentSlide: currentSlide,
            selectedElementsId: []
        }
    } as Presentation
}

function moveElement(presentation: Presentation, position: Position): Presentation {
    const elementsArray = presentation.model.currentSlide.elements.slice()
    const selectedElements = presentation.model.selectedElementsId.slice()
    for (let i = 0; i < elementsArray.length; i++) {
        if(elementsArray[i].id === selectedElements[0])
        {
            elementsArray[i] = {
                ...presentation.model.currentSlide.elements[i],
                elementPosition: position
            }
            break
        }
    
    }
    const currentSlide = changeCurSlide(presentation, elementsArray)
    return {...presentation,
        model: {...presentation.model,
            slidesList: changeSlideInSlidesList(presentation, currentSlide),
            currentSlide: currentSlide,
            selectedElementsId: selectedElements
        }
    } as Presentation
}

function changeElementSize(presentation: Presentation, elementSize: Size): Presentation {
    const elementsArray = presentation.model.currentSlide.elements.slice()
    const selectedElements = presentation.model.selectedElementsId.slice()
    for (let i = 0; i < elementsArray.length; i++) {
        if(elementsArray[i].id === selectedElements[0])
        {
            elementsArray[i] = {
                ...presentation.model.currentSlide.elements[i],
                elementSize: elementSize
            }
            break
        }
    }
    const currentSlide = changeCurSlide(presentation, elementsArray)
    return {...presentation,
        model: {...presentation.model,
            slidesList: changeSlideInSlidesList(presentation, currentSlide),
            currentSlide: currentSlide,
            selectedElementsId: selectedElements
        }
    } as Presentation
}

function selectElements(presentation: Presentation, elementsIdArray: Array<string>): Presentation
{
    return {...presentation,
        model: {...presentation.model,
            selectedElementsId: elementsIdArray
        }
    } as Presentation
}

function findElementById(presentation: Presentation, elemId: string): Element|null {
    let elem: Element|null = null
    const elementsArray = presentation.model.currentSlide.elements
    for (let i = 0; i < elementsArray.length; i++) {
        if(elementsArray[i].id === elemId)
        {
            elem = elementsArray[i]
            break
        }
    }
    return elem    
}

function AddInPresentationObject(presentation: Presentation, newView: View, slidesList: Array<Slide>, currentSlide: Slide, copyElements: Array<Element>, selectedElements: Array<string>): Presentation {
    currentSlide.elements = copyElements
    for (let i = 0; i < slidesList.length; i++) {
        if(slidesList[i].id === currentSlide.id) {
            slidesList[i] = currentSlide
            break
        }
    }
    return {
        ...presentation,
        model: {
            ...presentation.model,
            slidesList: slidesList,
            currentSlide: currentSlide,
            selectedElementsId: selectedElements
        },
        view: newView
    } as Presentation
}

function changeSlideInSlidesList(presentation: Presentation, currentSlide: Slide): Array<Slide>
{
    const copySlidesList: Array<Slide> = presentation.model.slidesList.slice()
    for (let i = 0; i < copySlidesList.length; i++) {
        if(copySlidesList[i].id === currentSlide.id)
        {
            copySlidesList[i] = currentSlide
            break
        }
    }
    return copySlidesList
}

function changeCurSlide(presentation: Presentation, elementsArray: Array<Element>): Slide
{
    return {
        ...presentation.model.currentSlide,
        elements: elementsArray
    } as Slide
}

export {
    currentValues,
    addElement,
    deleteElement,
    moveElement,
    changeElementSize,
    findElementById,
    AddInPresentationObject,
    changeSlideInSlidesList,
    changeCurSlide,
    selectElements
}