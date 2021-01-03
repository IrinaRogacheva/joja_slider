import {Presentation} from '../entries/entries'
import { v4 as uuidv4 } from 'uuid'
import * as CONSTANTS from '../entries/constants'
export const NEW_SLIDE_ID = uuidv4()

function createPresentation(): Presentation {
    return {
        model: {
            name: CONSTANTS.DEFAULT_PRESENTATION_NAME,
            slidesList: [{
                background: CONSTANTS.WHITE,
                elements: [],
                id: NEW_SLIDE_ID
            }],
            currentSlide: {
                background: CONSTANTS.WHITE,
                elements: [],
                id: NEW_SLIDE_ID
            },
            selectedSlidesId: [],
            selectedElementsId: []
        },
        view: {
            color: CONSTANTS.WHITE,
            textSize: CONSTANTS.DEFAULT_TEXT_SIZE,
            textFont: CONSTANTS.DEFAULT_TEXT_FONT
        } 
    } as Presentation
}

function changePresentationName(presentation: Presentation, newName: string): Presentation {
    return {...presentation,
        model: {...presentation.model,
            name: newName}
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
} **/

function saveLocalPresentation(presentation: Presentation): void {
    const jsonFile = JSON.stringify(presentation)
    console.log(jsonFile)
    const jsonFileName = presentation.model.name + '.json'
    let file = new Blob([jsonFile], {type: 'json'})
    if (window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(file, jsonFileName)
    } else {
        let url = URL.createObjectURL(file)
        let a = document.createElement('a')
        a.href = url
        a.download = jsonFileName
        document.body.appendChild(a)
        a.click()
        setTimeout(function() {
            document.body.removeChild(a)
            window.URL.revokeObjectURL(url)
        }, 0)
    }
}

/**
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
    saveLocalPresentation,
    /**openLocalPresentation,
    openCloudPresentation,
    saveCloudPresentation,
    exportPresentation,
    previewPresentation*/
}