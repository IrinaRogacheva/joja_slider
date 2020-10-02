type text = {
    textString: String,
    textSize: Number,
    textFont: String,
    textColor: String
};

type position = {
    x: Number,
    y: Number
};

type size = {
    width: Number,
    height: Number
}

type imageElement = {
    imageUrl: String,
};

type background = {
    image: imageElement,
    backgroundColor: Number
};

type primitive = {
    primitiveType: ('circle'|'rectangle'|'triangle'|'polygon'|'line'),
    primitiveBorderColor: String,
    primitiveFillColor: String
};

type element = {
    elementPosition: position,
    elementSize: size,
    elementType: (text|imageElement|primitive)
};

type currentState = {
    currentSlide: Number,
    selectedElements: Array<element>,
    currentColor: Number,
    currentTextSize: Number,
    currentTextFont: String,
}

type slide = {
    background: background,
    elements: Array<element>
};

type slidesList = {
    slides: Array<slide>
};

type presentation = {
    name: text, 
    slidesList: slidesList,
    currentState: currentState, 
  };