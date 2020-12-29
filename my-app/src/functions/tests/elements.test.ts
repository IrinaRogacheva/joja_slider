import {addElement, deleteElement, moveElement, changeElementSize} from '../../functions/elements'
import {Presentation, Position, Size, Primitive, ElementType} from '../../entries/entries'
import * as CONSTANTS from '../../entries/constants'

test('addElement function', () => {  
    const element = {
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
        primitiveBorderColor: CONSTANTS.BLACK,
        primitiveFillColor: CONSTANTS.WHITE
    } as Primitive

    const presentationBefore: Presentation = {
        model: {
            name: CONSTANTS.DEFAULT_PRESENTATION_NAME,
            slidesList: [{
                background: CONSTANTS.WHITE,
                elements: [],
                id: '0'
            }],
            currentSlide: {
                background: CONSTANTS.WHITE,
                elements: [],
                id: '0'
            },
            selectedSlidesId: [],
            selectedElementsId: []
        },
        view: {
            color: CONSTANTS.WHITE,
            textSize: CONSTANTS.DEFAULT_TEXT_SIZE,
            textFont: CONSTANTS.DEFAULT_TEXT_FONT
        } 
    }

    const presentationAfter: Presentation = {
        model: {
            name: CONSTANTS.DEFAULT_PRESENTATION_NAME,
            slidesList: [{
                background: CONSTANTS.WHITE,
                elements: [
                    {
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
                        primitiveBorderColor: CONSTANTS.BLACK,
                        primitiveFillColor: CONSTANTS.WHITE
                    } as Primitive
                ],
                id: '0'
            }],
            currentSlide: {
                background: CONSTANTS.WHITE,
                elements: [
                    {
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
                        primitiveBorderColor: CONSTANTS.BLACK,
                        primitiveFillColor: CONSTANTS.WHITE
                    } as Primitive
                ],
                id: '0'
            },
            selectedSlidesId: [],
            selectedElementsId: []
        },
        view: {
            color: CONSTANTS.WHITE,
            textSize: CONSTANTS.DEFAULT_TEXT_SIZE,
            textFont: CONSTANTS.DEFAULT_TEXT_FONT
        } 
    }
    expect(addElement(presentationBefore, element)).toEqual(presentationAfter)
})

test('deleteElement function', () => {  
    const presentationBefore: Presentation = {
        model: {
            name: CONSTANTS.DEFAULT_PRESENTATION_NAME,
            slidesList: [{
                background: CONSTANTS.WHITE,
                elements: [
                    {
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
                        primitiveBorderColor: CONSTANTS.BLACK,
                        primitiveFillColor: CONSTANTS.WHITE
                    } as Primitive
                ],
                id: '0'
            }],
            currentSlide: {
                background: CONSTANTS.WHITE,
                elements: [
                    {
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
                        primitiveBorderColor: CONSTANTS.BLACK,
                        primitiveFillColor: CONSTANTS.WHITE
                    } as Primitive
                ],
                id: '0'
            },
            selectedSlidesId: [],
            selectedElementsId: ['1']
        },
        view: {
            color: CONSTANTS.WHITE,
            textSize: CONSTANTS.DEFAULT_TEXT_SIZE,
            textFont: CONSTANTS.DEFAULT_TEXT_FONT
        } 
    }
    const presentationAfter: Presentation = {
        model: {
            name: CONSTANTS.DEFAULT_PRESENTATION_NAME,
            slidesList: [{
                background: CONSTANTS.WHITE,
                elements: [],
                id: '0'
            }],
            currentSlide: {
                background: CONSTANTS.WHITE,
                elements: [],
                id: '0'
            },
            selectedSlidesId: [],
            selectedElementsId: []
        },
        view: {
            color: CONSTANTS.WHITE,
            textSize: CONSTANTS.DEFAULT_TEXT_SIZE,
            textFont: CONSTANTS.DEFAULT_TEXT_FONT
        } 
    }
    expect(deleteElement(presentationBefore)).toEqual(presentationAfter)
})

test('moveElement function', () => {
    const position: Position = {
        x: 100,
        y: 100
    }
    const presentationBefore: Presentation = {
        model: {
            name: CONSTANTS.DEFAULT_PRESENTATION_NAME,
            slidesList: [{
                background: CONSTANTS.WHITE,
                elements: [
                    {
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
                        primitiveBorderColor: CONSTANTS.BLACK,
                        primitiveFillColor: CONSTANTS.WHITE
                    } as Primitive
                ],
                id: '0'
            }],
            currentSlide: {
                background: CONSTANTS.WHITE,
                elements: [
                    {
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
                        primitiveBorderColor: CONSTANTS.BLACK,
                        primitiveFillColor: CONSTANTS.WHITE
                    } as Primitive
                ],
                id: '0'
            },
            selectedSlidesId: [],
            selectedElementsId: []
        },
        view: {
            color: CONSTANTS.WHITE,
            textSize: CONSTANTS.DEFAULT_TEXT_SIZE,
            textFont: CONSTANTS.DEFAULT_TEXT_FONT
        } 
    }
    const presentationAfter: Presentation = {
        model: {
            name: CONSTANTS.DEFAULT_PRESENTATION_NAME,
            slidesList: [{
                background: CONSTANTS.WHITE,
                elements: [
                    {
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
                        primitiveBorderColor: CONSTANTS.BLACK,
                        primitiveFillColor: CONSTANTS.WHITE
                    } as Primitive
                ],
                id: '0'
            }],
            currentSlide: {
                background: CONSTANTS.WHITE,
                elements: [
                    {
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
                        primitiveBorderColor: CONSTANTS.BLACK,
                        primitiveFillColor: CONSTANTS.WHITE
                    } as Primitive
                ],
                id: '0'
            },
            selectedSlidesId: [],
            selectedElementsId: []
        },
        view: {
            color: CONSTANTS.WHITE,
            textSize: CONSTANTS.DEFAULT_TEXT_SIZE,
            textFont: CONSTANTS.DEFAULT_TEXT_FONT
        } 
    }
    expect(moveElement(presentationBefore, position)).toEqual(presentationAfter)
})

test('changeElementSize function', () => {
    const size: Size = {
        width: 100,
        height: 100
    }
    const presentationBefore: Presentation = {
        model: {
            name: CONSTANTS.DEFAULT_PRESENTATION_NAME,
            slidesList: [{
                background: CONSTANTS.WHITE,
                elements: [
                    {
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
                        primitiveBorderColor: CONSTANTS.BLACK,
                        primitiveFillColor: CONSTANTS.WHITE
                    } as Primitive
                ],
                id: '0'
            }],
            currentSlide: {
                background: CONSTANTS.WHITE,
                elements: [
                    {
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
                        primitiveBorderColor: CONSTANTS.BLACK,
                        primitiveFillColor: CONSTANTS.WHITE
                    } as Primitive
                ],
                id: '0'
            },
            selectedSlidesId: [],
            selectedElementsId: ['1']
        },
        view: {
            color: CONSTANTS.WHITE,
            textSize: CONSTANTS.DEFAULT_TEXT_SIZE,
            textFont: CONSTANTS.DEFAULT_TEXT_FONT
        } 
    }
    const presentationAfter: Presentation = {
        model: {
            name: CONSTANTS.DEFAULT_PRESENTATION_NAME,
            slidesList: [{
                background: CONSTANTS.WHITE,
                elements: [
                    {
                        id: '1',
                        elementPosition: {
                            x: 0,
                            y: 0
                        },
                        elementSize: {
                            width: 100,
                            height: 100
                        },
                        elementType: ElementType.primitive,
                        primitiveType: 'circle',
                        primitiveBorderColor: CONSTANTS.BLACK,
                        primitiveFillColor: CONSTANTS.WHITE
                    } as Primitive
                ],
                id: '0'
            }],
            currentSlide: {
                background: CONSTANTS.WHITE,
                elements: [
                    {
                        id: '1',
                        elementPosition: {
                            x: 0,
                            y: 0
                        },
                        elementSize: {
                            width: 100,
                            height: 100
                        },
                        elementType: ElementType.primitive,
                        primitiveType: 'circle',
                        primitiveBorderColor: CONSTANTS.BLACK,
                        primitiveFillColor: CONSTANTS.WHITE
                    } as Primitive
                ],
                id: '0'
            },
            selectedSlidesId: [],
            selectedElementsId: []
        },
        view: {
            color: CONSTANTS.WHITE,
            textSize: CONSTANTS.DEFAULT_TEXT_SIZE,
            textFont: CONSTANTS.DEFAULT_TEXT_FONT
        } 
    }
    expect(changeElementSize(presentationBefore, size)).toEqual(presentationAfter)
})