
import React from 'react';
import {Presentation} from '../entries/entries'
import {connect} from 'react-redux'
import Elements from './Elements'

const stateOne = (state: Presentation) => {
    return {
        state: state
    }
}

function WorkArea(props: any) {
    let slide = props.state.model.currentSlide
    const currentSlide = <div style={{color: '#fff'}}>
        {slide.id}
            <svg width="1200" height="700" className="CurrentSlide" style={{background: slide.background}}>
                <Elements/>
            </svg>
        </div>
    return (
        <div>
            {currentSlide}
        </div>
    )
}

export default connect(stateOne)(WorkArea)