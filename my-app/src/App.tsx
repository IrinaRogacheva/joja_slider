import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import { Presentation } from './entries/entries';
import PresentationName from './components/PresentationName'
import WorkArea from './components/WorkArea'
import Slides from './components/Slides'
import AddSlide from './components/AddSlide';
import AddPrimitiveCircle from './components/AddPrimitiveCircle'
import AddPrimitiveTriangle from './components/AddPrimitiveTriangle'
import AddPrimitiveRectangle from './components/AddPrimitiveRectangle'
import OpenSaveLocal from './components/OpenSaveLocal';

const mapStateToProps = (state: Presentation) => {
  return {
      state: state
  }
}

function App(props: any) {
  return (
<div className="App">
  <div className="Main">
    <div className='Main2'>
      <PresentationName/>
      {/*<OpenSaveLocal/>*/}
      <button className='IconButton Left'></button>
      <button className='IconButton Right'></button>
      <AddPrimitiveCircle/>
      <AddPrimitiveTriangle/>
      <AddPrimitiveRectangle/>
      <button className='IconButton Picture'></button>
    </div>
    <div className="WorkArea">
      <WorkArea/>
    </div>
  </div>
  <AddSlide/>
  <Slides/>
  </div>
  );
}

export default connect(mapStateToProps)(App)