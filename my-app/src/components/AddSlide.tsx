import React, { Dispatch } from 'react';
import {Presentation} from '../entries/entries'
import {ADD_SLIDE} from '../store/actions'
import {connect} from 'react-redux'
//import {addSlide} from './functions/slides';

const stateOne = (state: Presentation) => {
    return {state: state}
}

const dispatchOne = (dispatch: Dispatch<any>) => {
    return {
        addSlide: () => dispatch({type: ADD_SLIDE}),
    }
}

function AddSlidik(props: any) {
    // const dispatch: Dispatch<any> = useDispatch()
    return (
    <div>
        <button className='IconButton Icon' onClick={()=>props.addSlide()}></button>
    </div>
    )
}

export default connect(stateOne, dispatchOne)(AddSlidik)