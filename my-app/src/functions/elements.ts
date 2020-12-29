import {Presentation, Element, Slide, Size, Position} from '../entries/entries'
       
function addElement(presentation: Presentation, element: Element): Presentation {
    const elementsArray = presentation.model.currentSlide.elements.slice()
    elementsArray.push(element)
    const currentSlide = changeCurSlide(presentation, elementsArray)
    return {...presentation,
        model: {...presentation.model,
            slidesList: changeSlideInSlidesList(presentation, currentSlide),
            currentSlide: currentSlide
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
    addElement,
    deleteElement,
    moveElement,
    changeElementSize,
    changeSlideInSlidesList,
    changeCurSlide,
    selectElements
}