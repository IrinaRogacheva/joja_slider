
import React from 'react';
import {Presentation} from '../entries/entries'
//import {CHANGE_BACKGROUND_SLIDE} from '../store/action'
import {connect} from 'react-redux'

const stateOne = (state: Presentation) => {
    return {
        state: state
    }
}

function WorkArea(props: any) {
    let slide = props.state.model.currentSlide
    const currentSlide = <div key={slide.id}>
            <svg className="CurrentSlide" style={{background: slide.background}}></svg>
        </div>
    return (
        <div>
            {currentSlide}
        </div>
    )
}

export default connect(stateOne)(WorkArea)