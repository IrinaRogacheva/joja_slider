import {BackgroundType, Presentation, Slide, ImageElement} from '../entries/entries'
import {changeSlideInSlidesList} from '../functions/elements'
import { v4 as uuidv4 } from 'uuid'
import { Dispatch } from 'react' 
import { CHANGE_BACKGROUND_SLIDE } from '../store/actions'
import {BACKGROUND, WHITE_BACK_COLOR} from '../entries/constants'

function addSlide(presentation: Presentation): Presentation {
    const currentSlide: Slide = {...presentation.model.currentSlide}
    const currentSlideId: string = currentSlide.id
    const newSlideId: string = uuidv4()
    const newSlide: Slide = {
        background: {...presentation.model.currentSlide}.background,
        elements: [],
        id: newSlideId
    }
    const copySlides: Array<Slide> = presentation.model.slidesList.slice()
    for (let i = 0; i < copySlides.length; i++) {
        if(copySlides[i].id === currentSlideId)
        {
            const index = copySlides.indexOf(copySlides[i]) + 1
            copySlides.splice(index, 0, newSlide)
            break
        }
    }
    return {...presentation,
        model: {...presentation.model,
            slidesList: copySlides,
            currentSlide: newSlide,
            selectedSlidesId: [newSlideId],
            selectedElementsId: []
        }
    } as Presentation  
}

function moveSlide(presentation: Presentation, newIndex: number): Presentation {
    const newId: string = presentation.model.slidesList[newIndex].id
    const copySlides: Array<Slide> = presentation.model.slidesList.slice()
    const moveElements: Array<Slide> = []
    const selectedSlidesId: Array<string> = presentation.model.selectedSlidesId.slice()
    for (let i = 0; i < copySlides.length; i++) {
        if (selectedSlidesId.includes(copySlides[i].id)) {
            const tempMoveElement: Slide = copySlides.splice(i, 1)[0]
            moveElements.push(tempMoveElement)
            i--
        }
    }
    let index: number = 0
    for (let i = 0; i < copySlides.length; i++) {
        if (copySlides[i].id === newId) {
            index = i
            break
        }
    }

    for (let i = index; i < index + moveElements.length; i++) {
        copySlides.splice(i, 0, moveElements[i-index])
    }
    return {...presentation,
        model: {...presentation.model,
            slidesList: copySlides
        }
    } as Presentation     
}

function deleteSlide(presentation: Presentation): Presentation {
    const copySlides: Array<Slide> = presentation.model.slidesList.slice()
    const selectedSlidesId: Array<string> = presentation.model.selectedSlidesId
    let currentSlide: Slide = presentation.model.currentSlide
    let currentSlideIndex: number = 0
    for (let i = 0; i < copySlides.length; i++) {
        if (copySlides[i].id === currentSlide.id) {
            currentSlideIndex = i
            break
        }
    }
    console.log(currentSlideIndex)
    for (let i = 0; i < copySlides.length; i++) {
        if (selectedSlidesId.includes(copySlides[i].id)) {
            copySlides.splice(i, 1)
            i--
        }
    }
    if (currentSlideIndex < copySlides.length) {
        currentSlide = {...copySlides[currentSlideIndex]}
    }
    else if (currentSlideIndex < copySlides.length){
        currentSlide = {...copySlides[copySlides.length-1]}
    } else {
        const newSlideId = uuidv4()
        currentSlide = {
                background: WHITE_BACK_COLOR,
                elements: [],
                id: newSlideId
            }
        copySlides.splice(0, 1, currentSlide)    
    }

    console.log(currentSlide.id)
    return {...presentation,
        model: {...presentation.model,
            currentSlide: currentSlide,
            selectedSlidesId: [currentSlide.id],
            slidesList: copySlides
        }
    } as Presentation 
}

function changeBackgroundColor(presentation: Presentation, backgroundColor: BackgroundType): Presentation {
    const currentSlide: Slide = {
        ...presentation.model.currentSlide,
        background: backgroundColor
    }
    return {...presentation,
        model: {...presentation.model,
            slidesList: changeSlideInSlidesList(presentation, currentSlide),
            currentSlide: currentSlide
        }
    } as Presentation 
}

function backgroundPicture(evt: React.ChangeEvent<HTMLInputElement>, dispatch: Dispatch<any>) { 
    let img = new FileReader()
    if (evt.target.files != null) {
     img.onloadend = function() {   
     if (typeof(img.result) === 'string') {  
        (BACKGROUND as ImageElement).imageUrl = img.result as string
        dispatch({type: CHANGE_BACKGROUND_SLIDE, payload: BACKGROUND})
    }}
    img.readAsDataURL(evt.target.files[0])
   } 
 }

function changeCurrentSlide(presentation: Presentation, slideId: string): Presentation {
    const copySlides: Array<Slide> = presentation.model.slidesList.slice()
    let newCurrentSlide: Slide = {...presentation.model.currentSlide}
    for (let i = 0; i < copySlides.length; i++) {
        if (copySlides[i].id === slideId) {
            newCurrentSlide = copySlides[i]
            break
        }
    }
    return {...presentation,
        model: {...presentation.model,
            currentSlide: newCurrentSlide,
            selectedSlidesId: [newCurrentSlide.id],
            selectedElementsId: []
        }
    } as Presentation
}

function showPrevSlide(presentation: Presentation): Presentation {
    const curSlideId: string = presentation.model.currentSlide.id
    const copySlides: Array<Slide> = presentation.model.slidesList.slice()
    let newCurrentSlide: Slide = {...presentation.model.currentSlide}
    for (let i = 0; i < copySlides.length; i++) {
        if (copySlides[i].id === curSlideId) {
            if (i !== 0) {
                newCurrentSlide = copySlides[i-1]
            } else {
                newCurrentSlide = copySlides[i]
            }
            break
        }
    }
    return {...presentation,
        model: {...presentation.model,
            currentSlide: newCurrentSlide,
            selectedSlidesId: [newCurrentSlide.id],
            selectedElementsId: []
        }
    } as Presentation
}

function showNextSlide(presentation: Presentation): Presentation {
    const curSlideId: string = presentation.model.currentSlide.id
    const copySlides: Array<Slide> = presentation.model.slidesList.slice()
    let newCurrentSlide: Slide = {...presentation.model.currentSlide}
    for (let i = 0; i < copySlides.length; i++) {
        if (copySlides[i].id === curSlideId) {
            if (i !== copySlides.length-1) {
                newCurrentSlide = copySlides[i+1]
            } else {
                newCurrentSlide = copySlides[i]
            }
            break
        }
    }
    return {...presentation,
        model: {...presentation.model,
            currentSlide: newCurrentSlide,
            selectedSlidesId: [newCurrentSlide.id],
            selectedElementsId: []
        }
    } as Presentation
}

function selectSlides(presentation: Presentation, slideId: string): Presentation {
    if (presentation.model.selectedSlidesId.includes(slideId)) {
        return presentation
    } 
    const copySelectedSlidesId: Array<string> = presentation.model.selectedSlidesId.slice()
    copySelectedSlidesId.splice(copySelectedSlidesId.length, 0, slideId)
    return {...presentation,
        model: {...presentation.model,
            selectedSlidesId: copySelectedSlidesId
        }
    } as Presentation
}

export {
    moveSlide,
    deleteSlide,
    addSlide,
    changeBackgroundColor,
    backgroundPicture,
    changeCurrentSlide,
    showPrevSlide,
    showNextSlide,
    selectSlides
}