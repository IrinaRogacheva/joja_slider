import {Presentation} from '../entries/entries'
import {HISTORY} from '../entries/history'
import {NEW_PRESENTATION} from '../constants/presentation'
import { Dispatch } from 'react'
import { OPEN_PRESENTATION } from '../store/actions'

function createPresentation(): Presentation { 
    HISTORY.stateHistory = []
    HISTORY.currentIndex = -1
    HISTORY.b = true
    return NEW_PRESENTATION
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
    let file = new FileReader() 
    if (evt.target.files != null) {
        file.onload = function() {   
            if (typeof(file.result) === 'string') {   
                dispatch({type: OPEN_PRESENTATION, payload: JSON.parse(file.result) as Presentation})
            }
        }
        file.readAsText(evt.target.files[0]) 
    }
}

function saveLocalPresentation(presentation: Presentation): void {
    const jsonFile = JSON.stringify(presentation) 
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

function showStopPresentation(presentation: Presentation, b: boolean): Presentation {
    return {
        ...presentation, view: {
            ...presentation.view, 
            b: b
        }
    } 
}

export {
    createPresentation,
    openLocalPresentation,
    openPresentation,
    changePresentationName,
    saveLocalPresentation,
    showStopPresentation
}