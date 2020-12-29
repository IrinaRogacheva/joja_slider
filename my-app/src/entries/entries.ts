export type {Presentation, Slide, CurrentState, Size, Text, Element, Position, Primitive}
export {ElementType}

type Position = {
    x: number,
    y: number
};

type Size = {
    width: number,
    height: number
}

type Text = Element & {
    textString: string,
    textSize: number,
    textFont: string,
    textColor: string
};

type ImageElement = {
    imageUrl: string,
};

type Background = ImageElement|string;

type PrimitiveType = 'circle'|'rectangle'|'triangle'|'polygon'|'line'

type Primitive = Element & {
    primitiveType: PrimitiveType,
    primitiveBorderColor: string,
    primitiveFillColor: string
};

enum ElementType {text, primitive, image}

type Element = {
    id: string,
    elementPosition: Position,
    elementSize: Size,
    elementType: ElementType
};

type CurrentState = {
    currentSlide: Slide,
    selectedElements: Array<string>,
    currentColor: string,
    currentTextSize: number,
    currentTextFont: string,
}

type Slide = {
    background: Background,
    elements: Array<Element>
    id: string
};

type Presentation = {
    name: string, 
    slidesList: Array<Slide>,
    currentState: CurrentState, 
  };