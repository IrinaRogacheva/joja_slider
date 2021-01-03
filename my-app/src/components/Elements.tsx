import {Slide, Element, Primitive} from '../entries/entries'
import {connect} from 'react-redux'

const stateOne = (state: Slide) => {
    return {state: state}
}

function Elementik(props: any) {
    
    let elements = props.state.model.currentSlide.elements.map((s: Element) => {
        let borderColor = (s as Primitive).primitiveBorderColor
        let fillColor = (s as Primitive).primitiveFillColor
        return (          
              <rect key={s.id} x={s.elementPosition.x} y={s.elementPosition.y} width={s.elementSize.width} height={s.elementSize.height} fill={'#' + fillColor} stroke={'#' + borderColor} strokeWidth="3" />           
            )
    })
    return (
        
          elements
        
    )
}
export default connect(stateOne)(Elementik)