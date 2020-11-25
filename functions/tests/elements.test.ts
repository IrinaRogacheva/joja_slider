import {addElement, deleteElement, moveElement} from '../../functions/elements'
import {Presentation, Element, Position} from '../../entries/entries'

test('addElement function', () => {  
    const presentationBefore: Presentation = {
        name: 'New presentation',
        slidesList: [{
            background: {backgroundColor: '#fff', image: null},
            elements: [],
            id: '0'
        }],
        currentState: {
            currentSlide: {
                background: {backgroundColor: '#fff', image: null},
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
            background: {backgroundColor: '#fff', image: null},
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
                background: {backgroundColor: '#fff', image: null},
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
            background: {backgroundColor: '#fff', image: null},
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
                background: {backgroundColor: '#fff', image: null},
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
            background: {backgroundColor: '#fff', image: null},
            elements: [],
            id: '0'
        }],
        currentState: {
            currentSlide: {
                background: {backgroundColor: '#fff', image: null},
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
            background: {backgroundColor: '#fff', image: null},
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
                background: {backgroundColor: '#fff', image: null},
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
            background: {backgroundColor: '#fff', image: null},
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
                background: {backgroundColor: '#fff', image: null},
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