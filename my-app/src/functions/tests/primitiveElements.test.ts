import {changePrimitiveFillColor, changePrimitiveBorderColor} from '../primitiveElements'
import {Presentation, ElementType, Primitive} from '../../entries/entries'
import * as CONSTANTS from '../../entries/constants'

test('changePrimitiveFillColor function', () => {
    const primitiveFillColor = '#D30000'
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
                            width: 30,
                            height: 30
                        },
                        elementType: ElementType.primitive,
                        primitiveType: 'circle',
                        primitiveBorderColor: CONSTANTS.BLACK,
                        primitiveFillColor: '#D30000'
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
                        primitiveFillColor: '#D30000'
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
    expect(changePrimitiveFillColor(presentationBefore, primitiveFillColor)).toEqual(presentationAfter)
})

test('changePrimitiveBorderColor function', () => {
    const borderColor = '#D30000'
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
                            width: 30,
                            height: 30
                        },
                        elementType: ElementType.primitive,
                        primitiveType: 'circle',
                        primitiveBorderColor: '#D30000',
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
                        primitiveBorderColor: '#D30000',
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
    expect(changePrimitiveBorderColor(presentationBefore, borderColor)).toEqual(presentationAfter)
})