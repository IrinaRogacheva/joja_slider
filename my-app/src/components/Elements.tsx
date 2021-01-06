import {Slide, Element, ElementType, Primitive, ImageElement, Text} from '../entries/entries'
import {connect} from 'react-redux'
import {Dispatch} from 'react'
import {openPicture} from '../functions/imageElements'
import {CHANGE_TEXT, SELECT_ELEMENTS} from '../store/actions'

const stateOne = (state: Slide) => {
    return {state: state}
}

const dispatchOne = (dispatch: Dispatch<any>) => {
    return {
        openPicture: (e: React.ChangeEvent<HTMLInputElement>) => openPicture(e, dispatch),
        addText: (e: string) => dispatch({type: CHANGE_TEXT, payload: e}),
        selectElements: (elementIdArray: Array<string>)=> dispatch({type: SELECT_ELEMENTS, payload: elementIdArray})
    }
  }

function Elem(e: Element, scale: number, props: any) {
    const selectedStrokeWidth = '1'
    let borderStyle: string = 'none'
    if (props.state.model.selectedElementsId.includes(e.id)) {
        borderStyle = 'rgba(0,0,0,0.2)'
    } else {
        borderStyle = 'none'
    }

    if (e.elementType === ElementType.primitive) {
        const borderColor = (e as Primitive).primitiveBorderColor
        const fillColor = (e as Primitive).primitiveFillColor
        const strokeWidth = 3*scale
        if ((e as Primitive).primitiveType === 'circle') {
            const cx = (e.elementPosition.x+e.elementSize.width/2)*scale
            const cy = (e.elementPosition.y+e.elementSize.height/2)*scale
            const rx = (e.elementSize.width/2)*scale
            const ry = (e.elementSize.height/2)*scale
            const xStroke = cx-rx-strokeWidth
            const yStroke = cy-ry-strokeWidth
            const wStroke = (ry+strokeWidth)*2
            const hStroke = (rx+strokeWidth)*2
            return (<>
                <ellipse key={e.id} fill={"#"+fillColor} stroke={"#"+borderColor} strokeWidth={""+strokeWidth} cx={""+cx} cy={""+cy} rx={""+rx} ry={""+ry}/>
                <rect x={""+xStroke} y={""+yStroke} width={""+wStroke} height={""+hStroke} fill="none" stroke={borderStyle} stroke-width={selectedStrokeWidth}></rect>
            </>)
        }
        else if ((e as Primitive).primitiveType === 'triangle') {
            const point1X = (e.elementPosition.x)*scale
            const point1Y = (e.elementPosition.y+e.elementSize.height)*scale
            const point1 = point1X+","+point1Y
            const point2X = (e.elementPosition.x+e.elementSize.width/2)*scale
            const point2Y = (e.elementPosition.y)*scale
            const point2 = point2X+","+point2Y
            const point3X = (e.elementPosition.x+e.elementSize.width)*scale
            const point3 = point3X+","+point1Y
            const xStroke = point1X-strokeWidth
            const wStroke = point3X-point1X+2*strokeWidth
            const hStroke = point1Y-point2Y+2*strokeWidth
            return (<>
                <polygon key={e.id} points={point1+" "+point2+" "+point3} fill={"#"+fillColor} stroke={"#"+borderColor} strokeWidth={""+strokeWidth}/>
                <rect x={""+xStroke} y={""+xStroke} width={""+wStroke} height={""+hStroke} fill="none" stroke={borderStyle} stroke-width={selectedStrokeWidth}></rect>
                </>)
        }
        else if ((e as Primitive).primitiveType === 'rectangle') {
            const x = (e.elementPosition.x)*scale
            const y = (e.elementPosition.y)*scale
            const width = (e.elementSize.width)*scale
            const height = (e.elementSize.height)*scale
            const xStroke = x - strokeWidth
            const wStroke = width + 2*strokeWidth
            return (<>
                <rect key={e.id} x={""+x} y={""+y} width={""+width} height={""+height} fill={"#"+fillColor} stroke={"#"+borderColor} strokeWidth={""+strokeWidth}/>
                <rect x={""+xStroke} y={""+xStroke} width={""+wStroke} height={""+wStroke} fill="none" stroke={borderStyle} stroke-width={selectedStrokeWidth}></rect>
            </>)
        }
        else return
    }
    else if (e.elementType === ElementType.text) {
        const x = (e.elementPosition.x)*scale
        const y = (e.elementPosition.y)*scale
        const width = (e.elementSize.width)*scale
        const height = (e.elementSize.height)*scale
        const xStroke = x-1
        const yStroke = y-1
        const hStroke = height+1
        const wStroke = width+1
        return <> 
            <foreignObject key={e.id} x={""+x} y={""+y} width={""+width} height={""+height}> 
                <input  id="text_id_pr1" value={(e as Text).textString} onChange={(e) => props.addText(e.target.value)}/> 
            </foreignObject>
            <rect x={""+xStroke} y={yStroke} width={""+wStroke} height={""+hStroke} fill="none" stroke={borderStyle} stroke-width={selectedStrokeWidth}></rect>
        </>
    }
    else if (e.elementType === ElementType.image) {
      const x = (e.elementPosition.x)*scale
      const y = (e.elementPosition.y)*scale
      const width = (e.elementSize.width)*scale
      const height = (e.elementSize.height)*scale
      const xStroke = x-1
      const yStroke = y-1
      const hStroke = height+1
      const wStroke = width+1
      return (<>
          <image key={e.id} x={""+x} y={""+y} width={""+width} height={""+height} href={(e as ImageElement).imageUrl}/>
          <rect x={""+xStroke} y={yStroke} width={""+wStroke} height={""+hStroke} fill="none" stroke={borderStyle} stroke-width={selectedStrokeWidth}></rect>
        </>)
    }
    else return
}

function Elementik(props: any) {   
    let elements = props.state.model.currentSlide.elements.map((e: Element) => {
        const elem = Elem(e, 1, props)
        return (
            <svg style={{cursor: 'pointer'}} onClick={()=>props.selectElements([e.id])}>
                {elem}
            </svg>
        )
    })
    return (<>
        {elements}
    </>)
}
export default connect(stateOne, dispatchOne)(Elementik)

export {Elem}