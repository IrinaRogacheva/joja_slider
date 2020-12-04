import {
    addElement, 
    deleteElement, 
    moveElement, 
    changeElementSize,
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
        id: '1',
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
                id: '1',
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
                    id: '1',
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
    const presentationBefore: Presentation = {
        name: 'New presentation',
        slidesList: [{
            background: '#fff',
            elements: [{
                id: '1',
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
            },
            {
                id: '3',
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
                text: null,
                imageElement: null
            },
            {
                id: '2',
                elementPosition: {
                    x: 0,
                    y: 0
                },
                elementSize: {
                    width: 30,
                    height: 30
                },
                primitive: null,
                text: null,
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
                    id: '1',
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
                },
                {
                    id: '3',
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
                    text: null,
                    imageElement: null
                },
                {
                    id: '2',
                    elementPosition: {
                        x: 0,
                        y: 0
                    },
                    elementSize: {
                        width: 30,
                        height: 30
                    },
                    primitive: null,
                    text: null,
                    imageElement: {
                        imageUrl: '',
                    }
                }],
                id: '0'
            },
            selectedElements: ['1', '2'],
            currentColor: '#fff',
            currentTextSize: 14,
            currentTextFont: 'Arial',
        }
    }
    const presentationAfter: Presentation = {
        name: 'New presentation',
        slidesList: [{
            background: '#fff',
            elements: [
                {
                    id: '3',
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
                    text: null,
                    imageElement: null
                }
            ],
            id: '0'
        }],
        currentState: {
            currentSlide: {
                background: '#fff',
                elements: [
                    {
                        id: '3',
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
                        text: null,
                        imageElement: null
                    }
                ],
                id: '0'
            },
            selectedElements: [],
            currentColor: '#fff',
            currentTextSize: 14,
            currentTextFont: 'Arial',
        }
    }
    expect(deleteElement(presentationBefore)).toEqual(presentationAfter)
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
                id: '1',
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
                    id: '1',
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
                id: '1',
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
                    id: '1',
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
                id: '1',
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
                    id: '1',
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
                id: '1',
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
                    id: '1',
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

test('changeBackgroundColor function', () => {
    const backgroundColor = '#000'

    const presentationBefore: Presentation = {
        name: 'New presentation',
        slidesList: [{
            background: '#fff',
            elements: [{
                id: '1',
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
                    id: '1',
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
                id: '1',
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
                    id: '1',
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