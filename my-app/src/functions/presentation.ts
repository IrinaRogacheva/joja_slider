import {Presentation} from '../entries/entries'
import * as CONSTANTS from '../entries/constants'
import { Dispatch } from 'react'
import { OPEN_PRESENTATION } from '../store/actions'

function createPresentation(presentation: Presentation): Presentation { 
    return CONSTANTS.NEW_PRESENTATION
} 

function changePresentationName(presentation: Presentation, newName: string): Presentation { 
    return {
        ...presentation, model: {
            ...presentation.model, name: newName
        } 
    }
}

function openPresentation(newPr: Presentation): Presentation {
    return newPr
}

function openLocalPresentation(evt: React.ChangeEvent<HTMLInputElement>, dispatch: Dispatch<any>) {
    console.log('vse ploho')
    let file = new FileReader() 
    if (evt.target.files != null) {
     file.onload = function() {   
     if (typeof(file.result) === 'string') {   
        dispatch({type: OPEN_PRESENTATION, payload: JSON.parse(file.result) as Presentation})
        console.log(JSON.parse(file.result))
    }}
    file.readAsText(evt.target.files[0]) 
 }
}
 
//function openCloudPresentation(urlFile: string): Presentation {
//    let presentation: Presentation
//    return presentation
//}

/*function exportPresentation(presentation: Presentation): string {
    let pdfFile: string
    return pdfFile
}*/

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

/*function saveCloudPresentation(presentation: Presentation): string {
    let urlFile: string
    return urlFile
}

function previewPresentation(presentation: Presentation): Array<Slide> {
    let slideshow: Array<Slide> 
    return slideshow
}*/

export {
    createPresentation,
    openLocalPresentation,
    openPresentation,
    changePresentationName,
    //openCloudPresentation,
    saveLocalPresentation,
    //saveCloudPresentation,
    //exportPresentation,
    //previewPresentation
}