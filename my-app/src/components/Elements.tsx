import {Slide, Element, ElementType, Primitive} from '../entries/entries'
import {connect} from 'react-redux'

const stateOne = (state: Slide) => {
    return {state: state}
}

function Elem(e: Element, scale: number) {
    if (e.elementType === ElementType.primitive) {
        const borderColor = (e as Primitive).primitiveBorderColor
        const fillColor = (e as Primitive).primitiveFillColor
        const strokeWidth = 3*scale
        if ((e as Primitive).primitiveType === 'circle') {
            const cx = (e.elementPosition.x+e.elementSize.width/2)*scale
            const cy = (e.elementPosition.y+e.elementSize.height/2)*scale
            const rx = (e.elementSize.width/2)*scale
            const ry = (e.elementSize.height/2)*scale
            return (
                <ellipse key={e.id} fill={"#"+fillColor} stroke={"#"+borderColor} strokeWidth={""+strokeWidth} cx={""+cx} cy={""+cy} rx={""+rx} ry={""+ry} />
            )
        }
        else if ((e as Primitive).primitiveType === 'triangle') {
            const point1 = ""+(e.elementPosition.x)*scale+","+(e.elementPosition.y+e.elementSize.height)*scale
            const point2 = ""+(e.elementPosition.x+e.elementSize.width/2)*scale+","+(e.elementPosition.y)*scale
            const point3 = ""+(e.elementPosition.x+e.elementSize.width)*scale+","+(e.elementPosition.y+e.elementSize.height)*scale
            return (
                <polygon key={e.id} points={point1+" "+point2+" "+point3} fill={"#"+fillColor} stroke={"#"+borderColor} strokeWidth={""+strokeWidth} />
            )
        }
        else if ((e as Primitive).primitiveType === 'rectangle') {
            const x = (e.elementPosition.x)*scale
            const y = (e.elementPosition.y)*scale
            const width = (e.elementSize.width)*scale
            const height = (e.elementSize.height)*scale
            return (
                <rect key={e.id} x={""+x} y={""+y} width={""+width} height={""+height} fill={"#"+fillColor} stroke={"#"+borderColor} strokeWidth={""+strokeWidth} />
            )
        }
       
    }
    
}

function Elementik(props: any) {
    let elements = props.state.model.currentSlide.elements.map((e: Element) => {
        return (Elem(e, 1))
    })
    return (
        <>{elements}</>    
    )
}
export default connect(stateOne)(Elementik)

export {Elem}