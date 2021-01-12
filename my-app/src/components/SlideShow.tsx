import React, {Dispatch} from 'react'
import {Presentation, Element, ImageElement, BackgroundType, ColorString} from '../entries/entries'
import {connect} from 'react-redux'
import {Elem} from './Elements/Elements'
import {SHOW_PREV_SLIDE, SHOW_NEXT_SLIDE, SHOW_STOP_PRESENTATION} from '../store/actions'
import {slideWidth, slideHeight} from '../constants/styles'

const mapStateToProps = (state: Presentation) => {
    return {state: state}
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        showPrevSlide: () => dispatch({type: SHOW_PREV_SLIDE}),
        showNextSlide: () => dispatch({type: SHOW_NEXT_SLIDE}),
        showPresentation: (b: boolean) => dispatch({type: SHOW_STOP_PRESENTATION, payload: b}) 
    }
}

function WorkAreaShow(props: any) {
    let slide = props.state.model.currentSlide
    let slideBackground = '#fff'
    if (props.state.view.background.type === BackgroundType.image) {
        slideBackground = 'url(' + (props.state.view.background as ImageElement).imageUrl + ')'  
    } else {
        slideBackground = '#' + (props.state.view.background as ColorString).color   
    }
    let displayStyle = 'none'
    if (props.state.view.b === true) {
        displayStyle = 'flex'
     } else {
         displayStyle = 'none' 
     }
     let elements = slide.elements.map((e: Element) => {
        return (<svg key={e.id}>
            {Elem(e, 1, props)}
        </svg>)
    })
    return (
    <div key={slide.id}  className='slideShow' style={{display: displayStyle, width: "100%", height: "100%", position: 'relative', background: '#000'}}>
        <div id={'sl'+slide.id} className='slideShow' style={{ width: slideWidth, height: slideHeight, background: `0 0 / cover ${slideBackground}`}} >
            <button className="FileMenuButtonShow"  onClick={()=>{props.showPresentation(false)}}>Завершить</button>
                <svg width="100%" height="100%">
                    {elements}
                </svg>
        </div>
        <div className='prevNext'>        
           <button className='show prev' onClick={()=>props.showPrevSlide()}></button>
           <button className='show next' onClick={()=>props.showNextSlide()}></button>
        </div>
    </div>)
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkAreaShow)