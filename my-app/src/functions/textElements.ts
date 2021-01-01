import {Presentation, Element, Slide, Text, ElementType} from '../entries/entries'

function changeTextSize(presentation: Presentation, textSize: number): Presentation {
    const copySlidesList: Array<Slide> = presentation.model.slidesList.slice()
    const currentSlide: Slide = {...presentation.model.currentSlide}
    const copyElements: Array<Element> = presentation.model.currentSlide.elements.slice()
    const selectedElements: Array<string> = presentation.model.selectedElementsId.slice()
    for (let i = 0; i < selectedElements.length; i++) {
        for (let j = 0; j < copyElements.length; j++) {
            if (copyElements[j].id === selectedElements[i]) {
                if (copyElements[j].elementType === ElementType.text) {
                    (copyElements[j] as Text) = {
                        ...(copyElements[j] as Text),
                        textSize: textSize
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

function changeTextFont(presentation: Presentation, textFont: string): Presentation {
    const copySlidesList: Array<Slide> = presentation.model.slidesList.slice()
    const currentSlide: Slide = {...presentation.model.currentSlide}
    const copyElements: Array<Element> = presentation.model.currentSlide.elements.slice()
    const selectedElements: Array<string> = presentation.model.selectedElementsId.slice()
    for (let i = 0; i < selectedElements.length; i++) {
        for (let j = 0; j < copyElements.length; j++) {
            if (copyElements[j].id === selectedElements[i]) {
                if (copyElements[j].elementType === ElementType.text) {
                    (copyElements[j] as Text) = {
                        ...(copyElements[j] as Text),
                        textFont: textFont
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

function changeTextColor(presentation: Presentation,  textColor: string): Presentation {
    const copySlidesList: Array<Slide> = presentation.model.slidesList.slice()
    const currentSlide: Slide = {...presentation.model.currentSlide}
    const copyElements: Array<Element> = presentation.model.currentSlide.elements.slice()
    const selectedElements: Array<string> = presentation.model.selectedElementsId.slice()
    for (let i = 0; i < selectedElements.length; i++) {
        for (let j = 0; j < copyElements.length; j++) {
            if (copyElements[j].id === selectedElements[i]) {
                if (copyElements[j].elementType === ElementType.text) {
                    (copyElements[j] as Text) = {
                        ...(copyElements[j] as Text),
                        textColor: textColor
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


export {
    changeTextSize,
    changeTextFont,
    changeTextColor
}