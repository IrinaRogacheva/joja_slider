import {selectSlides} from "../functions/slides"
import {Dispatch, useEffect, useReducer, useRef} from "react"
import {useDispatch} from "react-redux"
import {store} from "../store/store"
import {SELECT_SLIDES} from "../store/actions"
import {Presentation, Position} from "../entries/entries"

let startPos: Position


export function useDragAndDrop(presentation: Presentation) {
    const dispatch: Dispatch<any> = useDispatch()
    const windowRef = useRef(window)

    useEffect(() => {
        windowRef.current.addEventListener('mousedown', (event: MouseEvent) => {
            if (((event.target as HTMLElement).parentElement?.className === 'SlideWrapper' || (event.target as HTMLElement).className === 'SlidesList') && presentation.model.selectedSlidesId.length === 0) {
                                           
            }
            const eTarget = (event.target as HTMLElement) 
        })
        
    })

    useEffect(() => {
        windowRef.current.addEventListener('mousemove', (event: MouseEvent) => {
            console.log('parent: ' + (event.target as HTMLElement).parentElement)
            console.log('class name: ' + (event.target as HTMLElement).className)
             
        })
    })
}