import React from 'react';
import './App.css';
//import {addSlide} from './functions/slides'
//import AddSlidik from './addSlides'
//import Slidik from './slidik'
//import WorkArea from './components/WorkArea'
import PresentationName from './components/PresentationName'

function App() {

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
    </div>
    <div className="WorkArea">
      <svg className="WorkArea2"></svg>
    </div>
  </div>
  {/* <AddSlidik/> */}
  <div>
    {/* <Slidik/> */}
  </div>
  </div>
  );
}

export default App;