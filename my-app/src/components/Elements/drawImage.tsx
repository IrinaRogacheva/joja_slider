import { Element, ImageElement } from "../../entries/entries"

export function drawImage(elem: Element, scale: number, selectStrokeWidth: number, resizeCircleRad: number, borderStyle: string) {
    const x = elem.elementPosition.x*scale
    const y = elem.elementPosition.y*scale
    const width = elem.elementSize.width*scale
    const height = elem.elementSize.height*scale
    const xStroke = x-1
    const yStroke = y-1
    const hStroke = height+1
    const wStroke = width+1
    const xPath = xStroke+wStroke
    const yPath = yStroke+hStroke
    return (<>
        <image data-id={elem.id} key={elem.id} x={""+x} y={""+y} width={""+width} height={""+height} href={(elem as ImageElement).imageUrl}/>
        <rect data-id={elem.id} x={""+xStroke} y={yStroke} width={""+wStroke} height={""+hStroke} fill="transparent" stroke={borderStyle} strokeWidth={""+selectStrokeWidth}></rect>
        <circle data-id-res={"res_"+elem.id} style={{cursor: 'nw-resize'}} cx={""+xPath} cy={""+yPath} r={""+resizeCircleRad} fill="transparent"/>
      </>)
}