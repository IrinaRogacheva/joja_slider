import React, { Dispatch } from 'react'
import {ADD_SLIDE, DELETE_SLIDE} from '../store/actions'
import {connect} from 'react-redux'
import { backgroundPicture } from '../functions/slides'

const dispatchOne = (dispatch: Dispatch<any>) => {
    return {
        addSlide: () => dispatch({type: ADD_SLIDE}),
        backgroundPicture: (e: React.ChangeEvent<HTMLInputElement>) => backgroundPicture(e, dispatch),
        deleteSlide: () => dispatch({type: DELETE_SLIDE})
    }
}

function AddSlide(props: any) {
    return (<div className='SlidesListButtons'>
        <button className='IconButton Icon' onClick={()=>props.addSlide()}></button>
        <input type="file" id="LoadBackImage" className="FileInput" onChange={(e)=>{props.backgroundPicture(e)}}></input>
        <label htmlFor="LoadBackImage" >
            <div className="BackgroundImage IconButton"></div>
        </label>
        <button className='IconButton DeleteSlide' onClick={()=>props.deleteSlide()}></button>
    </div>)
}

export default connect(null, dispatchOne)(AddSlide)