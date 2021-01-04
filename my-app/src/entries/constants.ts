import {Element, ElementType, Primitive} from "../entries/entries"
export const WHITE: string = 'fff'
export const BLACK: string = '000'
export const DEFAULT_PRESENTATION_NAME: string = 'Моя презентация'
export const DEFAULT_TEXT_SIZE: number = 14
export const DEFAULT_TEXT_FONT: string ='Arial'
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