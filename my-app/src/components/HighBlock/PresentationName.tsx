import React from 'react'

function PresentationName(props: any) {
    return (
    <input className='NamePresentation' type='text' id='pop' value={props.state.model.name} onChange={(e) => props.changePresentationName(e.target.value)}/>
    )}

export {PresentationName}