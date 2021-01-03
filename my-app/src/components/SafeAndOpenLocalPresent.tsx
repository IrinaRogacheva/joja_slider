import React, { Dispatch } from 'react';
//import {Dropdown} from 'react-bootstrap';
import './App.css';
//import {addSlide} from './functions/slides'
//import Presento from './chto-to'
import {connect} from 'react-redux'
import {Presentation} from '../entries/entries'
import { saveLocalPresentation, createPresentation } from '../functions/presentation';
import { CREATE_PRESENTATION } from '../store/actions';
import 'bootstrap/dist/css/bootstrap.min.css'

const stateOne = (state: Presentation) => {
    return {
        state: state
    }
}

const dispatchOne = (dispatch: Dispatch<any>) => {
    return {
        createPresentation: () => dispatch({type: CREATE_PRESENTATION}),
    }
}

function Save(props: any) {
    return (
        //<Dropdown>
          //  <Dropdown.Toggle>menu</Dropdown.Toggle>
            //<Dropdown.Menu>
        //<Dropdown.Item className='IconButton' onClick={()=>{saveLocalPresentation(props.state)}}>Save</Dropdown.Item>
                <div><input type='file'></input></div>
          //      <Dropdown.Item className='IconButton' onClick={()=>{createPresentation()}}>New</Dropdown.Item>
           // </Dropdown.Menu>
        //</Dropdown>
    )
}

export default connect(stateOne, dispatchOne)(Save)