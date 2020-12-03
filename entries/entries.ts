export {Presentation, Slide, CurrentState, Size, Text, Element, Position, Primitive}

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

type Background = ImageElement|string;

type PrimitiveType = 'circle'|'rectangle'|'triangle'|'polygon'|'line'

type Primitive = {
    primitiveType: PrimitiveType,
    primitiveBorderColor: string,
    primitiveFillColor: string
};

type Element = {
    id: string,
    elementPosition: Position,
    elementSize: Size,
    primitive: Primitive|null,
    text: Text|null,
    imageElement: ImageElement|null
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