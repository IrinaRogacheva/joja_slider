import React, { Dispatch } from 'react';
import {Presentation, Slide} from '../entries/entries'
import {CHANGE_CURRENT_SLIDE, SELECT_SLIDES} from '../store/actions'
import {connect} from 'react-redux'
import { SlideComponent } from './Slide'
import {useScrollOnCurrentSlide} from '../hooks/useScrollOnCurrentSlide'

const mapStateToProps = (state: Presentation) => {
    return {state: state}
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        changeCurrentSlide: (slideId: string) => dispatch({type: CHANGE_CURRENT_SLIDE, payload: slideId}),
        selectSlides: (slideId: string) => dispatch({type: SELECT_SLIDES, payload: slideId})
    }
}

function Slides(props: any) {
    useScrollOnCurrentSlide(props)
    let slides = props.state.model.slidesList.map((s: Slide) => {
            return <div className='SlideWrapper' key={s.id}>
                {(SlideComponent(s, props))}
             </div>
        })  
    return (
        <div className='SlidesList'>
            {slides}       
        </div>       
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Slides)