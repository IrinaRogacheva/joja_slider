import {Presentation, Element, Slide, Text, ElementType} from '../entries/entries'


function changeTextSize(presentation: Presentation, textSize: number): Presentation {
    const copySlidesList: Array<Slide> = presentation.model.slidesList.slice()
    const currentSlide: Slide = {...presentation.model.currentSlide}
    const copyElements: Array<Element> = presentation.model.currentSlide.elements.slice()
    const selectedElements: Array<string> = presentation.model.selectedElementsId.slice()
    for (let i = 0; i < copyElements.length; i++) {
        if (selectedElements.includes(copyElements[i].id)) {
            if (copyElements[i].elementType === ElementType.text) {
                (copyElements[i] as Text) = {
                    ...(copyElements[i] as Text),
                    textSize: textSize
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
    for (let i = 0; i < copyElements.length; i++) {
        if (selectedElements.includes(copyElements[i].id)) {
            if (copyElements[i].elementType === ElementType.text) {
                (copyElements[i] as Text) = {
                    ...(copyElements[i] as Text),
                    textFont: textFont
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
    for (let i = 0; i < copyElements.length; i++) {
        if (selectedElements.includes(copyElements[i].id)) {
            if (copyElements[i].elementType === ElementType.text) {
                (copyElements[i] as Text) = {
                    ...(copyElements[i] as Text),
                    textColor: textColor
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
