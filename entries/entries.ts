export {
    Presentation, Slide, CurrentState, Size, Text, Element, Position, Primitive
}

type Text = {
    textString: string,
    textSize: number,
    textFont: string,
    textColor: string
};

type Position = {
    x: number,
    y: number
};

type Size = {
    width: number,
    height: number
}

type ImageElement = {
    imageUrl: string,
};

type Background = {
    image: ImageElement,
    backgroundColor: string
};

type PrimitiveType = 
    'circle'|
    'rectangle'|
    'triangle'|
    'polygon'|
    'line'


type Primitive = {
    primitiveType: PrimitiveType,
    primitiveBorderColor: string,
    primitiveFillColor: string
};

type ElementType = 'text'|'primitive'|'imageElement'

type Element = {
    elementPosition: Position,
    elementSize: Size,
    //elementType: elementType,
    primitive: Primitive,
    text: Text,
    imageElement: ImageElement
};

type CurrentState = {
    currentSlide: Slide,
    selectedElements: Array<Element>,
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