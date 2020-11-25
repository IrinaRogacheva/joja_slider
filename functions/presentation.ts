import {Presentation, Slide} from '../entries/entries'
import { empty } from 'uuidv4'

function createPresentation(): Presentation {
    const presentation: Presentation = {
        name: 'New presentation',
        slidesList: [{
            background: {backgroundColor: '#fff', image: null},
            elements: [],
            id: empty()
        }],
        currentState: {
            currentSlide: {
                background: {backgroundColor: '#fff', image: null},
                elements: [],
                id: empty()
            },
            selectedElements: [],
            currentColor: '#fff',
            currentTextSize: 14,
            currentTextFont: 'Arial',
        }
    }
    return presentation
}

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

export {
    createPresentation,
    openLocalPresentation,
    openCloudPresentation,
    saveLocalPresentation,
    saveCloudPresentation,
    exportPresentation,
    previewPresentation
}