import {Presentation, View,Element, Slide, ElementType, Primitive} from '../entries/entries'
import {changeCurrentPrimitiveBorderColor, changeCurrentPrimitiveFillColor} from '../functions/view'
import {AddInPresentationObject} from './elements'

function changePrimitiveBorderColor(presentation: Presentation, borderColor: string): Presentation {
    const selectedElements: Array<string> = presentation.model.selectedElementsId.slice()
    const copySlidesList: Array<Slide> = presentation.model.slidesList.slice()
    const currentSlide: Slide = {...presentation.model.currentSlide}
    const copyElements: Array<Element> = presentation.model.currentSlide.elements.slice()
    const newView: View = changeCurrentPrimitiveBorderColor(presentation.view, borderColor)
    for (let i = 0; i < copyElements.length; i++) {
        if (selectedElements.includes(copyElements[i].id)) {
            if (copyElements[i].elementType === ElementType.primitive) {
                (copyElements[i] as Primitive) = {
                    ...(copyElements[i] as Primitive),
                    primitiveBorderColor: newView.primitiveBorderColor
                }
            }
        }
    }
    return (AddInPresentationObject(presentation, newView, copySlidesList, currentSlide, copyElements, selectedElements))
}

function changePrimitiveFillColor(presentation: Presentation, fillColor: string): Presentation {
    const selectedElements: Array<string> = presentation.model.selectedElementsId.slice()
    const copySlidesList: Array<Slide> = presentation.model.slidesList.slice()
    const currentSlide: Slide = {...presentation.model.currentSlide}
    const copyElements: Array<Element> = presentation.model.currentSlide.elements.slice()
    const newView: View = changeCurrentPrimitiveFillColor(presentation.view, fillColor)
    for (let i = 0; i < copyElements.length; i++) {
        if (selectedElements.includes(copyElements[i].id)) {
            if (copyElements[i].elementType === ElementType.primitive) {
                (copyElements[i] as Primitive) = {
                    ...(copyElements[i] as Primitive),
                    primitiveFillColor: newView.primitiveFillColor
                }
            }
        }
    }
    return (AddInPresentationObject(presentation, newView, copySlidesList, currentSlide, copyElements, selectedElements))
}

export {changePrimitiveBorderColor,changePrimitiveFillColor}