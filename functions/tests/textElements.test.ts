import { changeTextSize, changeCurrTextSize, changeTextFont, changeTextColor} from '../textElements'
import {Presentation} from '../../entries/entries'

test('changeTextSize function', () => {
    const elementIndex = 0
    const textSize = 20
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

test('changeTextColor function', () => {
    const elementIndex = 0
    const textColor = '#D30000'
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