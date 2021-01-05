import React from 'react';
import {Slide, Element, ColorString} from '../entries/entries'
import {Elem} from './Elements'

function SlideComponent(s: Slide, props: any) { 
    let slideBackground = (s.background as ColorString).color
    let elements = s.elements.map((e: Element) => {
        return (Elem(e, 0.2, props))
    })

    let borderStyle: string = 'none'
    if (props.state.model.selectedSlidesId.includes(s.id)) {
        borderStyle = '2px solid #cfbb03'
    } else {
        borderStyle = 'none'
    }

    function onSlideClick(eTarget: HTMLElement, slideId: string) {
        props.changeCurrentSlide(slideId)
    }
    return (
        <div className='SlideWrapper' key={s.id}>
            <p className='SlideNumber'>{""+(props.state.model.slidesList.indexOf(s)+1)}</p>
            <svg data-id={s.id} onClick={(e) => onSlideClick(e.target as HTMLElement, s.id)} width="240" height="140" className='Slide' style={{border: borderStyle, background: '#' + slideBackground}}>
                {elements}
            </svg>
        </div>
    )  
}

export {SlideComponent}