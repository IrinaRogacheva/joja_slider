import {Element, ElementType, BackgroundType, ColorString, ImageElement, Primitive, Text} from '../entries/entries'
/*import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

export async function exportPresentation(presentation: any) {
    let doc = new jsPDF('l', 'px', [1000, 600])
    for (let i = 0; i < presentation.model.slidesList.length; i++) {                   
        doc.addPage('l')
        let s = presentation.model.slidesList[i] 
        if (presentation.view.background.type === BackgroundType.image) {
            let k = (presentation.view.background as ImageElement).imageUrl
            let img = new Image()
            img.src = k
            let w = img.width
            let h = img.height
            let w2 = 1000/w*h   
            doc.addImage(k, 0, 0, 1000, w2)
        } else {
            doc.setFillColor((presentation.view.background as ColorString).color)
            doc.rect(0, 0, 1000, 600, 'F') 
        }
        await new Promise ((resolve) => {
            for (let i = 0; i < s.elements.length; i++) {                   
                let e: Element = s.elements[i]    
                if (e.elementType === ElementType.primitive) {
                    if ((e as Primitive).primitiveType === 'circle') {
                        const cx = (e.elementPosition.x+e.elementSize.width/2)
                        const cy = (e.elementPosition.y+e.elementSize.height/2)
                        const rx = (e.elementSize.width/2)
                        const ry = (e.elementSize.height/2)
                        doc.setFillColor((e as Primitive).primitiveBorderColor)
                        doc.setDrawColor((e as Primitive).primitiveBorderColor)
                        doc.ellipse(cx, cy, rx, ry, 'DF')
                        doc.setFillColor((e as Primitive).primitiveFillColor)
                        doc.setDrawColor((e as Primitive).primitiveBorderColor)
                        doc.ellipse(cx, cy, rx-1.5, ry-1.5, 'DF')
                    } else if ((e as Primitive).primitiveType === 'triangle') {
                        const point1X = (e.elementPosition.x)
                        const point1Y = (e.elementPosition.y+e.elementSize.height)
                        const point2X = (e.elementPosition.x+e.elementSize.width/2)
                        const point2Y = (e.elementPosition.y)
                        const point3X = (e.elementPosition.x+e.elementSize.width)
                        doc.setFillColor((e as Primitive).primitiveBorderColor)
                        doc.triangle(point1X, point1Y, point2X, point2Y, point3X, point1Y, 'DF')
                        doc.setFillColor((e as Primitive).primitiveFillColor)
                        doc.triangle(point1X+4,  point1Y-3, point2X, point2Y+3, point3X-4, point1Y-3, 'F')
                    } else if ((e as Primitive).primitiveType === 'rectangle') {
                        const x = (e.elementPosition.x)
                        const y = (e.elementPosition.y)
                        const width = (e.elementSize.width)
                        const height = (e.elementSize.height)
                        doc.setFillColor((e as Primitive).primitiveBorderColor)
                        doc.setDrawColor((e as Primitive).primitiveBorderColor)
                        doc.rect(x, y, width, height, 'DF')
                        doc.setFillColor((e as Primitive).primitiveFillColor)
                        doc.setDrawColor((e as Primitive).primitiveBorderColor)
                        doc.rect(x+1.5, y+1.5, width-3, height-3, 'DF')
                    }
                } else if (e.elementType === ElementType.image) {
                    const x = (e.elementPosition.x)
                    const y = (e.elementPosition.y)
                    const width = (e.elementSize.width)
                    let img1 = (e as ImageElement).imageUrl
                    let img2 = new Image()
                    img2.src = img1
                    let w1 = img2.width
                    let h2 = img2.height
                    let w3 = width/w1*h2
                    doc.addImage(img2, x, y, width, w3)
                } else if (e.elementType === ElementType.text) {
                    let temp = document.createElement('textarea') as HTMLElement
                    temp.innerHTML = (e as Text).textString
                    temp.style.position = 'absolute'
                    temp.style.right = '100%'
                    temp.style.bottom = '100%'
                    temp.style.fontSize = '40px'
                    const x = (e.elementPosition.x)
                    const y = (e.elementPosition.y)
                    html2canvas(temp, document.body.appendChild(temp)).then((canvas: any) => {
                        let r = canvas.toDataURL('img/png')
                        let img = new Image()
                        img.src = r
                        doc.addImage(img, 'PNG', x, y, img.width*2, img.height*2)
                        console.log('bhghjghj')
                    })
                } 
            }            
            setTimeout(resolve, 3000, "Timeout")
        })
        console.log('1')
    }
    doc.deletePage(1) 
    console.log('save') 
}
*/