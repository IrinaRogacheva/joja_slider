import React, { Dispatch } from 'react';
import {ADD_PRIMITIVE_CIRCLE, ADD_PRIMITIVE_RECTANGLE, ADD_PRIMITIVE_TRIANGLE} from '../../store/actions'
import {connect} from 'react-redux'

const dispatchOne = (dispatch: Dispatch<any>) => {
    return {
        addPrimitiveCircle: () => dispatch({type: ADD_PRIMITIVE_CIRCLE}),
        addPrimitiveRectangle: () => dispatch({type: ADD_PRIMITIVE_RECTANGLE}),
        addPrimitiveTriangle: () => dispatch({type: ADD_PRIMITIVE_TRIANGLE})
    }
}

function AddPrimitive(props: any) {
    return (  
        <> 
            <button className='IconButton kr' onClick={()=>props.addPrimitiveCircle()}></button> 
            <button className='IconButton tr' onClick={()=>props.addPrimitiveTriangle()}></button>
            <button className='IconButton kv' onClick={()=>props.addPrimitiveRectangle()}></button>   
        </>
    )}
export default connect(null, dispatchOne)(AddPrimitive)