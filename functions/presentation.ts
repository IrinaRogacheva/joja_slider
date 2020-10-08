import {presentation, slidesList, slide} from '../entries/entries'

export {
    createPresentation,
    openLocalPresentation,
    openCloudPresentation,
    exportPresentation,
    saveLocalPresentation,
    saveCloudPresentation,
    previewPresentation
}

function createPresentation(): presentation {
    let present: presentation
    present.name = 'New presentation'
    let slide: slide
    slide.background.backgroundColor = '#fff'
    slide.elements = []
    present.slidesList.slides[0] = slide
    present.currentState.currentSlide = 0
    present.currentState.currentColor = '#000'
    present.currentState.currentTextSize = 14
    present.currentState.currentTextFont = 'Ariel'
    present.currentState.selectedElements = []
    return present
}

function openLocalPresentation(jsonFile: string): presentation {
    return presentation;
}

function openCloudPresentation(urlFile: string): presentation {
    return presentation;
}

function exportPresentation(presentation: presentation): string {
    return pdfFile;
}

function saveLocalPresentation(presentation: presentation): string {
    return jsonFile;
}

function saveCloudPresentation(presentation: presentation): string {
    return urlFile;
}

function previewPresentation(presentation: string): slidesList {
    return slidesList;
}
