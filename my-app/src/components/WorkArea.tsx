import React, { Dispatch, useRef } from 'react'
import {Presentation, ColorString, BackgroundType, ImageElement, Position, Size} from '../entries/entries'
import {connect} from 'react-redux'
import { Elem } from './Elements/Elements'
import {Element} from '../entries/entries'
import { CHANGE_TEXT, MOVE_ELEMENT, RESIZE_ELEMENT, SELECT_ELEMENTS } from '../store/actions'
import { useMoveElement } from '../hooks/useMoveElement'
import { useResizeElement } from '../hooks/useResizeElement'
import {slideWidth, slideHeight} from '../constants/styles'

const mapStateToProps = (state: Presentation) => {
    return {
        state: state
    }
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        addText: (e: string) => dispatch({type: CHANGE_TEXT, payload: e}),
        selectElements: (elementIdArray: Array<string>) => dispatch({type: SELECT_ELEMENTS, payload: elementIdArray}),
        moveElement: (newPos: Position) => dispatch({type: MOVE_ELEMENT, payload: newPos}),
        resizeElement: (newSize: Size) => dispatch({type: RESIZE_ELEMENT, payload: newSize})
    }
  }

function WorkArea(props: any) {
    let workAreaRef = useRef<SVGSVGElement|null>(null)
    //let pos: Position = 
    useMoveElement(props, workAreaRef)
    useResizeElement(props, workAreaRef)
    let slide = props.state.model.currentSlide
    let slideBackground = '#fff'
    if (slide.background.type === BackgroundType.image) {
        slideBackground = 'url(' + (slide.background as ImageElement).imageUrl + ')'
    } else {
        slideBackground = '#' + (slide.background as ColorString).color
    }
    let elements = slide.elements.map((e: Element) => {
        return (<svg data-element-id={e.id} style={{cursor: 'pointer'}} onClick={()=>props.selectElements([e.id])} key={e.id}>
            {Elem(e, 1, props)}
        </svg>
    )})
    const currentSlide = <div>
        <svg ref={workAreaRef} width={slideWidth} height={slideHeight} className="CurrentSlide" style={{background: `0 0 / cover ${slideBackground}`}}>
            {elements}
        </svg>
    </div>
    
    return (
        <div className="WorkArea">
            {currentSlide}
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkArea)