import React, { Dispatch } from 'react';
import {Presentation} from '../entries/entries'
import {ADD_PRIMITIVE_TRIANGLE} from '../store/actions'
import {connect} from 'react-redux'

const stateOne = (state: Presentation) => {
    return {state: state}
}

const dispatchOne = (dispatch: Dispatch<any>) => {
    return {
        addPrimitive: () => dispatch({type: ADD_PRIMITIVE_TRIANGLE}),
    }
}

function AddPrimitiveCircle(props: any) {
    return (   
        <button className='IconButton tr' onClick={()=>props.addPrimitive()}></button>    
    )}
export default connect(stateOne, dispatchOne)(AddPrimitiveCircle)