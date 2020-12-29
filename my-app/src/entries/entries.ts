export type {Presentation, Slide, Size, Text, Element, Position, Primitive}
export {ElementType}

type Position = {
    x: number,
    y: number
};

type Size = {
    width: number,
    height: number
}

type Background = ImageElement|string;

enum ElementType {text, primitive, image}

type Text = Element & {
    elementType: ElementType.text,
    textString: string,
    textSize: number,
    textFont: string,
    textColor: string
};

type ImageElement = {
    elementType: ElementType.image,
    imageUrl: string,
};

type PrimitiveType = 'circle'|'rectangle'|'triangle'|'polygon'|'line'

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
    background: Background,
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
    color: string,
    textSize: number,
    textFont: string
}

type Presentation = {
    model: Model,
    view: View
}