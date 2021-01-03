import React, { Dispatch } from 'react';
import {Presentation, Slide} from '../entries/entries'
import {DELETE_SLIDE} from '../store/actions'
import {connect} from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import Elements from './Elements'
export const NEW_SLIDE_ID = uuidv4()

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
        let slideBackground = s.background
        return <div className='SlideWrapper' data-id={s.id} key={s.id}>
                <svg className='Slide' style={{background: '#' + slideBackground}}>
                <Elements/>
                </svg>
                {/*<button onClick={()=>props.deleteSlide()}></button>*/}
                </div>
        })
    return (
        <div className='SlidesList'>
            {slides}
        </div>
    )
}

export default connect(stateOne, dispatchOne)(Slides)