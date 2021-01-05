import React from 'react';
import {Presentation, ColorString} from '../entries/entries'
import {connect} from 'react-redux'
import Elements from './Elements'

const stateOne = (state: Presentation) => {
    return {
        state: state
    }
}

function WorkArea(props: any) {
    let slide = props.state.model.currentSlide
    let slideBackground = (slide.background as ColorString).color
    const currentSlide = <div style={{color: '#fff'}}>
            <svg width="1200" height="700" className="CurrentSlide" style={{background: '#' + slideBackground}}>
                <Elements/>
            </svg>
        </div>
    return (
        <div className="WorkArea">
            {currentSlide}
        </div>
    )
}

export default connect(stateOne)(WorkArea)