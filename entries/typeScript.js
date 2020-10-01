let currentState = {
    currentSlide: Number,
    selection: Array<element>,
    currentColor: Number,
}

let presentation = {
    name: text, 
    slidesList: slidesList,
    workSpace: currentState   
  };

let slidesList = {
    slides: Array //of Object slide
};

let slide = {
    background: background,
    elements: Array<element>,
};

let element = {
    elementPosition: position,
    elementSize: size,
    elementType: type //text, imageElement, primitive
};

let background = {
    image: imageElement,
    backgroundColor: Number
};

let imageElement = {
    imageUrl: String,
};

let primitive = {
    primitiveType: type, //kakie-to figuri,
    primitiveColor: Number
};

//type = ('circle'|'rectangle'|....)
let text = {
    textString: String,
    textSize: Number,
    textFont: String,
    textColor: Number,
};

let position = {
    x: Number,
    y: Number
};

let size = {
    width: 100,
    height: 200,
}

let size = {
    width: Number,
    height: Number
};