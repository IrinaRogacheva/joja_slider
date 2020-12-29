import {CHANGE_PRESENTATION_NAME} from './actions'

function changePresentationName(name: string) { 
    return {
        type: CHANGE_PRESENTATION_NAME, 
        name
    }
}

export {changePresentationName}