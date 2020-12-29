import {Presentation} from '../entries/entries'

function changeCurrTextSize(presentation: Presentation, textSize: number): Presentation {
    return {...presentation,
        view: {...presentation.view,
            textSize: textSize
        }
    } as Presentation
}

function changeCurrentTextFont(presentation: Presentation, textFont: string): Presentation {
    return {...presentation,
        view: {...presentation.view,
            textFont: textFont
        }
    } as Presentation
}

function changeCurrentColorFont(presentation: Presentation, color: string): Presentation {
    return {...presentation,
        view: {...presentation.view,
            color: color
        }
    } as Presentation
}

export {
    changeCurrTextSize,
    changeCurrentTextFont,
    changeCurrentColorFont
}