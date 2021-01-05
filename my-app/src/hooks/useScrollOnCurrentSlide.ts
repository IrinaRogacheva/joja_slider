import {useEffect} from 'react'

export function useScrollOnCurrentSlide(props: any) {
    useEffect(() => {
        const addedSlideId: string = props.state.model.currentSlide.id
            const addedSlide: SVGSVGElement|null = document.querySelector('[data-id="' + addedSlideId + '"]')
            addedSlide?.scrollIntoView({block: 'center'})
    }, [props.state.model.currentSlide.id])
}