import {ImageElement, ElementType} from '../entries/entries' 
import {IMAGE} from '../entries/constants' 
import { Dispatch } from 'react' 
import { ADD_ELEMENT } from '../store/actions'

function openPicture(evt: React.ChangeEvent<HTMLInputElement>, dispatch: Dispatch<any>) { 
    let img = new FileReader()
    if (evt.target.files != null) {
     img.onloadend = function() {   
     if (typeof(img.result) === 'string') {  
         if (IMAGE.elementType === ElementType.image) {
             (IMAGE as ImageElement).imageUrl = img.result as string
            } 
        dispatch({type: ADD_ELEMENT, payload: IMAGE})
    }}
    img.readAsDataURL(evt.target.files[0])
   } 
 }

 export {openPicture}