import React, { useState } from 'react'
import { saveLocalPresentation} from '../../functions/presentation'

export function LocalFileMenu(props: any) {
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
    </div>) 
}