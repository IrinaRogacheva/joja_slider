import React, { Dispatch, useState } from 'react'
import {connect} from 'react-redux'
import {Presentation} from '../../entries/entries'
import { saveLocalPresentation, openLocalPresentation} from '../../functions/presentation'
import { CREATE_PRESENTATION } from '../../store/actions'

const stateOne = (state: Presentation) => {
    return {state: state}
}

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

    function onItemClick(someFunction: any) {
        setIsVisible(false)
    }

    return (
        <div className='wrapper'>
    <button className="FileMenuButton" onClick={()=>{setIsVisible(!isVisible)}}>Файл</button>
    <div className="FileMenuWrapper">
    <ul className="FileMenu" style={{display: displayStyle}}>
            <li className='FileMenuItem' onClick={()=>{onItemClick(props.createPresentation())}}>Создать</li>
            <li>
            <input type="file" id="OpenFile" className="FileInput" onChange={(e)=>{onItemClick(props.openLocalPresentation(e))}}></input>
                <label htmlFor="OpenFile" >
                    <p className='FileMenuItem'>Открыть</p>
                </label>
            </li>
            <li className='FileMenuItem' onClick={()=>{onItemClick(saveLocalPresentation(props.state))}}>Сохранить</li>
        </ul>
    </div>
    </div>
    ) 
}

export default connect(stateOne, dispatchOne)(LocalFileMenu)