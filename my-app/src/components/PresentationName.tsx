import React, { Dispatch } from 'react'
import {Presentation} from '../entries/entries'
import {CHANGE_NAME} from '../store/actions'
import {connect} from 'react-redux'

const stateOne = (state: Presentation) => {
    return {
        state: state
    }
}

const dispatchOne = (dispatch: Dispatch<any>) => {
    return {
        changePresentationName: (newName: string) => dispatch({type: CHANGE_NAME, payload: newName})
    }
}

function Name1(props: any) {
    let presento = props.state
    
    return (
    <input className='NamePresentation' type='text' id='pop' value={presento.name} onChange={(e) => props.changePresentationName(e.target.value)}/>
    )}

export default connect(stateOne, dispatchOne)(Name1)