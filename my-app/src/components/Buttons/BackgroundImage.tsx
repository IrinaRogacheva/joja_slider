import React, { Dispatch } from 'react'
import {connect} from 'react-redux'
import {backgroundPicture} from '../../functions/slides'

const dispatchOne = (dispatch: Dispatch<any>) => {
    return {
        backgroundPicture: (e: React.ChangeEvent<HTMLInputElement>) => backgroundPicture(e, dispatch)
    }
}

function BackgroundPicture(props: any) {
    return  (<>
        <input type="file" id="LoadBackImage" className="FileInput" onChange={(e)=>{props.backgroundPicture(e)}}></input>
        <label htmlFor="LoadBackImage" >
            <div className="BackgroundImage IconButton"></div>
        </label>
    </>)
}
 
export default connect(null, dispatchOne)(BackgroundPicture)