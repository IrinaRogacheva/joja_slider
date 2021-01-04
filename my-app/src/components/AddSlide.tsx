import React, { Dispatch } from 'react';
import {Presentation} from '../entries/entries'
import {ADD_SLIDE} from '../store/actions'
import {connect} from 'react-redux'

const stateOne = (state: Presentation) => {
    return {state: state}
}

const dispatchOne = (dispatch: Dispatch<any>) => {
    return {
        addSlide: () => dispatch({type: ADD_SLIDE}),
    }
}

function AddSlide(props: any) {
    return (
    <div>
        <button className='IconButton Icon' onClick={()=>props.addSlide()}></button>
    </div>
    )
}

export default connect(stateOne, dispatchOne)(AddSlide)