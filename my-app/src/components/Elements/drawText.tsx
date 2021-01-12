import {Element, Text} from '../../entries/entries'

export function drawText(props: any, elem: Element, scale: number, selectStrokeWidth: number, resizeCircleRad: number, borderStyle: string) {
    const x = elem.elementPosition.x*scale
    const y = elem.elementPosition.y*scale
    const width = elem.elementSize.width*scale
    const height = elem.elementSize.height*scale
    const textFont = (elem as Text).textFont
    const textSize = (elem as Text).textSize*scale
    const textColor = (elem as Text).textColor
    const textAlign = insertTextAlign(elem)
    const textBold = insertTextBold(elem)
    const textItalic = insertTextItalic(elem)
    const textUnderline = insertTextUnderline(elem)
    const xStroke = x-1
    const yStroke = y-1
    const hStroke = height+1
    const wStroke = width+1
    const xPath = xStroke+wStroke
    const yPath = yStroke+wStroke
    return <> 
        <foreignObject onDoubleClick={(e)=>changeCursor(e.target as SVGForeignObjectElement)} data-id={elem.id} x={""+x} y={""+y} width={""+width} height={""+height}> 
        <textarea id="text_id_pr1" style={{ height: ""+height+"px", width: ""+(width-1)+"px", fontFamily: textFont, fontSize: textSize+"px", color: "#"+textColor, textDecoration: textUnderline, fontWeight: textBold, fontStyle: textItalic, textAlign: textAlign}} value={(elem as Text).textString} onChange={(e) => props.addText(e.target.value)} /> 
        </foreignObject>
        <rect data-id={elem.id} x={""+xStroke} y={yStroke} width={""+wStroke} height={""+hStroke} fill="transparent" stroke={borderStyle} strokeWidth={""+selectStrokeWidth}></rect>
        <circle data-id-res={"res_"+elem.id} style={{cursor: 'nw-resize'}} cx={""+xPath} cy={""+yPath} r={""+resizeCircleRad} fill="transparent"/>
    </>
}

function changeCursor(elem: SVGForeignObjectElement) {
    //elem.style.cursor = 
}

function insertTextAlign(e: Element) {
    if ((e as Text).textAlign === "center") {
        return "center"
    }
    else if ((e as Text).textAlign === "right") {
        return "right"
    }
    else {
        return "left"
    }
}

function insertTextBold(e: Element) {
    if ((e as Text).textBold === "bold") {
        return "bold"
    }
    else {
        return "normal"
    }
}

function insertTextItalic(e: Element) {
    if ((e as Text).textItalic === "italic") {
        return "italic"
    }
    else {
        return "normal"
    }
}

function insertTextUnderline(e: Element) {
    if ((e as Text).textUnderline === "underline") {
        return "underline"
    }
    else {
        return "none"
    }
}