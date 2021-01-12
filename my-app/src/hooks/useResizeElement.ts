import {useEffect, useState} from 'react'
import { Position, Size } from '../entries/entries'
import {findElementById} from '../functions/elements'

export function useResizeElement(props: any, workAreaRef: any) {
    const [startPos, setStartPos] = useState<Position|null>(null)
    const [startElSize, setStartElSize] = useState<Size|null>(null)

    useEffect(() => {
        function onMouseDown(e: MouseEvent) {
            let workAreaCur = workAreaRef.current
            console.log('x: '+e.clientX+' y: '+e.clientY)
            const selectedElementsId: Array<string> = props.state.model.selectedElementsId
            let elemId: string|null = (e.target as SVGSVGElement).getAttribute('data-id-res')
            
            let check: string = ''
            if (elemId !== null) {
                console.log(elemId)
            console.log(elemId?.substr(0, 4))
            console.log(elemId?.slice(4))
                check = elemId.slice(0, 4)
                elemId = elemId.slice(4)
            }
            console.log(elemId?.substr(0, 4))
            if (selectedElementsId.length === 1 && elemId && check === 'res_') {
                const elem = findElementById(props.state, elemId)
                if (elem !== null) {
                    console.log('start resize')
                    setStartPos({x: e.clientX, y: e.clientY})
                    setStartElSize(elem.elementSize)
                    console.log(elem.elementSize.height)
                    workAreaCur.addEventListener('mousemove', onMouseMove)
                }
            }

            function onMouseMove(e: MouseEvent) {
                if (startPos && startElSize) {
                    console.log('resizing')
                    console.log('x: '+e.clientX+' y: '+e.clientY)
                    let delta: Size = {width: e.clientX - startPos.x, height: e.clientY - startPos.y}
                    let newSize: Size = {width: startElSize.width + delta.width, height: startElSize.height + delta.height}
                    props.resizeElement(newSize)
                    workAreaCur.addEventListener('mouseup', onMouseUp)
                }
            }
    
            function onMouseUp(e: MouseEvent) {
                workAreaCur.removeEventListener('mousemove', onMouseMove)
                workAreaCur.removeEventListener('mousedown', onMouseUp)
            }
        }

        if (workAreaRef && workAreaRef.current) {
            workAreaRef.current?.addEventListener('mousedown', onMouseDown)
            let workAreaCur = workAreaRef.current

            return () => {
                workAreaCur.removeEventListener('mousedown', onMouseDown)
                
            }
        }
    }, [props, props.state, props.state.model.selectedElementsId, startElSize, startPos, workAreaRef])
    }