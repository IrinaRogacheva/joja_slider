import React from 'react';
import {Presentation, ColorString, BackgroundType, ImageElement} from '../entries/entries'
import {connect} from 'react-redux'
import Elements from './Elements'

const stateOne = (state: Presentation) => {
    return {
        state: state
    }
}

function WorkArea(props: any) {
    let slide = props.state.model.currentSlide
    let slideBackground = '#fff'
    if (slide.background.type === BackgroundType.image) {
        slideBackground = 'url(' + (slide.background as ImageElement).imageUrl + ')'
    } else {
        slideBackground = '#' + (slide.background as ColorString).color
    }
    const currentSlide = <div>
        <svg width="1200" height="700" className="CurrentSlide" style={{background: `0 0 / cover ${slideBackground}`}}>
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