export type {
    Presentation, 
    Slide, 
    Size, 
    Text, 
    Element, 
    Position, 
    Primitive, 
    ImageElement,
    ColorString,
    View,
    History
}

export {ElementType, BackgroundType} 

type Position = {
    x: number,
    y: number
};

type Size = {
    width: number,
    height: number
}

enum ElementType {text, primitive, image}

type Text = Element & {
    elementType: ElementType.text,
    textString: string,
    textSize: number,
    textFont: string,
    textColor: string,
    textAlign: string,
    textBold: string,
    textItalic: string,
    textUnderline: string
};

enum BackgroundType {image, string}

type ColorString = BackgroundType & {
    color: string,
    type: BackgroundType.string
}

type ImageElement = Element & BackgroundType & {
    elementType: ElementType.image,
    imageUrl: string,
    type: BackgroundType.image
} 

type PrimitiveType = 'circle'|'rectangle'|'triangle'

type Primitive = Element & {
    elementType: ElementType.primitive,
    primitiveType: PrimitiveType,
    primitiveBorderColor: string,
    primitiveFillColor: string
};

type Element = {
    id: string,
    elementPosition: Position,
    elementSize: Size,
    elementType: ElementType
};

type Slide = {
    background: BackgroundType,
    elements: Array<Element>,  
    id: string
};

type Model = {
    name: string, 
    slidesList: Array<Slide>,
    currentSlide: Slide,
    selectedSlidesId: Array<string>,
    selectedElementsId: Array<string>
}

type View = {
    textColor: string,
    textSize: number,
    textFont: string,
    textAlign: string,
    textBold: string,
    textItalic: string,
    textUnderline: string,
    primitiveBorderColor: string,
    primitiveFillColor: string,
    background: BackgroundType,
    b: boolean
}

type Presentation = {
    model: Model,
    view: View
}

type History = {
    stateHistory: Array<Presentation>,
    b: boolean,
    currentIndex: number
}