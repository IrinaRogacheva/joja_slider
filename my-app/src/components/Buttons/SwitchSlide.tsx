import React, { Dispatch } from 'react'
import {SHOW_PREV_SLIDE, SHOW_NEXT_SLIDE} from '../../store/actions'
import {connect} from 'react-redux'

const dispatchOne = (dispatch: Dispatch<any>) => {
    return {
        showPrevSlide: () => dispatch({type: SHOW_PREV_SLIDE}),
        showNextSlide: () => dispatch({type: SHOW_NEXT_SLIDE})
    }
}

function SwitchSlide(props: any) {
    return (<>
        <button className='IconButton Left' onClick={()=>props.showPrevSlide()}></button>
        <button className='IconButton Right' onClick={()=>props.showNextSlide()}></button>
    </>)
}

export default connect(null, dispatchOne)(SwitchSlide)