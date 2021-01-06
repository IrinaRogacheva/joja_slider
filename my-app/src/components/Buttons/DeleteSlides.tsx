import React, { Dispatch } from 'react'
import {DELETE_SLIDE} from '../../store/actions'
import {connect} from 'react-redux'

const dispatchOne = (dispatch: Dispatch<any>) => {
    return {
        deleteSlide: () => dispatch({type: DELETE_SLIDE}),
    }
}

function DeleteSlide(props: any) {
    return (
        <button className='IconButton DeleteSlide' onClick={()=>props.deleteSlide()}></button>
    )
}

export default connect(null, dispatchOne)(DeleteSlide)