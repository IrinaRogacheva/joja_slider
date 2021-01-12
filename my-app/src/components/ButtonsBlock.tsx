import React, { Dispatch } from 'react'
import {Presentation} from '../entries/entries'
import * as Action from '../store/actions'
import {connect} from 'react-redux'
import {PresentationName} from './HighBlock/PresentationName'
import {LocalFileMenu} from './HighBlock/LocalFileMenu'
import {Primitives} from './HighBlock/AddPrimitive'
import { openLocalPresentation } from '../functions/presentation'
import { UndoRedo } from './HighBlock/UndoRedo'
import { AddText } from './HighBlock/AddText'
import { Fonts } from './HighBlock/Fonts'
import { ChangeTextAlign } from './HighBlock/TextAlign'
import { ChangeTextBIU } from './HighBlock/TextBIU'
import {AddPicture} from './HighBlock/AddPicture'
import { openPicture } from '../functions/imageElements'
import { ShowButton } from './HighBlock/ShowPresentation'

const mapStateToProps = (state: Presentation) => {
    return {state: state}
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        addText: (text: string) => dispatch({type: Action.ADD_TEXT, payload: text}),
        addPrimitiveCircle: () => dispatch({type: Action.ADD_PRIMITIVE_CIRCLE}),
        addPrimitiveRectangle: () => dispatch({type: Action.ADD_PRIMITIVE_RECTANGLE}),
        addPrimitiveTriangle: () => dispatch({type: Action.ADD_PRIMITIVE_TRIANGLE}),
        changePresentationName: (newName: string) => dispatch({type: Action.CHANGE_NAME, payload: newName}),
        createPresentation: () => dispatch({type: Action.CREATE_PRESENTATION}),
        openLocalPresentation: (e: React.ChangeEvent<HTMLInputElement>) => openLocalPresentation(e, dispatch),
        undo: () => dispatch({type: Action.UNDO}),
        redo: () => dispatch({type: Action.REDO}),
        changeFont: (font: string) => dispatch({type: Action.CHANGE_FONT, payload: font}),
        changeTextAlign: (align: string) => dispatch({type: Action.CHANGE_TEXT_ALIGN, payload: align}),
        changeTextBold: () => dispatch({type: Action.TEXT_BOLD}),
        changeTextItalic: () => dispatch({type: Action.TEXT_ITALIC}),
        changeTextUnderline: () => dispatch({type: Action.TEXT_UNDERLINE}),
        openPicture: (e: React.ChangeEvent<HTMLInputElement>) => openPicture(e, dispatch),
        showPresentation: (b: boolean) => dispatch({type: Action.SHOW_STOP_PRESENTATION, payload: b}) 
    } 
}

function ButtonsBlock(props: any) {
    
    return (<div className='ButtonsPanel'>
        {PresentationName(props)}
        {LocalFileMenu(props)}
        {UndoRedo(props)}
        {Primitives(props)}
        {AddText(props)}
        {Fonts(props)}
        {ChangeTextAlign(props)}
        {ChangeTextBIU(props)}
        {AddPicture(props)}
        {ShowButton(props)}
    </div>)}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonsBlock)