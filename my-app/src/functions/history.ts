import {Presentation} from '../entries/entries'
import {HISTORY} from '../entries/history'

function changeHistory(presentation: Presentation) {  
    if (HISTORY.b) {
        console.log(HISTORY)
        for (let i = HISTORY.currentIndex; i < HISTORY.stateHistory.length; i++) {
            HISTORY.stateHistory.splice(HISTORY.currentIndex+1, 1) 
        }
        HISTORY.stateHistory.push(presentation)    
        HISTORY.currentIndex = HISTORY.stateHistory.indexOf(presentation)
    } else {
        HISTORY.b = true 
    }
}

function undo(presentation: Presentation): Presentation {
    if (HISTORY.b) {
        let l = HISTORY.stateHistory.indexOf(presentation)
        HISTORY.b = false
        HISTORY.currentIndex = l-1
        console.log(HISTORY)
        if (l-1 > -1) {
            presentation = HISTORY.stateHistory[l-1]
        } 
    }
    return presentation 
}

function redo(presentation: Presentation): Presentation {
    let l = HISTORY.stateHistory.indexOf(presentation)
    HISTORY.b = false
    HISTORY.currentIndex = l+1
    console.log(HISTORY)
    if (l+1 < HISTORY.stateHistory.length) {
        presentation = HISTORY.stateHistory[l+1]
    } 
    return presentation 
}

export {undo, redo, changeHistory}    