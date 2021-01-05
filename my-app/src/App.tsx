import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import PresentationName from './components/PresentationName'
import WorkArea from './components/WorkArea'
import Slides from './components/Slides'
import AddSlide from './components/Buttons/AddSlide'
import AddPrimitive from './components/Buttons/AddPrimitive'
import AddPicture from './components/Buttons/LoadPicture'
import AddText from './components/Buttons/AddText'
import OpenSaveLocal from './components/Buttons/OpenSaveLocal'

function App(props: any) {
  return (
      <div className="App">
        <div className="Main">
          <div className='ButtonsPanel'>
            <PresentationName/>
            <OpenSaveLocal/>
            <button className='IconButton Left'></button>
            <button className='IconButton Right'></button>
            <AddPrimitive/>           
            <AddText/>
            <button className='IconButton Picture' onClick={()=><AddPicture/>}></button>  
            <input className='IconButton Picture' type='file' id='ii' style={{display: 'none'}}></input>
          </div>
          <WorkArea/>
        </div>
        <AddSlide/>
        <Slides/>
      </div>
    );
}

export default connect()(App)