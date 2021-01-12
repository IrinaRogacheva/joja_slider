import React  from 'react'

export function ChangeTextAlign(props: any) {
    return (
        <>
            <input type="radio" name="align" id="left" onClick={()=>props.changeTextAlign('left')}></input>
            <label htmlFor="left" className='IconRadio AlgL'></label>
            <input type="radio" name="align" id="center" onClick={()=>props.changeTextAlign('center')}></input>
            <label htmlFor="center" className='IconRadio AlgC'></label>
            <input type="radio" name="align" id="right" onClick={()=>props.changeTextAlign('right')}></input>
            <label htmlFor="right" className='IconRadio AlgR'></label>
        </>
    )}