import {Presentation, Element, Slide, ElementType, Primitive} from '../entries/entries'

function changePrimitiveBorderColor(presentation: Presentation, borderColor: string): Presentation {
    const copySlidesList: Array<Slide> = presentation.model.slidesList.slice()
    const currentSlide: Slide = {...presentation.model.currentSlide}
    const copyElements: Array<Element> = presentation.model.currentSlide.elements.slice()
    const selectedElements: Array<string> = presentation.model.selectedElementsId.slice()
    for (let i = 0; i < selectedElements.length; i++) {
        for (let j = 0; j < copyElements.length; j++) {
            if (copyElements[j].id === selectedElements[i]) {
                if (copyElements[j].elementType === ElementType.primitive) {
                    (copyElements[j] as Primitive) = {
                        ...(copyElements[j] as Primitive),
                        primitiveBorderColor: borderColor
                    }
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

    return {...presentation,
        model: {...presentation.model,
            slidesList: copySlidesList,
            currentSlide: currentSlide,
            selectedElementsId: selectedElements
        }
    } as Presentation
}

function changePrimitiveFillColor(presentation: Presentation, fillColor: string): Presentation {
    const copySlidesList: Array<Slide> = presentation.model.slidesList.slice()
    const currentSlide: Slide = {...presentation.model.currentSlide}
    const copyElements: Array<Element> = presentation.model.currentSlide.elements.slice()
    const selectedElements: Array<string> = presentation.model.selectedElementsId.slice()
    console.log(presentation.model.currentSlide.elements)
    for (let i = 0; i < selectedElements.length; i++) {
        for (let j = 0; j < copyElements.length; j++) {
            if (copyElements[j].id === selectedElements[i]) {
                if (copyElements[j].elementType === ElementType.primitive) {
                    (copyElements[j] as Primitive) = {
                        ...(copyElements[j] as Primitive),
                        primitiveFillColor: fillColor
                    }
                }
            }
        }
    }
    console.log(presentation.model.currentSlide.elements)
    currentSlide.elements = copyElements
    for (let i = 0; i < copySlidesList.length; i++) {
        if(copySlidesList[i].id === currentSlide.id)
        {
            copySlidesList[i] = currentSlide
            break
        }
    }
    return {...presentation,
        model: {...presentation.model,
            slidesList: copySlidesList,
            currentSlide: currentSlide,
            selectedElementsId: selectedElements
        }
    } as Presentation
}

export {changePrimitiveBorderColor,changePrimitiveFillColor}