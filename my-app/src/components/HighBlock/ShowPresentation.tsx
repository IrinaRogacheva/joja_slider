import React from 'react'

export function ShowButton(props: any) {
    return (
    <div className='wrapper'>
        <button className="FileMenuButtonShow" onClick={()=>{props.showPresentation(true)}}>Показ</button>
    </div>) 
}