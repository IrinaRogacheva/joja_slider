import React from 'react';
import './App.css';
import {PresentationName} from './components/PresentationName';
//import Hello from './chto-to'

function App() {
  return (
    <div className="App">
      <div className="Menu">
        <PresentationName/>
      </div>
      <div className="Main">
        <div className="WorkArea"></div>        
        <div className="SlidesList"></div>  
      </div>
    </div>
  );
}

export default App;