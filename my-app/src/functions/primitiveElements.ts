import {Presentation, Element, Slide, ElementType, Primitive} from '../entries/entries'

function changePrimitiveBorderColor(presentation: Presentation, borderColor: string): Presentation {
    const copySlidesList: Array<Slide> = presentation.slidesList.slice()
    const currentSlide: Slide = {...presentation.currentState.currentSlide}
    const copyElements: Array<Element> = presentation.currentState.currentSlide.elements.slice()
    const selectedElements: Array<string> = presentation.currentState.selectedElements.slice()
    for (let i = 0; i < selectedElements.length; i++) {
        for (let j = 0; j < copyElements.length; j++) {
            console.log('copyElements[j].id === selectedElements[i]: ' + copyElements[j].id === selectedElements[i])
            if (copyElements[j].id === selectedElements[i]) {
                if (copyElements[j].elementType === ElementType.primitive) {
                    (copyElements[j] as Primitive).primitiveBorderColor = borderColor
                    copyElements[j]= {
                        ...copyElements[j] as Primitive,
                            primitiveBorderColor: borderColor
                        } as Primitive
                    }
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

function changePrimitiveFillColor(presentation: Presentation, fillColor: string): Presentation {
    const copySlidesList: Array<Slide> = presentation.slidesList.slice()
    const currentSlide: Slide = {...presentation.currentState.currentSlide}
    const copyElements: Array<Element> = presentation.currentState.currentSlide.elements.slice()
    const selectedElements: Array<string> = presentation.currentState.selectedElements.slice()
    for (let i = 0; i < selectedElements.length; i++) {
        for (let j = 0; j < copyElements.length; j++) {
            if (copyElements[j].id === selectedElements[i]) {
                if (copyElements[j].elementType === ElementType.primitive) {
                    (copyElements[j] as Primitive).primitiveFillColor = fillColor
                }
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

export {changePrimitiveBorderColor,changePrimitiveFillColor}