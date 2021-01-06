import React, { Dispatch, useState } from 'react'
import {connect} from 'react-redux'
import { saveLocalPresentation, openLocalPresentation} from '../../functions/presentation'
import { CREATE_PRESENTATION } from '../../store/actions'


const dispatchOne = (dispatch: Dispatch<any>) => {
    return {
        createPresentation: () => dispatch({type: CREATE_PRESENTATION}),
        openLocalPresentation: (e: React.ChangeEvent<HTMLInputElement>) => openLocalPresentation(e, dispatch) 
    }
}

function LocalFileMenu(props: any) {
    const [isVisible, setIsVisible] = useState(false)
    let displayStyle = 'none'
    if (isVisible) {
        displayStyle = 'block'
    } else {
        displayStyle = 'none'
    }
    return (
        <div className='wrapper'>
    <button className="FileMenuButton" onClick={()=>{setIsVisible(!isVisible)}}>Файл</button>
    <div className="FileMenuWrapper">
    <ul className="FileMenu" style={{display: displayStyle}}>
            <li className='FileMenuItem' onClick={()=>{props.createPresentation()}}>Создать</li>
            <li>
            <input type="file" id="OpenFile" className="FileInput" onChange={(e)=>{props.openLocalPresentation(e)}}></input>
                <label htmlFor="OpenFile" >
                    <p className='FileMenuItem'>Открыть</p>
                </label>
            </li>
            <li className='FileMenuItem' onClick={()=>{saveLocalPresentation(props.state)}}>Сохранить</li>
        </ul>
    </div>
    </div>
    ) 
}

export default connect(null, dispatchOne)(LocalFileMenu)