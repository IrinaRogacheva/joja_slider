import React, { Dispatch } from 'react';
import {Presentation, Slide} from '../entries/entries'
import {DELETE_SLIDE} from '../store/actions'
import {connect} from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
export const NEW_SLIDE_ID = uuidv4()

const stateOne = (state: Presentation) => {
    return {state: state}
}

const dispatchOne = (dispatch: Dispatch<any>) => {
    return {
        deleteSlide: () => dispatch({type: DELETE_SLIDE}),
    }
}


function Slidik(props: any) {
    let slides = props.state.model.slidesList.map((s: Slide) => {
        let slidik1 = s.background
        return <div key={s.id}>
            <p>{s.background}</p>
            <svg className='Slide' style={{background: '#'+slidik1}}></svg>
            {/*<button onClick={()=>props.deleteSlide()}></button>*/}
            </div>
            })
            return (
                <div className='Div1'>
                    {slides}
                </div>
            )
        }
export default connect(stateOne, dispatchOne)(Slidik)