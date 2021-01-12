import {View} from '../entries/entries'

function changeCurrentPrimitiveBorderColor(view: View, primitiveBorderColor: string): View {
    return {
        ...view,
        primitiveBorderColor: primitiveBorderColor
    } as View
}

function changeCurrentPrimitiveFillColor(view: View, primitiveFillColor: string): View {
    return {
        ...view,
        primitiveFillColor: primitiveFillColor
    } as View
}

function changeCurrentTextSize(view: View, textSize: number): View {
    return {
        ...view,
        textSize: textSize
    } as View
}

function changeCurrentTextBold(view: View): View {
    let textBold: string = "normal"
    if (view.textBold === "normal") {
        textBold = "bold"
    }
    return {
        ...view,
        textBold: textBold
    } as View
}

function changeCurrentTextItalic(view: View): View {
    let textItalic: string = "normal"
    if (view.textItalic === "normal") {
        textItalic = "italic"
    }
    return {
        ...view,
        textItalic: textItalic
    } as View
}

function changeCurrentTextUnderline(view: View): View {
    let textUnderline: string = "none"
    if (view.textUnderline === "none") {
        textUnderline = "underline"
    }
    return {
        ...view,
        textUnderline: textUnderline
    } as View
}

function changeCurrentTextFont(view: View, textFont: string): View {
    console.log(textFont)
    return {
        ...view,
        textFont: textFont
    } as View
}

function changeCurrentTextColor(view: View, TextColor: string): View {
    return {
        ...view,
        textColor: TextColor
    } as View
}

function changeCurrentTextAlign(view: View, textAlign: string): View {
    return {
        ...view,
        textAlign: textAlign
    } as View
}

export {
    changeCurrentTextSize,
    changeCurrentTextFont,
    changeCurrentTextColor,
    changeCurrentTextAlign,
    changeCurrentPrimitiveBorderColor,
    changeCurrentPrimitiveFillColor,
    changeCurrentTextBold,
    changeCurrentTextItalic,
    changeCurrentTextUnderline
}