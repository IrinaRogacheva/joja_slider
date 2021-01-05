import React, { Dispatch } from 'react'
import {Presentation} from '../../entries/entries'
import {connect} from 'react-redux'
import {backgroundPicture} from '../../functions/slides'
import {openPicture} from '../../functions/imageElements'

const stateOne = (state: Presentation) => {
    return {
        state: state
    }
}

const dispatchOne = (dispatch: Dispatch<any>) => {
    return {
        openPicture: (e: React.ChangeEvent<HTMLInputElement>) => openPicture(e, dispatch),
        backgroundPicture: (e: React.ChangeEvent<HTMLInputElement>) => backgroundPicture(e, dispatch)
    }
}

function AddPicture(props: any) {
    return  (
      <div>
        <form>
          <label htmlFor="files">insert</label>
          <input type='file' id='files' onChange={(e)=>{props.openPicture(e)}}></input>
          <label htmlFor="files">background</label>
          <input type='file' onChange={(e)=>{props.backgroundPicture(e)}}></input>
        </form>
      </div>
    )
  }
 
export default connect(stateOne, dispatchOne)(AddPicture)