import {useEffect, useState} from 'react'
import { Position } from '../entries/entries'
import {findElementById} from '../functions/elements'

export function useMoveElement(props: any, workAreaRef: any) {
    const [startPos, setStartPos] = useState<Position|null>(null)
    const [startElPos, setStartElPos] = useState<Position|null>(null)
    const [elemId, setElemId] = useState<string|null>(null)

    useEffect(() => {
        function onMouseDown(e: MouseEvent) {
            let workAreaCur = workAreaRef.current
            console.log('x: '+e.clientX+' y: '+e.clientY)
            const selectedElementsId: Array<string> = props.state.model.selectedElementsId
            setElemId((e.target as SVGSVGElement).getAttribute('data-id'))
            if (selectedElementsId.length <= 1 && elemId) {
                const elem = findElementById(props.state, elemId)
                if (elem !== null) {
                    console.log('start drag and drop')
                    setStartPos({x: e.clientX, y: e.clientY})
                    setStartElPos(elem.elementPosition)
                    console.log(elem.elementPosition.x)
                    const elemWrapper: SVGSVGElement|null = document.querySelector('[data-element-id="' + elemId + '"]')
                    if (elemWrapper) {
                        elemWrapper.style.cursor = 'all-scroll'
                    }
                    workAreaCur.addEventListener('mousemove', onMouseMove)
                }
            }

            function onMouseMove(e: MouseEvent) {
                if (startPos && startElPos) {
                    console.log('drag and drop')
                    console.log('x: '+e.clientX+' y: '+e.clientY)
                    let delta = {x: e.clientX - startPos.x, y: e.clientY - startPos.y}
                    let newPos = {x: startElPos.x + delta.x, y: startElPos.y + delta.y}
                    props.moveElement(newPos)
                    workAreaCur.addEventListener('mouseup', onMouseUp)
                }
            }
    
            function onMouseUp(e: MouseEvent) {
                const elemWrapper: SVGSVGElement|null = document.querySelector('[data-element-id="' + elemId + '"]')
                    if (elemWrapper) {
                        elemWrapper.style.cursor = 'pointer'
                    }
                workAreaCur.removeEventListener('mousemove', onMouseMove)
                workAreaCur.removeEventListener('mouseup', onMouseUp)
            }
        }

        if (workAreaRef && workAreaRef.current) {
            workAreaRef.current?.addEventListener('mousedown', onMouseDown)
            let workAreaCur = workAreaRef.current

            return () => {
                workAreaCur.removeEventListener('mousedown', onMouseDown)
                
            }
        }
    }, [elemId, props, props.state, props.state.model.selectedElementsId, startElPos, startPos, workAreaRef])
    }