import {
    changeBackgroundColor, 
    changeCurrTextSize,
    showSlide
} from '../../functions/currentState'
import {Presentation} from '../../entries/entries'

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
                text: null,
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
                    primitive: {
                        primitiveType: 'circle',
                        primitiveBorderColor: '#000',
                        primitiveFillColor: '#fff'
                    },
                    text: null,
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
                text: null,
                imageElement: null
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
                    text: null,
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
    expect(changeBackgroundColor(presentationBefore, backgroundColor)).toEqual(presentationAfter)
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

test('showSlide function', () => {
    const slideIndex = 1
    const presentationBefore: Presentation = {
        name: 'New presentation',
        slidesList: [
            {
                background: '#fff',
                elements: [],
                id: '0'
            },
            {
                background: '#fff',
                elements: [],
                id: '1'
            }
        ],
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
    const presentationAfter: Presentation = {
        name: 'New presentation',
        slidesList: [
            {
                background: '#fff',
                elements: [],
                id: '0'
            },
            {
                background: '#fff',
                elements: [],
                id: '1'
            }
        ],
        currentState: {
            currentSlide: {
                background: '#fff',
                elements: [],
                id: '1'
            },
            selectedElements: [],
            currentColor: '#fff',
            currentTextSize: 14,
            currentTextFont: 'Arial',
        }
    }

    expect(showSlide(presentationBefore, slideIndex)).toEqual(presentationAfter)
})