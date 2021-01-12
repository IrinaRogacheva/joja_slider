import {Element, Primitive} from '../../entries/entries'

function drawEllipse(elem: Element, scale: number, strokeWidth: number, selectStrokeWidth: number, resizeCircleRad: number, borderStyle: string) {
    const borderColor = (elem as Primitive).primitiveBorderColor
    const fillColor = (elem as Primitive).primitiveFillColor
    const cx = (elem.elementPosition.x+elem.elementSize.width/2)*scale
    const cy = (elem.elementPosition.y+elem.elementSize.height/2)*scale
    const rx = (elem.elementSize.width/2)*scale
    const ry = (elem.elementSize.height/2)*scale
    const xStroke = cx-rx-strokeWidth
    const yStroke = cy-ry-strokeWidth
    const wStroke = (rx+strokeWidth)*2
    const hStroke = (ry+strokeWidth)*2
    const xPath = xStroke+wStroke
    const yPath = yStroke+hStroke
    return (<>
        <ellipse data-id={elem.id} fill={"#"+fillColor} stroke={"#"+borderColor} strokeWidth={""+strokeWidth} cx={""+cx} cy={""+cy} rx={""+rx} ry={""+ry}/>
        <rect data-id={elem.id} x={""+xStroke} y={""+yStroke} width={""+wStroke} height={""+hStroke} fill="transparent" stroke={borderStyle} strokeWidth={""+selectStrokeWidth}></rect>
        <circle data-id-res={"res_"+elem.id} style={{cursor: 'nw-resize'}} cx={""+xPath} cy={""+yPath} r={""+resizeCircleRad} fill="transparent"/>
    </>)
}

function drawTriangle(elem: Element, scale: number, strokeWidth: number, selectStrokeWidth: number, resizeCircleRad: number, borderStyle: string) {
    const borderColor = (elem as Primitive).primitiveBorderColor
    const fillColor = (elem as Primitive).primitiveFillColor
    const point1X = (elem.elementPosition.x)*scale
    const point1Y = (elem.elementPosition.y+elem.elementSize.height)*scale
    const point1 = point1X+","+point1Y
    const point2X = (elem.elementPosition.x+elem.elementSize.width/2)*scale
    const point2Y = elem.elementPosition.y*scale
    const point2 = point2X+","+point2Y
    const point3X = (elem.elementPosition.x+elem.elementSize.width)*scale
    const point3 = point3X+","+point1Y
    const xStroke = point1X-strokeWidth
    const yStroke = point2Y-strokeWidth
    const wStroke = point3X-point1X+2*strokeWidth
    const hStroke = point1Y-point2Y+2*strokeWidth
    const xPath = xStroke+wStroke
    const yPath = yStroke+hStroke
    return (<>
        <polygon data-id={elem.id} points={point1+" "+point2+" "+point3} fill={"#"+fillColor} stroke={"#"+borderColor} strokeWidth={""+strokeWidth}/>
        <rect data-id={elem.id} x={""+xStroke} y={""+yStroke} width={""+wStroke} height={""+hStroke} fill="transparent" stroke={borderStyle} strokeWidth={""+selectStrokeWidth}></rect>
        <circle data-id-res={"res_"+elem.id} style={{cursor: 'nw-resize'}} cx={""+xPath} cy={""+yPath} r={""+resizeCircleRad} fill="transparent"/>
        </>)
}

function drawRectangle(elem: Element, scale: number, strokeWidth: number, selectStrokeWidth: number, resizeCircleRad: number, borderStyle: string) {
    const borderColor = (elem as Primitive).primitiveBorderColor
    const fillColor = (elem as Primitive).primitiveFillColor
    const x = elem.elementPosition.x*scale
    const y = elem.elementPosition.y*scale
    const width = elem.elementSize.width*scale
    const height = elem.elementSize.height*scale
    const xStroke = x - strokeWidth
    const yStroke = y - strokeWidth
    const hStroke = height + 2*strokeWidth
    const wStroke = width + 2*strokeWidth
    const xPath = xStroke+wStroke
    const yPath = yStroke+wStroke
    return (<>
        <rect data-id={elem.id} x={""+x} y={""+y} width={""+width} height={""+height} fill={"#"+fillColor} stroke={"#"+borderColor} strokeWidth={""+strokeWidth}/>
        <rect data-id={elem.id} x={""+xStroke} y={""+yStroke} width={""+wStroke} height={""+hStroke} fill="transparent" stroke={borderStyle} strokeWidth={""+selectStrokeWidth}></rect>
        <circle data-id-res={"res_"+elem.id} style={{cursor: 'nw-resize'}} cx={""+xPath} cy={""+yPath} r={""+resizeCircleRad} fill="transparent"/>
    </>)
}

export {drawEllipse, drawTriangle, drawRectangle}