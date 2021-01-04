import React, { Dispatch } from 'react'
import {connect} from 'react-redux'
import {Presentation} from '../entries/entries'
import { saveLocalPresentation, createPresentation, openLocalPresentation} from '../functions/presentation'
import { CREATE_PRESENTATION } from '../store/actions'

const stateOne = (state: Presentation) => {
  return {
      state: state
  }
}

const dispatchOne = (dispatch: Dispatch<any>) => {
    return {
        createPresentation: () => dispatch({type: CREATE_PRESENTATION}),
        openLocalPresentation: (e: React.ChangeEvent<HTMLInputElement>) => openLocalPresentation(e, dispatch) 
    }
}

function Save(props: any) {
    return (
        <div className='fileButtons'>
            <button className='IconButton' onClick={()=>{saveLocalPresentation(props.state)}}>Save</button> 
            <div><input type='file' onChange={(e)=>{props.openLocalPresentation(e)}}></input></div>
            <button className='IconButton' onClick={()=>{createPresentation()}}>New</button>
        </div>
    ) 
}

export default connect(stateOne, dispatchOne)(Save)