import React, { Dispatch } from 'react';
import {Presentation, Slide, Element} from '../entries/entries'
import {DELETE_SLIDE} from '../store/actions'
import {connect} from 'react-redux'
import {Elem} from './Elements'

const stateOne = (state: Presentation) => {
    return {state: state}
}

const dispatchOne = (dispatch: Dispatch<any>) => {
    return {
        deleteSlide: () => dispatch({type: DELETE_SLIDE}),
    }
}

function Slides(props: any) {
    let slides = props.state.model.slidesList.slice().map((s: Slide) => {
        let elements = s.elements.map((e: Element) => {
            return (Elem(e, 0.2))
        })
        let slideBackground = s.background
        return (
            <div className='SlideWrapper' data-id={s.id} key={s.id}>
              <p>{""+(props.state.model.slidesList.indexOf(s)+1)}</p>
              <svg width="240" height="140" className='Slide' style={{background: '#' + slideBackground}}>
                {elements}
              </svg>
            </div>
        )
    })
    return (
        <div className='SlidesList'>
          {slides}
        </div>
    )
}

export default connect(stateOne, dispatchOne)(Slides)