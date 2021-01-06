import React, { Dispatch } from 'react'
import {ADD_TEXT} from '../../store/actions'
import {connect} from 'react-redux'

const dispatchOne = (dispatch: Dispatch<any>) => {
    return {
        addText: () => dispatch({type: ADD_TEXT})
    }
}

function AddText(props: any) {
    return ( 
        <button  className='IconButton Text' onClick={()=>props.addText()}></button>
    )
}

export default connect(null, dispatchOne)(AddText)