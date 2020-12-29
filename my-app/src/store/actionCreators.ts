import {CHANGE_PRESENTATION_NAME} from './actions'

function changePresentationName(slideId) { 
    return {
        type: CHANGE_PRESENTATION_NAME, 
        slideId
    }
}

///////////////////////////////////////

dispatch(gotoSlide('slideId'))
