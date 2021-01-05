import React, { Dispatch } from 'react';
import {Presentation, Slide} from '../entries/entries'
import {DELETE_SLIDE, CHANGE_CURRENT_SLIDE, SELECT_SLIDES} from '../store/actions'
import {connect} from 'react-redux'
import { SlideComponent } from './Slide'
import {useScrollOnCurrentSlide} from '../hooks/useScrollOnCurrentSlide'

const stateOne = (state: Presentation) => {
    return {state: state}
}

const dispatchOne = (dispatch: Dispatch<any>) => {
    return {
        deleteSlide: () => dispatch({type: DELETE_SLIDE}),
        changeCurrentSlide: (slideId: string) => dispatch({type: CHANGE_CURRENT_SLIDE, payload: slideId}),
        selectSlides: (slideId: string) => dispatch({type: SELECT_SLIDES, payload: slideId})
    }
}

function Slides(props: any) {
    useScrollOnCurrentSlide(props)
    let slides = props.state.model.slidesList.map((s: Slide) => {
            return (SlideComponent(s, props))
        })  
    return (
        <div className='SlidesList'>
            {slides}       
        </div>       
    )
}

export default connect(stateOne, dispatchOne)(Slides)