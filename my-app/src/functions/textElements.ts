import {Presentation, View, Element, Slide, Text, ElementType} from '../entries/entries'
import {changeCurrentTextSize, changeCurrentTextAlign, changeCurrentTextFont, changeCurrentTextColor, changeCurrentTextBold, changeCurrentTextItalic, changeCurrentTextUnderline} from '../functions/view'
import {AddInPresentationObject} from './elements'

function addText(presentation: Presentation, textString: string): Presentation {
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
                        textString: textString
                    }
                }
            }
        }
    }
    currentSlide.elements = copyElements
    for (let i = 0; i < copySlidesList.length; i++) {
        if(copySlidesList[i].id === currentSlide.id) {
            copySlidesList[i] = currentSlide
            break
        }
    }
    return {
        ...presentation,
        model: {
            ...presentation.model,
            slidesList: copySlidesList,
            currentSlide: currentSlide,
            selectedElementsId: selectedElements
        }
    } as Presentation
}

function changeTextSize(presentation: Presentation, textSize: number): Presentation {
    const selectedElements: Array<string> = presentation.model.selectedElementsId.slice()
    const copySlidesList: Array<Slide> = presentation.model.slidesList.slice()
    const currentSlide: Slide = {...presentation.model.currentSlide}
    const copyElements: Array<Element> = presentation.model.currentSlide.elements.slice()
    const newView: View = changeCurrentTextSize(presentation.view, textSize)
    for (let i = 0; i < selectedElements.length; i++) {
        for (let j = 0; j < copyElements.length; j++) {
            if (copyElements[j].id === selectedElements[i]) {
                if (copyElements[j].elementType === ElementType.text) {
                    (copyElements[j] as Text) = {
                        ...(copyElements[j] as Text),
                        textSize: newView.textSize
                    }
                }
            }
        }
    }
    return (AddInPresentationObject(presentation, newView, copySlidesList, currentSlide, copyElements, selectedElements))
}

function changeTextFont(presentation: Presentation, textFont: string): Presentation {
    const selectedElements: Array<string> = presentation.model.selectedElementsId.slice()
    const copySlidesList: Array<Slide> = presentation.model.slidesList.slice()
    const currentSlide: Slide = {...presentation.model.currentSlide}
    const copyElements: Array<Element> = presentation.model.currentSlide.elements.slice()
    const newView: View = changeCurrentTextFont(presentation.view, textFont)
    for (let i = 0; i < selectedElements.length; i++) {
        for (let j = 0; j < copyElements.length; j++) {
            if (copyElements[j].id === selectedElements[i]) {
                if (copyElements[j].elementType === ElementType.text) {
                    (copyElements[j] as Text) = {
                        ...(copyElements[j] as Text),
                        textFont: newView.textFont
                    }
                }
            }
        }
    }
    return (AddInPresentationObject(presentation, newView, copySlidesList, currentSlide, copyElements, selectedElements))
}

function changeTextColor(presentation: Presentation,  textColor: string): Presentation {
    const selectedElements: Array<string> = presentation.model.selectedElementsId.slice()
    const copySlidesList: Array<Slide> = presentation.model.slidesList.slice()
    const currentSlide: Slide = {...presentation.model.currentSlide}
    const copyElements: Array<Element> = presentation.model.currentSlide.elements.slice()
    const newView: View = changeCurrentTextColor(presentation.view, textColor)
    for (let i = 0; i < selectedElements.length; i++) {
        for (let j = 0; j < copyElements.length; j++) {
            if (copyElements[j].id === selectedElements[i]) {
                if (copyElements[j].elementType === ElementType.text) {
                    (copyElements[j] as Text) = {
                        ...(copyElements[j] as Text),
                        textColor: newView.textColor
                    }
                }
            }
        }
    }
    currentSlide.elements = copyElements
    for (let i = 0; i < copySlidesList.length; i++) {
        if(copySlidesList[i].id === currentSlide.id) {
            copySlidesList[i] = currentSlide
            break
        }
    }
    return {
        ...presentation,
        model: {
            ...presentation.model,
            slidesList: copySlidesList,
            currentSlide: currentSlide,
            selectedElementsId: selectedElements
            },
        view: newView
    } as Presentation
}

function changeTextAlign(presentation: Presentation, textAlign: string): Presentation {
    const selectedElements: Array<string> = presentation.model.selectedElementsId.slice()
    const copySlidesList: Array<Slide> = presentation.model.slidesList.slice()
    const currentSlide: Slide = {...presentation.model.currentSlide}
    const copyElements: Array<Element> = presentation.model.currentSlide.elements.slice()
    const newView: View = changeCurrentTextAlign(presentation.view, textAlign)
    for (let i = 0; i < selectedElements.length; i++) {
        for (let j = 0; j < copyElements.length; j++) {
            if (copyElements[j].id === selectedElements[i]) {
                if (copyElements[j].elementType === ElementType.text) {
                    (copyElements[j] as Text) = {
                        ...(copyElements[j] as Text),
                        textAlign: newView.textAlign
                    }
                }
            }
        }
    }
    currentSlide.elements = copyElements
    for (let i = 0; i < copySlidesList.length; i++) {
        if(copySlidesList[i].id === currentSlide.id) {
            copySlidesList[i] = currentSlide
            break
        }
    }
    return {
        ...presentation,
        model: {
            ...presentation.model,
            slidesList: copySlidesList,
            currentSlide: currentSlide,
            selectedElementsId: selectedElements
        },
        view: newView
    } as Presentation
}

function changeTextBold(presentation: Presentation): Presentation {
    const selectedElements: Array<string> = presentation.model.selectedElementsId.slice()
    const copySlidesList: Array<Slide> = presentation.model.slidesList.slice()
    const currentSlide: Slide = {...presentation.model.currentSlide}
    const copyElements: Array<Element> = presentation.model.currentSlide.elements.slice()
    const newView: View = changeCurrentTextBold(presentation.view)
    for (let i = 0; i < selectedElements.length; i++) {
        for (let j = 0; j < copyElements.length; j++) {
            if (copyElements[j].id === selectedElements[i]) {
                if (copyElements[j].elementType === ElementType.text) {
                    (copyElements[j] as Text) = {
                        ...(copyElements[j] as Text),
                        textBold: newView.textBold
                    }
                }
            }
        }
    }
    currentSlide.elements = copyElements
    for (let i = 0; i < copySlidesList.length; i++) {
        if(copySlidesList[i].id === currentSlide.id) {
            copySlidesList[i] = currentSlide
            break
        }
    }
    return {
        ...presentation,
        model: {
            ...presentation.model,
            slidesList: copySlidesList,
            currentSlide: currentSlide,
            selectedElementsId: selectedElements
        },
        view: newView
    } as Presentation
}

function changeTextItalic(presentation: Presentation): Presentation {
    const selectedElements: Array<string> = presentation.model.selectedElementsId.slice()
    const copySlidesList: Array<Slide> = presentation.model.slidesList.slice()
    const currentSlide: Slide = {...presentation.model.currentSlide}
    const copyElements: Array<Element> = presentation.model.currentSlide.elements.slice()
    const newView: View = changeCurrentTextItalic(presentation.view)
    for (let i = 0; i < selectedElements.length; i++) {
        for (let j = 0; j < copyElements.length; j++) {
            if (copyElements[j].id === selectedElements[i]) {
                if (copyElements[j].elementType === ElementType.text) {
                    (copyElements[j] as Text) = {
                        ...(copyElements[j] as Text),
                        textItalic: newView.textItalic
                    }
                }
            }
        }
    }
    currentSlide.elements = copyElements
    for (let i = 0; i < copySlidesList.length; i++) {
        if(copySlidesList[i].id === currentSlide.id) {
            copySlidesList[i] = currentSlide
            break
        }
    }
    return {
        ...presentation,
        model: {
            ...presentation.model,
            slidesList: copySlidesList,
            currentSlide: currentSlide,
            selectedElementsId: selectedElements
        },
        view: newView
    } as Presentation
}
function changeTextUnderline(presentation: Presentation): Presentation {
    const selectedElements: Array<string> = presentation.model.selectedElementsId.slice()
    const copySlidesList: Array<Slide> = presentation.model.slidesList.slice()
    const currentSlide: Slide = {...presentation.model.currentSlide}
    const copyElements: Array<Element> = presentation.model.currentSlide.elements.slice()
    const newView: View = changeCurrentTextUnderline(presentation.view)
    for (let i = 0; i < selectedElements.length; i++) {
        for (let j = 0; j < copyElements.length; j++) {
            if (copyElements[j].id === selectedElements[i]) {
                if (copyElements[j].elementType === ElementType.text) {
                    (copyElements[j] as Text) = {
                        ...(copyElements[j] as Text),
                        textUnderline: newView.textUnderline
                    }
                }
            }
        }
    }
    currentSlide.elements = copyElements
    for (let i = 0; i < copySlidesList.length; i++) {
        if(copySlidesList[i].id === currentSlide.id) {
            copySlidesList[i] = currentSlide
            break
        }
    }
    return {
        ...presentation,
        model: {
            ...presentation.model,
            slidesList: copySlidesList,
            currentSlide: currentSlide,
            selectedElementsId: selectedElements
        },
        view: newView
    } as Presentation
}

export {
    changeTextSize,
    changeTextFont,
    changeTextColor,
    addText,
    changeTextAlign,
    changeTextBold,
    changeTextItalic,
    changeTextUnderline
}