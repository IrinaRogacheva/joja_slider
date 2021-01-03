import React, { Dispatch } from 'react';
import {Presentation} from '../entries/entries'
import {ADD_PRIMITIVE_CIRCLE} from '../store/actions'
import {connect} from 'react-redux'
//import {addSlide} from './functions/slides';

const stateOne = (state: Presentation) => {
    return {state: state}
}

const dispatchOne = (dispatch: Dispatch<any>) => {
    return {
        addPrimitive: () => dispatch({type: ADD_PRIMITIVE_CIRCLE}),
    }
}

function AddPrimitiveCircle(props: any) {
    // const dispatch: Dispatch<any> = useDispatch()
    return (
    <div>
        <button className='IconButton kr' onClick={()=>props.addPrimitive()}></button>
    </div>
    )}
export default connect(stateOne, dispatchOne)(AddPrimitiveCircle)