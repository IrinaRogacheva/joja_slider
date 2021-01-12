import React, { useState } from 'react'

export function Primitives(props: any) {
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
          <button className="FileMenuButton" onClick={()=>{setIsVisible(!isVisible)}}>Фигуры</button>
          <div className="FileMenuWrapper">
            <ul className="FileMenu" style={{display: displayStyle}}>
              <li className='IconButton kr' onClick={()=>{onItemClick(props.addPrimitiveCircle())}}></li>
              <li className='IconButton tr' onClick={()=>{onItemClick(props.addPrimitiveTriangle())}}></li>
              <li className='IconButton kv' onClick={()=>{onItemClick(props.addPrimitiveRectangle())}}></li>
            </ul>
          </div>
        </div>
    ) 
}