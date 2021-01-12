import {Element, ElementType, Primitive, ImageElement, Text} from "../entries/entries"
import { WHITE, BLACK } from "./defaultView"

export let IMAGE: Element = {
    id: '',
    elementPosition: {
        x: 50,
        y: 50
    },
    elementSize: {
        width: 200,
        height: 200
    },
    elementType: ElementType.image,
    imageUrl: '',
} as ImageElement

export const PRIMITIVE_CIRCLE: Element = {
    id: '',
    elementPosition: {
        x: 50,
        y: 50
    },
    elementSize: {
        width: 200,
        height: 200
    },
    elementType: ElementType.primitive,
    primitiveType: 'circle',
    primitiveBorderColor: BLACK,
    primitiveFillColor: WHITE
} as Primitive 
    
export const PRIMITIVE_RECTANGLE: Element = {
    id: '',
    elementPosition: {
        x: 50,
        y: 50
    },
    elementSize: {
        width: 200,
        height: 200
    },
    elementType: ElementType.primitive,
    primitiveType: 'rectangle',
    primitiveBorderColor: BLACK,
    primitiveFillColor: WHITE
} as Primitive
    
export const PRIMITIVE_TRIANGLE: Element = {
    id: '',
    elementPosition: {
        x: 50,
        y: 50
    },
    elementSize: {
        width: 200,
        height: 173
    },
    elementType: ElementType.primitive,
    primitiveType: 'triangle',
    primitiveBorderColor: BLACK,
    primitiveFillColor: WHITE
} as Primitive

export let TEXT: Element = {
    id: '',
    elementPosition: {
        x: 50,
        y: 50
    },
    elementSize: {
        width: 200,
        height: 200
    },
    elementType: ElementType.text,
    textString: 'Введите текст',
    textSize: 0,
    textFont: '',
    textColor: '',
    textAlign: '',
    textBold: '',
    textItalic: '',
    textUnderline: '',
} as Text