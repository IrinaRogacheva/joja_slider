import {changeTextSize, changeTextFont, changeTextColor} from '../textElements'
import {Presentation, ElementType, Text} from '../../entries/entries'
import * as CONSTANTS from '../../entries/constants'

test('changeTextSize function', () => {
    const textSize = 20
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
                        elementType: ElementType.text,
                        textString: 'Nihao Kailang',
                        textSize: CONSTANTS.DEFAULT_TEXT_SIZE,
                        textFont: CONSTANTS.DEFAULT_TEXT_FONT,
                        textColor: CONSTANTS.BLACK                
                        } as Text
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
                        elementType: ElementType.text,
                        textString: 'Nihao Kailang',
                        textSize: CONSTANTS.DEFAULT_TEXT_SIZE,
                        textFont: CONSTANTS.DEFAULT_TEXT_FONT,
                        textColor: CONSTANTS.BLACK                  
                        } as Text
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
                        elementType: ElementType.text,
                        textString: 'Nihao Kailang',
                        textSize: 20,
                        textFont: CONSTANTS.DEFAULT_TEXT_FONT,
                        textColor: CONSTANTS.BLACK                  
                        } as Text
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
                        elementType: ElementType.text,
                        textString: 'Nihao Kailang',
                        textSize: 20,
                        textFont: CONSTANTS.DEFAULT_TEXT_FONT,
                        textColor: CONSTANTS.BLACK                 
                        } as Text
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
    expect(changeTextSize(presentationBefore, textSize)).toEqual(presentationAfter)
})

test('changeTextFont function', () => {
    const textFont = 'Times New Roman'
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
                        elementType: ElementType.text,
                        textString: 'Nihao Kailang',
                        textSize: CONSTANTS.DEFAULT_TEXT_SIZE,
                        textFont: CONSTANTS.DEFAULT_TEXT_FONT,
                        textColor: CONSTANTS.BLACK                
                        } as Text
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
                        elementType: ElementType.text,
                        textString: 'Nihao Kailang',
                        textSize: CONSTANTS.DEFAULT_TEXT_SIZE,
                        textFont: CONSTANTS.DEFAULT_TEXT_FONT,
                        textColor: CONSTANTS.BLACK                  
                        } as Text
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
                        elementType: ElementType.text,
                        textString: 'Nihao Kailang',
                        textSize: CONSTANTS.DEFAULT_TEXT_SIZE,
                        textFont: 'Times New Roman',
                        textColor: CONSTANTS.BLACK                
                        } as Text
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
                        elementType: ElementType.text,
                        textString: 'Nihao Kailang',
                        textSize: CONSTANTS.DEFAULT_TEXT_SIZE,
                        textFont: 'Times New Roman',
                        textColor: CONSTANTS.BLACK                  
                        } as Text
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
    expect(changeTextFont(presentationBefore, textFont)).toEqual(presentationAfter)
})

test('changeTextColor function', () => {
    const textColor = '#D30000'
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
                        elementType: ElementType.text,
                        textString: 'Nihao Kailang',
                        textSize: CONSTANTS.DEFAULT_TEXT_SIZE,
                        textFont: CONSTANTS.DEFAULT_TEXT_FONT,
                        textColor: CONSTANTS.BLACK                
                        } as Text
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
                        elementType: ElementType.text,
                        textString: 'Nihao Kailang',
                        textSize: CONSTANTS.DEFAULT_TEXT_SIZE,
                        textFont: CONSTANTS.DEFAULT_TEXT_FONT,
                        textColor: CONSTANTS.BLACK                  
                        } as Text
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
                        elementType: ElementType.text,
                        textString: 'Nihao Kailang',
                        textSize: CONSTANTS.DEFAULT_TEXT_SIZE,
                        textFont: CONSTANTS.DEFAULT_TEXT_FONT,
                        textColor: '#D30000'                
                        } as Text
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
                        elementType: ElementType.text,
                        textString: 'Nihao Kailang',
                        textSize: CONSTANTS.DEFAULT_TEXT_SIZE,
                        textFont: CONSTANTS.DEFAULT_TEXT_FONT,
                        textColor: '#D30000'                 
                        } as Text
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
    expect(changeTextColor(presentationBefore, textColor)).toEqual(presentationAfter)
})