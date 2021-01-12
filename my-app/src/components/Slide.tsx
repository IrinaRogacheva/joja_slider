import React from 'react'
import { slideHeight, slideWidth } from '../constants/styles'
import {Element, ColorString, BackgroundType, ImageElement} from '../entries/entries'
import {Elem} from './Elements/Elements'

function SlideComponent(s: any, props: any) {
    let slideBackground = '#' + (s.background as ColorString).color
    let elements = s.elements.map((e: Element) => {
        return (<svg key={e.id}>
            {Elem(e, 0.2, props)}
        </svg>
    )})
    if (s.background.type === BackgroundType.image) {
        slideBackground = 'url(' + (s.background as ImageElement).imageUrl + ')'
    } else {
        slideBackground = '#' + (s.background as ColorString).color
    }
    let borderStyle: string = 'none'
    if (props.state.model.selectedSlidesId.includes(s.id)) {
        borderStyle = '2px solid #cfbb03'
    } else {
        borderStyle = 'none'
    }

    function onSlideClick(eTarget: HTMLElement, slideId: string) {
        props.changeCurrentSlide(slideId)
    }
    return (<>
            <p className='SlideNumber'>{""+(props.state.model.slidesList.indexOf(s)+1)}</p>
            <svg data-id={s.id} onClick={(e) => onSlideClick(e.target as HTMLElement, s.id)} width={slideWidth*0.2} height={slideHeight*0.2} className='Slide' style={{border: borderStyle, background: `0 0 / cover ${slideBackground}`}}>
                {elements}
            </svg>        
    </>)
}

export {SlideComponent}