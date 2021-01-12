import React, { useState } from 'react'

export function Fonts(props: any) {
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
          <button className="FileMenuButton" onClick={()=>{setIsVisible(!isVisible)}}>{props.state.view.textFont}</button>
          <div className="FileMenuWrapper">
            <ul className="FileMenu" style={{display: displayStyle}}>
            <li className='FileMenuItem' style={{fontFamily: 'Arial'}} onClick={()=>{onItemClick(props.changeFont('Arial'))}}>Arial</li>
            <li className='FileMenuItem' style={{fontFamily: 'Times New Roman'}} onClick={()=>{onItemClick(props.changeFont('Times New Roman'))}}>Times New Roman</li>
            <li className='FileMenuItem' style={{fontFamily: 'Georgia'}} onClick={()=>{onItemClick(props.changeFont('Georgia'))}}>Georgia</li>
            <li className='FileMenuItem' style={{fontFamily: 'Comic Sans MS'}} onClick={()=>{onItemClick(props.changeFont('Comic Sans MS'))}}>Comic Sans MS</li>
            <li className='FileMenuItem' style={{fontFamily: 'MS Sans Serif'}} onClick={()=>{onItemClick(props.changeFont('MS Sans Serif'))}}>MS Sans Serif</li>
            <li className='FileMenuItem' style={{fontFamily: 'Tahoma'}} onClick={()=>{onItemClick(props.changeFont('Tahoma'))}}>Tahoma</li>
            </ul>
          </div>
        </div>
    ) 
}