import {Presentation, Element, ElementType, Primitive, ImageElement, ColorString, BackgroundType, Text} from "../entries/entries"
import { v4 as uuidv4 } from 'uuid'
const NEW_SLIDE_ID = uuidv4()

export const WHITE: string = 'fff'
export const BLACK: string = '000'
export const DEFAULT_PRESENTATION_NAME: string = 'Моя презентация'
export const DEFAULT_TEXT_SIZE: number = 14
export const DEFAULT_TEXT_FONT: string ='Arial'

export const WHITE_BACK_COLOR = {
    color: 'fff',
    type: BackgroundType.string
} as ColorString

export const BLACK_BACK_COLOR = {
    color: 'fff',
    type: BackgroundType.string
} as ColorString

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

export const NEW_PRESENTATION: Presentation = {
    model: { 
        name: DEFAULT_PRESENTATION_NAME, 
        slidesList: [{ 
            background: WHITE_BACK_COLOR, 
            elements: [], 
            id: NEW_SLIDE_ID  
        }], 
        currentSlide: { 
            background: WHITE_BACK_COLOR, 
            elements: [], 
            id: NEW_SLIDE_ID 
        }, 
        selectedSlidesId: [], 
        selectedElementsId: [] 
    }, 
    view: { 
        color: WHITE, 
        textSize: DEFAULT_TEXT_SIZE, 
        textFont: DEFAULT_TEXT_FONT 
    } 
} as Presentation         

export const BACKGROUND: BackgroundType = {
    elementType: ElementType.image,
    imageUrl: '',  
    type: BackgroundType.image 
} as ImageElement

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
    textSize: 14,
    textFont: 'Tahoma',
    textColor: WHITE  
} as Text