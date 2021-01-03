import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import { Presentation } from './entries/entries';
import {useDragAndDrop} from '../src/hooks/useDragAndDrop'
import PresentationName from './components/PresentationName'
import WorkArea from './components/WorkArea'
import Slides from './components/Slides'
import AddSlide from './components/AddSlide';
import AddPrimitiveCircle from './components/AddPrimitiveCircle'

const mapStateToProps = (state: Presentation) => {
  return {
      state: state
  }
}

function App(props: any) {
  useDragAndDrop(props.state)  

return (
<div className="App">
  <div className="Main">
    <div className='Main2'>
      <PresentationName/>
      <button className='IconButton Left'></button>
      <button className='IconButton Right'></button>
      <button className='IconButton tr'></button>
      <button className='IconButton kr'></button>
      <button className='IconButton kv'></button>
      <button className='IconButton Picture'></button>
      {/*<AddPrimitiveTriangle/>*/}
      <AddPrimitiveCircle/>
       {/*<AddPrimitiveRectangle/>*/}
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