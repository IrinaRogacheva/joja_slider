import React, { Dispatch } from 'react'
import {ADD_SLIDE} from '../../store/actions'
import {connect} from 'react-redux'

const dispatchOne = (dispatch: Dispatch<any>) => {
    return {
        addSlide: () => dispatch({type: ADD_SLIDE}),
    }
}

function AddSlide(props: any) {
    return (
        <button className='IconButton Icon' onClick={()=>props.addSlide()}></button>
    )
}

export default connect(null, dispatchOne)(AddSlide)