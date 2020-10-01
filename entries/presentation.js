let currentState = {
    currentSlide: 0,
    selectedElements: [element],// Array<element>
    currentColor: '#000',
    currentTextSize: 14,
    currentTextFont: 'Ariel',
}

let presentation = {
    name: 'My presentation', 
    slidesList: slidesList,
    currentState: currentState,
  };

let slidesList = {
    slides: [slide], //Array<slide>
};

let slide = {
    background: background,
    elements: [element] //Array<element>,
};

let element = {
    elementPosition: position,
    elementSize: size,
    elementType: (text|imageElement|primitive)
};

let background = {
    backgroundType: (imageElement|'#fff')
};

let imageElement = {
    imageUrl: './images/image.png'
};

let primitive = {
    primitiveType: ('circle'|'rectangle'|'triangle'|'polygon'|'line'),
    primitiveBorderColor: '#000',
    primitiveFillColor: 'transparent'
};

let text = {
    textString: 'Текст',
    textSize: 14,
    textColor: '#000',
    textFont: 'Ariel',
};

let position = {
    x: 10,
    y: 10
};

let size = {
    width: 200,
    height: 200,
}

console.log('Hello')