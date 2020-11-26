import {
    addElement, 
    deleteElement, 
    moveElement, 
    changeElementSize, 
    changeTextSize, 
    changeCurrTextSize, 
    changeTextFont, 
    changePrimitiveFillColor,
    changePrimitiveBorderColor, 
    changeTextColor, 
    changeBackgroundColor
} from '../../functions/elements'
import {Presentation, Element, Position, Size} from '../../entries/entries'

test('addElement function', () => {  
    const presentationBefore: Presentation = {
        name: 'New presentation',
        slidesList: [{
            background: '#fff',
            elements: [],
            id: '0'
        }],
        currentState: {
            currentSlide: {
                background: '#fff',
                elements: [],
                id: '0'
            },
            selectedElements: [],
            currentColor: '#fff',
            currentTextSize: 14,
            currentTextFont: 'Arial',
        }
    }
    const element: Element = {
        elementPosition: {
            x: 0,
            y: 0
        },
        elementSize: {
            width: 30,
            height: 30
        },
        primitive: {
            primitiveType: 'circle',
            primitiveBorderColor: '#000',
            primitiveFillColor: '#fff'
        },
        text: {
            textString: '',
            textSize: 14,
            textFont: 'Arial',
            textColor: '#000'
        },
        imageElement: {
            imageUrl: '',
        }
    }
    const presentationAfter: Presentation = {
        name: 'New presentation',
        slidesList: [{
            background: '#fff',
            elements: [{
                elementPosition: {
                    x: 0,
                    y: 0
                },
                elementSize: {
                    width: 30,
                    height: 30
                },
                primitive: {
                    primitiveType: 'circle',
                    primitiveBorderColor: '#000',
                    primitiveFillColor: '#fff'
                },
                text: {
                    textString: '',
                    textSize: 14,
                    textFont: 'Arial',
                    textColor: '#000'
                },
                imageElement: {
                    imageUrl: '',
                }
            }],
            id: '0'
        }],
        currentState: {
            currentSlide: {
                background: '#fff',
                elements: [{
                    elementPosition: {
                        x: 0,
                        y: 0
                    },
                    elementSize: {
                        width: 30,
                        height: 30
                    },
                    primitive: {
                        primitiveType: 'circle',
                        primitiveBorderColor: '#000',
                        primitiveFillColor: '#fff'
                    },
                    text: {
                        textString: '',
                        textSize: 14,
                        textFont: 'Arial',
                        textColor: '#000'
                    },
                    imageElement: {
                        imageUrl: '',
                    }
                }],
                id: '0'
            },
            selectedElements: [],
            currentColor: '#fff',
            currentTextSize: 14,
            currentTextFont: 'Arial',
        }
    }
    expect(addElement(presentationBefore, element)).toEqual(presentationAfter)
})

test('deleteElement function', () => {  
    const elementIndex = 0
    const presentationBefore: Presentation = {
        name: 'New presentation',
        slidesList: [{
            background: '#fff',
            elements: [{
                elementPosition: {
                    x: 0,
                    y: 0
                },
                elementSize: {
                    width: 30,
                    height: 30
                },
                primitive: {
                    primitiveType: 'circle',
                    primitiveBorderColor: '#000',
                    primitiveFillColor: '#fff'
                },
                text: {
                    textString: '',
                    textSize: 14,
                    textFont: 'Arial',
                    textColor: '#000'
                },
                imageElement: {
                    imageUrl: '',
                }
            }],
            id: '0'
        }],
        currentState: {
            currentSlide: {
                background: '#fff',
                elements: [{
                    elementPosition: {
                        x: 0,
                        y: 0
                    },
                    elementSize: {
                        width: 30,
                        height: 30
                    },
                    primitive: {
                        primitiveType: 'circle',
                        primitiveBorderColor: '#000',
                        primitiveFillColor: '#fff'
                    },
                    text: {
                        textString: '',
                        textSize: 14,
                        textFont: 'Arial',
                        textColor: '#000'
                    },
                    imageElement: {
                        imageUrl: '',
                    }
                }],
                id: '0'
            },
            selectedElements: [],
            currentColor: '#fff',
            currentTextSize: 14,
            currentTextFont: 'Arial',
        }
    }
    const presentationAfter: Presentation = {
        name: 'New presentation',
        slidesList: [{
            background: '#fff',
            elements: [],
            id: '0'
        }],
        currentState: {
            currentSlide: {
                background: '#fff',
                elements: [],
                id: '0'
            },
            selectedElements: [],
            currentColor: '#fff',
            currentTextSize: 14,
            currentTextFont: 'Arial',
        }
    }
    expect(deleteElement(presentationBefore, elementIndex)).toEqual(presentationAfter)
})

test('moveElement function', () => {
    const elementIndex = 0
    const position: Position = {
        x: 100,
        y: 100
    }
    const presentationBefore: Presentation = {
        name: 'New presentation',
        slidesList: [{
            background: '#fff',
            elements: [{
                elementPosition: {
                    x: 0,
                    y: 0
                },
                elementSize: {
                    width: 30,
                    height: 30
                },
                primitive: {
                    primitiveType: 'circle',
                    primitiveBorderColor: '#000',
                    primitiveFillColor: '#fff'
                },
                text: {
                    textString: '',
                    textSize: 14,
                    textFont: 'Arial',
                    textColor: '#000'
                },
                imageElement: {
                    imageUrl: '',
                }
            }],
            id: '0'
        }],
        currentState: {
            currentSlide: {
                background: '#fff',
                elements: [{
                    elementPosition: {
                        x: 0,
                        y: 0
                    },
                    elementSize: {
                        width: 30,
                        height: 30
                    },
                    primitive: {
                        primitiveType: 'circle',
                        primitiveBorderColor: '#000',
                        primitiveFillColor: '#fff'
                    },
                    text: {
                        textString: '',
                        textSize: 14,
                        textFont: 'Arial',
                        textColor: '#000'
                    },
                    imageElement: {
                        imageUrl: '',
                    }
                }],
                id: '0'
            },
            selectedElements: [],
            currentColor: '#fff',
            currentTextSize: 14,
            currentTextFont: 'Arial',
        }
    }
    const presentationAfter: Presentation = {
        name: 'New presentation',
        slidesList: [{
            background: '#fff',
            elements: [{
                elementPosition: {
                    x: 100,
                    y: 100
                },
                elementSize: {
                    width: 30,
                    height: 30
                },
                primitive: {
                    primitiveType: 'circle',
                    primitiveBorderColor: '#000',
                    primitiveFillColor: '#fff'
                },
                text: {
                    textString: '',
                    textSize: 14,
                    textFont: 'Arial',
                    textColor: '#000'
                },
                imageElement: {
                    imageUrl: '',
                }
            }],
            id: '0'
        }],
        currentState: {
            currentSlide: {
                background: '#fff',
                elements: [{
                    elementPosition: {
                        x: 100,
                        y: 100
                    },
                    elementSize: {
                        width: 30,
                        height: 30
                    },
                    primitive: {
                        primitiveType: 'circle',
                        primitiveBorderColor: '#000',
                        primitiveFillColor: '#fff'
                    },
                    text: {
                        textString: '',
                        textSize: 14,
                        textFont: 'Arial',
                        textColor: '#000'
                    },
                    imageElement: {
                        imageUrl: '',
                    }
                }],
                id: '0'
            },
            selectedElements: [],
            currentColor: '#fff',
            currentTextSize: 14,
            currentTextFont: 'Arial',
        }
    }
    expect(moveElement(presentationBefore, elementIndex, position)).toEqual(presentationAfter)
})

test('changeElementSize function', () => {
    const elementIndex = 0
    const size: Size = {
        width: 100,
        height: 100
    }
    const presentationBefore: Presentation = {
        name: 'New presentation',
        slidesList: [{
            background: '#fff',
            elements: [{
                elementPosition: {
                    x: 0,
                    y: 0
                },
                elementSize: {
                    width: 30,
                    height: 30
                },
                primitive: {
                    primitiveType: 'circle',
                    primitiveBorderColor: '#000',
                    primitiveFillColor: '#fff'
                },
                text: {
                    textString: '',
                    textSize: 14,
                    textFont: 'Arial',
                    textColor: '#000'
                },
                imageElement: {
                    imageUrl: '',
                }
            }],
            id: '0'
        }],
        currentState: {
            currentSlide: {
                background: '#fff',
                elements: [{
                    elementPosition: {
                        x: 0,
                        y: 0
                    },
                    elementSize: {
                        width: 30,
                        height: 30
                    },
                    primitive: {
                        primitiveType: 'circle',
                        primitiveBorderColor: '#000',
                        primitiveFillColor: '#fff'
                    },
                    text: {
                        textString: '',
                        textSize: 14,
                        textFont: 'Arial',
                        textColor: '#000'
                    },
                    imageElement: {
                        imageUrl: '',
                    }
                }],
                id: '0'
            },
            selectedElements: [],
            currentColor: '#fff',
            currentTextSize: 14,
            currentTextFont: 'Arial',
        }
    }
    const presentationAfter: Presentation = {
        name: 'New presentation',
        slidesList: [{
            background: '#fff',
            elements: [{
                elementPosition: {
                    x: 0,
                    y: 0
                },
                elementSize: {
                    width: 100,
                    height: 100
                },
                primitive: {
                    primitiveType: 'circle',
                    primitiveBorderColor: '#000',
                    primitiveFillColor: '#fff'
                },
                text: {
                    textString: '',
                    textSize: 14,
                    textFont: 'Arial',
                    textColor: '#000'
                },
                imageElement: {
                    imageUrl: '',
                }
            }],
            id: '0'
        }],
        currentState: {
            currentSlide: {
                background: '#fff',
                elements: [{
                    elementPosition: {
                        x: 0,
                        y: 0
                    },
                    elementSize: {
                        width: 100,
                        height: 100
                    },
                    primitive: {
                        primitiveType: 'circle',
                        primitiveBorderColor: '#000',
                        primitiveFillColor: '#fff'
                    },
                    text: {
                        textString: '',
                        textSize: 14,
                        textFont: 'Arial',
                        textColor: '#000'
                    },
                    imageElement: {
                        imageUrl: '',
                    }
                }],
                id: '0'
            },
            selectedElements: [],
            currentColor: '#fff',
            currentTextSize: 14,
            currentTextFont: 'Arial',
        }
    }
    expect(changeElementSize(presentationBefore, elementIndex, size)).toEqual(presentationAfter)
})

test('changeTextSize function', () => {
    const elementIndex = 0
    const textSize = 20
    const presentationBefore: Presentation = {
        name: 'New presentation',
        slidesList: [{
            background: '#fff',
            elements: [{
                elementPosition: {
                    x: 0,
                    y: 0
                },
                elementSize: {
                    width: 30,
                    height: 30
                },
                primitive: null,
                text: {
                    textString: '',
                    textSize: 14,
                    textFont: 'Arial',
                    textColor: '#000'
                },
                imageElement: null
            }],
            id: '0'
        }],
        currentState: {
            currentSlide: {
                background: '#fff',
                elements: [{
                    elementPosition: {
                        x: 0,
                        y: 0
                    },
                    elementSize: {
                        width: 30,
                        height: 30
                    },
                    primitive: null,
                    text: {
                        textString: '',
                        textSize: 14,
                        textFont: 'Arial',
                        textColor: '#000'
                    },
                    imageElement: null
                }],
                id: '0'
            },
            selectedElements: [],
            currentColor: '#fff',
            currentTextSize: 14,
            currentTextFont: 'Arial',
        }
    }
    const presentationAfter: Presentation = {
        name: 'New presentation',
        slidesList: [{
            background: '#fff',
            elements: [{
                elementPosition: {
                    x: 0,
                    y: 0
                },
                elementSize: {
                    width: 30,
                    height: 30
                },
                primitive: null,
                text: {
                    textString: '',
                    textSize: 20,
                    textFont: 'Arial',
                    textColor: '#000'
                },
                imageElement: null
            }],
            id: '0'
        }],
        currentState: {
            currentSlide: {
                background: '#fff',
                elements: [{
                    elementPosition: {
                        x: 0,
                        y: 0
                    },
                    elementSize: {
                        width: 30,
                        height: 30
                    },
                    primitive: null,
                    text: {
                        textString: '',
                        textSize: 20,
                        textFont: 'Arial',
                        textColor: '#000'
                    },
                    imageElement: null
                }],
                id: '0'
            },
            selectedElements: [],
            currentColor: '#fff',
            currentTextSize: 14,
            currentTextFont: 'Arial',
        }
    }
    expect(changeTextSize(presentationBefore, elementIndex, textSize)).toEqual(presentationAfter)
})

test('changeCurrTextSize function', () => {
    const textSize = 20
    const presentationBefore: Presentation = {
        name: 'New presentation',
        slidesList: [{
            background: '#fff',
            elements: [{
                elementPosition: {
                    x: 0,
                    y: 0
                },
                elementSize: {
                    width: 30,
                    height: 30
                },
                primitive: null,
                text: {
                    textString: '',
                    textSize: 14,
                    textFont: 'Arial',
                    textColor: '#000'
                },
                imageElement: null
            }],
            id: '0'
        }],
        currentState: {
            currentSlide: {
                background: '#fff',
                elements: [{
                    elementPosition: {
                        x: 0,
                        y: 0
                    },
                    elementSize: {
                        width: 30,
                        height: 30
                    },
                    primitive: null,
                    text: {
                        textString: '',
                        textSize: 14,
                        textFont: 'Arial',
                        textColor: '#000'
                    },
                    imageElement: null
                }],
                id: '0'
            },
            selectedElements: [],
            currentColor: '#fff',
            currentTextSize: 14,
            currentTextFont: 'Arial',
        }
    }
    const presentationAfter: Presentation = {
        name: 'New presentation',
        slidesList: [{
            background: '#fff',
            elements: [{
                elementPosition: {
                    x: 0,
                    y: 0
                },
                elementSize: {
                    width: 30,
                    height: 30
                },
                primitive: null,
                text: {
                    textString: '',
                    textSize: 14,
                    textFont: 'Arial',
                    textColor: '#000'
                },
                imageElement: null
            }],
            id: '0'
        }],
        currentState: {
            currentSlide: {
                background: '#fff',
                elements: [{
                    elementPosition: {
                        x: 0,
                        y: 0
                    },
                    elementSize: {
                        width: 30,
                        height: 30
                    },
                    primitive: null,
                    text: {
                        textString: '',
                        textSize: 14,
                        textFont: 'Arial',
                        textColor: '#000'
                    },
                    imageElement: null
                }],
                id: '0'
            },
            selectedElements: [],
            currentColor: '#fff',
            currentTextSize: 20,
            currentTextFont: 'Arial',
        }
    }
    expect(changeCurrTextSize(presentationBefore, textSize)).toEqual(presentationAfter)
})

test('changeTextFont function', () => {
    const elementIndex = 0
    const textFont = 'Tahoma'
    const presentationBefore: Presentation = {
        name: 'New presentation',
        slidesList: [{
            background: '#fff',
            elements: [{
                elementPosition: {
                    x: 0,
                    y: 0
                },
                elementSize: {
                    width: 30,
                    height: 30
                },
                primitive: {
                    primitiveType: 'circle',
                    primitiveBorderColor: '#000',
                    primitiveFillColor: '#fff'
                },
                text: {
                    textString: '',
                    textSize: 14,
                    textFont: 'Arial',
                    textColor: '#000'
                },
                imageElement: {
                    imageUrl: '',
                }
            }],
            id: '0'
        }],
        currentState: {
            currentSlide: {
                background: '#fff',
                elements: [{
                    elementPosition: {
                        x: 0,
                        y: 0
                    },
                    elementSize: {
                        width: 30,
                        height: 30
                    },
                    primitive: {
                        primitiveType: 'circle',
                        primitiveBorderColor: '#000',
                        primitiveFillColor: '#fff'
                    },
                    text: {
                        textString: '',
                        textSize: 14,
                        textFont: 'Arial',
                        textColor: '#000'
                    },
                    imageElement: {
                        imageUrl: '',
                    }
                }],
                id: '0'
            },
            selectedElements: [],
            currentColor: '#fff',
            currentTextSize: 14,
            currentTextFont: 'Arial',
        }
    }
    const presentationAfter: Presentation = {
        name: 'New presentation',
        slidesList: [{
            background: '#fff',
            elements: [{
                elementPosition: {
                    x: 0,
                    y: 0
                },
                elementSize: {
                    width: 30,
                    height: 30
                },
                primitive: {
                    primitiveType: 'circle',
                    primitiveBorderColor: '#000',
                    primitiveFillColor: '#fff'
                },
                text: {
                    textString: '',
                    textSize: 14,
                    textFont: 'Tahoma',
                    textColor: '#000'
                },
                imageElement: {
                    imageUrl: '',
                }
            }],
            id: '0'
        }],
        currentState: {
            currentSlide: {
                background: '#fff',
                elements: [{
                    elementPosition: {
                        x: 0,
                        y: 0
                    },
                    elementSize: {
                        width: 30,
                        height: 30
                    },
                    primitive: {
                        primitiveType: 'circle',
                        primitiveBorderColor: '#000',
                        primitiveFillColor: '#fff'
                    },
                    text: {
                        textString: '',
                        textSize: 14,
                        textFont: 'Tahoma',
                        textColor: '#000'
                    },
                    imageElement: {
                        imageUrl: '',
                    }
                }],
                id: '0'
            },
            selectedElements: [],
            currentColor: '#fff',
            currentTextSize: 14,
            currentTextFont: 'Arial',
        }
    }
    expect(changeTextFont(presentationBefore, elementIndex, textFont)).toEqual(presentationAfter)
})

test('changePrimitiveFillColor function', () => {
    const elementIndex = 0
    const primitiveFillColor = '#D30000'
    const presentationBefore: Presentation = {
        name: 'New presentation',
        slidesList: [{
            background: '#fff',
            elements: [{
                elementPosition: {
                    x: 0,
                    y: 0
                },
                elementSize: {
                    width: 30,
                    height: 30
                },
                primitive: {
                    primitiveType: 'circle',
                    primitiveBorderColor: '#000',
                    primitiveFillColor: '#fff'
                },
                text: {
                    textString: '',
                    textSize: 14,
                    textFont: 'Arial',
                    textColor: '#000'
                },
                imageElement: {
                    imageUrl: '',
                }
            }],
            id: '0'
        }],
        currentState: {
            currentSlide: {
                background: '#fff',
                elements: [{
                    elementPosition: {
                        x: 0,
                        y: 0
                    },
                    elementSize: {
                        width: 30,
                        height: 30
                    },
                    primitive: {
                        primitiveType: 'circle',
                        primitiveBorderColor: '#000',
                        primitiveFillColor: '#fff'
                    },
                    text: {
                        textString: '',
                        textSize: 14,
                        textFont: 'Arial',
                        textColor: '#000'
                    },
                    imageElement: {
                        imageUrl: '',
                    }
                }],
                id: '0'
            },
            selectedElements: [],
            currentColor: '#fff',
            currentTextSize: 14,
            currentTextFont: 'Arial',
        }
    }
    const presentationAfter: Presentation = {
        name: 'New presentation',
        slidesList: [{
            background: '#fff',
            elements: [{
                elementPosition: {
                    x: 0,
                    y: 0
                },
                elementSize: {
                    width: 30,
                    height: 30
                },
                primitive: {
                    primitiveType: 'circle',
                    primitiveBorderColor: '#000',
                    primitiveFillColor: '#D30000'
                },
                text: {
                    textString: '',
                    textSize: 14,
                    textFont: 'Arial',
                    textColor: '#000'
                },
                imageElement: {
                    imageUrl: '',
                }
            }],
            id: '0'
        }],
        currentState: {
            currentSlide: {
                background: '#fff',
                elements: [{
                    elementPosition: {
                        x: 0,
                        y: 0
                    },
                    elementSize: {
                        width: 30,
                        height: 30
                    },
                    primitive: {
                        primitiveType: 'circle',
                        primitiveBorderColor: '#000',
                        primitiveFillColor: '#D30000'
                    },
                    text: {
                        textString: '',
                        textSize: 14,
                        textFont: 'Arial',
                        textColor: '#000'
                    },
                    imageElement: {
                        imageUrl: '',
                    }
                }],
                id: '0'
            },
            selectedElements: [],
            currentColor: '#fff',
            currentTextSize: 14,
            currentTextFont: 'Arial',
        }
    }
    expect(changePrimitiveFillColor(presentationBefore, elementIndex, primitiveFillColor)).toEqual(presentationAfter)
})

test('changePrimitiveBorderColor function', () => {
    const elementIndex = 0
    const primitiveBorderColor = '#fff'
    const presentationBefore: Presentation = {
        name: 'New presentation',
        slidesList: [{
            background: '#fff',
            elements: [{
                elementPosition: {
                    x: 0,
                    y: 0
                },
                elementSize: {
                    width: 30,
                    height: 30
                },
                primitive: {
                    primitiveType: 'circle',
                    primitiveBorderColor: '#000',
                    primitiveFillColor: '#fff'
                },
                text: {
                    textString: '',
                    textSize: 14,
                    textFont: 'Arial',
                    textColor: '#000'
                },
                imageElement: {
                    imageUrl: '',
                }
            }],
            id: '0'
        }],
        currentState: {
            currentSlide: {
                background: '#fff',
                elements: [{
                    elementPosition: {
                        x: 0,
                        y: 0
                    },
                    elementSize: {
                        width: 30,
                        height: 30
                    },
                    primitive: {
                        primitiveType: 'circle',
                        primitiveBorderColor: '#000',
                        primitiveFillColor: '#fff'
                    },
                    text: {
                        textString: '',
                        textSize: 14,
                        textFont: 'Arial',
                        textColor: '#000'
                    },
                    imageElement: {
                        imageUrl: '',
                    }
                }],
                id: '0'
            },
            selectedElements: [],
            currentColor: '#fff',
            currentTextSize: 14,
            currentTextFont: 'Arial',
        }
    }
    const presentationAfter: Presentation = {
        name: 'New presentation',
        slidesList: [{
            background: '#fff',
            elements: [{
                elementPosition: {
                    x: 0,
                    y: 0
                },
                elementSize: {
                    width: 30,
                    height: 30
                },
                primitive: {
                    primitiveType: 'circle',
                    primitiveBorderColor: '#fff',
                    primitiveFillColor: '#fff'
                },
                text: {
                    textString: '',
                    textSize: 14,
                    textFont: 'Arial',
                    textColor: '#000'
                },
                imageElement: {
                    imageUrl: '',
                }
            }],
            id: '0'
        }],
        currentState: {
            currentSlide: {
                background: '#fff',
                elements: [{
                    elementPosition: {
                        x: 0,
                        y: 0
                    },
                    elementSize: {
                        width: 30,
                        height: 30
                    },
                    primitive: {
                        primitiveType: 'circle',
                        primitiveBorderColor: '#fff',
                        primitiveFillColor: '#fff'
                    },
                    text: {
                        textString: '',
                        textSize: 14,
                        textFont: 'Arial',
                        textColor: '#000'
                    },
                    imageElement: {
                        imageUrl: '',
                    }
                }],
                id: '0'
            },
            selectedElements: [],
            currentColor: '#fff',
            currentTextSize: 14,
            currentTextFont: 'Arial',
        }
    }
    expect(changePrimitiveBorderColor(presentationBefore, elementIndex, primitiveBorderColor)).toEqual(presentationAfter)
})

test('changeTextColor function', () => {
    const elementIndex = 0
    const textColor = '#D30000'
    const presentationBefore: Presentation = {
        name: 'New presentation',
        slidesList: [{
            background: '#fff',
            elements: [{
                elementPosition: {
                    x: 0,
                    y: 0
                },
                elementSize: {
                    width: 30,
                    height: 30
                },
                primitive: {
                    primitiveType: 'circle',
                    primitiveBorderColor: '#000',
                    primitiveFillColor: '#fff'
                },
                text: {
                    textString: '',
                    textSize: 14,
                    textFont: 'Arial',
                    textColor: '#000'
                },
                imageElement: {
                    imageUrl: '',
                }
            }],
            id: '0'
        }],
        currentState: {
            currentSlide: {
                background: '#fff',
                elements: [{
                    elementPosition: {
                        x: 0,
                        y: 0
                    },
                    elementSize: {
                        width: 30,
                        height: 30
                    },
                    primitive: {
                        primitiveType: 'circle',
                        primitiveBorderColor: '#000',
                        primitiveFillColor: '#fff'
                    },
                    text: {
                        textString: '',
                        textSize: 14,
                        textFont: 'Arial',
                        textColor: '#000'
                    },
                    imageElement: {
                        imageUrl: '',
                    }
                }],
                id: '0'
            },
            selectedElements: [],
            currentColor: '#fff',
            currentTextSize: 14,
            currentTextFont: 'Arial',
        }
    }
    const presentationAfter: Presentation = {
        name: 'New presentation',
        slidesList: [{
            background: '#fff',
            elements: [{
                elementPosition: {
                    x: 0,
                    y: 0
                },
                elementSize: {
                    width: 30,
                    height: 30
                },
                primitive: {
                    primitiveType: 'circle',
                    primitiveBorderColor: '#000',
                    primitiveFillColor: '#fff'
                },
                text: {
                    textString: '',
                    textSize: 14,
                    textFont: 'Arial',
                    textColor: '#D30000'
                },
                imageElement: {
                    imageUrl: '',
                }
            }],
            id: '0'
        }],
        currentState: {
            currentSlide: {
                background: '#fff',
                elements: [{
                    elementPosition: {
                        x: 0,
                        y: 0
                    },
                    elementSize: {
                        width: 30,
                        height: 30
                    },
                    primitive: {
                        primitiveType: 'circle',
                        primitiveBorderColor: '#000',
                        primitiveFillColor: '#fff'
                    },
                    text: {
                        textString: '',
                        textSize: 14,
                        textFont: 'Arial',
                        textColor: '#D30000'
                    },
                    imageElement: {
                        imageUrl: '',
                    }
                }],
                id: '0'
            },
            selectedElements: [],
            currentColor: '#fff',
            currentTextSize: 14,
            currentTextFont: 'Arial',
        }
    }
    expect(changeTextColor(presentationBefore, elementIndex, textColor)).toEqual(presentationAfter)
})

test('changeBackgroundColor function', () => {
    const backgroundColor = '#000'

    const presentationBefore: Presentation = {
        name: 'New presentation',
        slidesList: [{
            background: '#fff',
            elements: [{
                elementPosition: {
                    x: 0,
                    y: 0
                },
                elementSize: {
                    width: 30,
                    height: 30
                },
                primitive: {
                    primitiveType: 'circle',
                    primitiveBorderColor: '#000',
                    primitiveFillColor: '#fff'
                },
                text: {
                    textString: '',
                    textSize: 14,
                    textFont: 'Arial',
                    textColor: '#000'
                },
                imageElement: {
                    imageUrl: '',
                }
            }],
            id: '0'
        }],
        currentState: {
            currentSlide: {
                background: '#fff',
                elements: [{
                    elementPosition: {
                        x: 0,
                        y: 0
                    },
                    elementSize: {
                        width: 30,
                        height: 30
                    },
                    primitive: {
                        primitiveType: 'circle',
                        primitiveBorderColor: '#000',
                        primitiveFillColor: '#fff'
                    },
                    text: {
                        textString: '',
                        textSize: 14,
                        textFont: 'Arial',
                        textColor: '#000'
                    },
                    imageElement: {
                        imageUrl: '',
                    }
                }],
                id: '0'
            },
            selectedElements: [],
            currentColor: '#fff',
            currentTextSize: 14,
            currentTextFont: 'Arial',
        }
    }
    const presentationAfter: Presentation = {
        name: 'New presentation',
        slidesList: [{
            background: '#000',
            elements: [{
                elementPosition: {
                    x: 0,
                    y: 0
                },
                elementSize: {
                    width: 30,
                    height: 30
                },
                primitive: {
                    primitiveType: 'circle',
                    primitiveBorderColor: '#000',
                    primitiveFillColor: '#fff'
                },
                text: {
                    textString: '',
                    textSize: 14,
                    textFont: 'Arial',
                    textColor: '#000'
                },
                imageElement: {
                    imageUrl: '',
                }
            }],
            id: '0'
        }],
        currentState: {
            currentSlide: {
                background: '#000',
                elements: [{
                    elementPosition: {
                        x: 0,
                        y: 0
                    },
                    elementSize: {
                        width: 30,
                        height: 30
                    },
                    primitive: {
                        primitiveType: 'circle',
                        primitiveBorderColor: '#000',
                        primitiveFillColor: '#fff'
                    },
                    text: {
                        textString: '',
                        textSize: 14,
                        textFont: 'Arial',
                        textColor: '#000'
                    },
                    imageElement: {
                        imageUrl: '',
                    }
                }],
                id: '0'
            },
            selectedElements: [],
            currentColor: '#fff',
            currentTextSize: 14,
            currentTextFont: 'Arial',
        }
    }
    expect(changeBackgroundColor(presentationBefore, backgroundColor)).toEqual(presentationAfter)
})