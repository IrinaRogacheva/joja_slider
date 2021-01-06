import React, { Dispatch } from 'react'
import {connect} from 'react-redux'
import {openPicture} from '../../functions/imageElements'

const dispatchOne = (dispatch: Dispatch<any>) => {
    return {
        openPicture: (e: React.ChangeEvent<HTMLInputElement>) => openPicture(e, dispatch)
    }
}

function AddPicture(props: any) {
    return  (<>
      <input type="file" id="LoadImage" className="FileInput" onChange={(e)=>{props.openPicture(e)}}></input>
      <label htmlFor="LoadImage" >
        <div className="Picture IconButton"></div>
      </label>
    </>)
}
 
export default connect(null, dispatchOne)(AddPicture)