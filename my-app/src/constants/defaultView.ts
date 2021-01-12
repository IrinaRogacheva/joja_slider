import { BackgroundType, ColorString, ElementType, ImageElement } from "../entries/entries"

export const WHITE: string = 'fff'
export const BLACK: string = '000'
export const DEFAULT_PRESENTATION_NAME: string = 'Моя презентация'
export const DEFAULT_TEXT_SIZE: number = 14
export const DEFAULT_TEXT_FONT: string = 'Tahoma'
export const DEFAULT_TEXT_ALIGN: string = 'left'
export const DEFAULT_TEXT_BOLD: string = 'normal'
export const DEFAULT_TEXT_ITALIC: string = 'normal'
export const DEFAULT_TEXT_UNDERLINE: string = 'none'

export const WHITE_BACK_COLOR = {
    color: 'fff',
    type: BackgroundType.string
} as ColorString

export const BLACK_BACK_COLOR = {
    color: 'fff',
    type: BackgroundType.string
} as ColorString

export const BACKGROUND: BackgroundType = {
    elementType: ElementType.image,
    imageUrl: '',  
    type: BackgroundType.image 
} as ImageElement