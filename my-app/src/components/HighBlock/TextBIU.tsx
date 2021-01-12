import React from 'react'

export function ChangeTextBIU(props: any) {
    return (
        <>
            <input type="checkbox" name="decoration" id="bold" onClick={()=>props.changeTextBold()}></input>
            <label htmlFor="bold" className="IconRadio Bld"></label> 
            <input type="checkbox" name="decoration" id="ital" onClick={()=>props.changeTextItalic()}></input>
            <label htmlFor="ital" className="IconRadio Itl"></label>
            <input type="checkbox" name="decoration" id="under" onClick={()=>props.changeTextUnderline()}></input>
            <label htmlFor="under" className="IconRadio Und"></label>
        </>
    )}