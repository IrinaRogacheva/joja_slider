import {Presentation} from '../entries/entries'
import { v4 as uuidv4 } from 'uuid'
import * as CONSTANTS from '../entries/constants'
export const NEW_SLIDE_ID = uuidv4()

function createPresentation(): Presentation {
    const presentation: Presentation = {
        name: CONSTANTS.DEFAULT_PRESENTATION_NAME,
        slidesList: [{
            background: CONSTANTS.WHITE,
            elements: [],
            id: NEW_SLIDE_ID
        }],
        currentState: {
            currentSlide: {
                background: CONSTANTS.WHITE,
                elements: [],
                id: NEW_SLIDE_ID
            },
            selectedElements: [],
            currentColor: CONSTANTS.WHITE,
            currentTextSize: CONSTANTS.DEFAULT_TEXT_SIZE,
            currentTextFont: CONSTANTS.DEFAULT_TEXT_FONT,
        }
    }
    return presentation
}

function changePresentationName(presentation: Presentation, newName: string): Presentation {
    return {
        ...presentation,
        name: newName
    }
}

/**
function openLocalPresentation(jsonFile: string): Presentation {
    const presentation: Presentation = JSON.parse(jsonFile)
    return presentation
}

function openCloudPresentation(urlFile: string): Presentation {
    let presentation: Presentation
    return presentation
}

function exportPresentation(presentation: Presentation): string {
    let pdfFile: string
    return pdfFile
}

function saveLocalPresentation(presentation: Presentation): string {
    const jsonFile = JSON.stringify(presentation) 
    return jsonFile
}

function saveCloudPresentation(presentation: Presentation): string {
    let urlFile: string
    return urlFile
}

function previewPresentation(presentation: Presentation): Array<Slide> {
    let slideshow: Array<Slide> 
    return slideshow
}
**/
export {
    createPresentation,
    changePresentationName,
    /**openLocalPresentation,
    openCloudPresentation,
    saveLocalPresentation,
    saveCloudPresentation,
    exportPresentation,
    previewPresentation*/
}