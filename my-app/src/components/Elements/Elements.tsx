import {Element, ElementType, Primitive} from '../../entries/entries'
import React from 'react'
import { drawEllipse, drawRectangle, drawTriangle } from './drawPrimitive'
import { drawText } from './drawText'
import { drawImage } from './drawImage'
import { selectedElemBorder } from '../../constants/styles'

function Elem(e: Element, scale: number, props: any) {
    let elem
    const selectStrokeWidth = 1
    const resizeCircleRad = 5

    let borderStyle: string = 'none'
    if (props.state.model.selectedElementsId.includes(e.id)) {
        borderStyle = selectedElemBorder
    } else {
        borderStyle = 'none'
    }

    if (e.elementType === ElementType.primitive) {
        const strokeWidth = 3*scale
        if ((e as Primitive).primitiveType === 'circle') {
            elem = drawEllipse(e, scale, strokeWidth, selectStrokeWidth, resizeCircleRad, borderStyle)
        }
        else if ((e as Primitive).primitiveType === 'triangle') {
            elem = drawTriangle(e, scale, strokeWidth, selectStrokeWidth, resizeCircleRad, borderStyle)
        }
        else if ((e as Primitive).primitiveType === 'rectangle') {
            elem = drawRectangle(e, scale, strokeWidth, selectStrokeWidth, resizeCircleRad, borderStyle)
        }
    }
    else if (e.elementType === ElementType.text) {
        elem = drawText(props, e, scale, selectStrokeWidth, resizeCircleRad, borderStyle)
    }
    else if (e.elementType === ElementType.image) {
      elem = drawImage(e, scale, selectStrokeWidth, resizeCircleRad, borderStyle)
    }
    
    return elem
}

export {Elem}