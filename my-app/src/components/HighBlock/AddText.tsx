import React from 'react'

export function AddText(props: any) {
    return (<>
        <button  className='IconButton Text' onClick={()=>props.addText()}></button>
        <input className='TextSize' type='number' id='pop' value={props.state.view.textSize} onChange={(e) => props.changeTextSize(e.target.value)}/>
    </>)
}