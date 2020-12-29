import {changePrimitiveFillColor, changePrimitiveBorderColor} from '../../functions/primitiveElements'
import {Presentation, ElementType, Primitive} from '../../entries/entries'

test('changePrimitiveFillColor function', () => {
    const primitiveFillColor = '#D30000'
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
                elementType: ElementType.primitive,
                primitiveType: 'circle',
                primitiveBorderColor: '#000',
                primitiveFillColor: '#fff'
                
            } as Primitive],
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
                    elementType: ElementType.primitive,
                    primitiveType: 'circle',
                    primitiveBorderColor: '#000',
                    primitiveFillColor: '#fff'
                } as Primitive],
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
                elementType: ElementType.primitive,
                primitiveType: 'circle',
                primitiveBorderColor: '#000',
                primitiveFillColor: '#D30000'
            } as Primitive],
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
                    elementType: ElementType.primitive,
                    primitiveType: 'circle',
                    primitiveBorderColor: '#000',
                    primitiveFillColor: '#D30000'
                } as Primitive],
                id: '0'
            },
            selectedElements: [],
            currentColor: '#fff',
            currentTextSize: 14,
            currentTextFont: 'Arial',
        }
    }
    expect(changePrimitiveFillColor(presentationBefore, primitiveFillColor)).toEqual(presentationAfter)
})
/** 
test('changePrimitiveBorderColor function', () => {
    const elementIndex = 0
    const primitiveBorderColor = '#fff'
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
})*/