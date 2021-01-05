import React, { Dispatch } from 'react'
import {connect} from 'react-redux'
import { saveLocalPresentation, openLocalPresentation} from '../../functions/presentation'
import { CREATE_PRESENTATION } from '../../store/actions'

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
            <button className='IconButton' onClick={()=>{props.createPresentation()}}>New</button>
        </div>
    ) 
}

export default connect(null, dispatchOne)(Save)