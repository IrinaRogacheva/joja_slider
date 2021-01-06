import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import PresentationName from './components/PresentationName'
import WorkArea from './components/WorkArea'
import Slides from './components/Slides'
import AddSlide from './components/Buttons/AddSlide'
import DeleteSlides from './components/Buttons/DeleteSlides'
import AddPrimitive from './components/Buttons/AddPrimitive'
import AddPicture from './components/Buttons/AddPicture'
import BackgroundImage from './components/Buttons/BackgroundImage'
import AddText from './components/Buttons/AddText'
import LocalFileMenu from './components/Buttons/LocalFileMenu'
import SwitchSlide from './components/Buttons/SwitchSlide';

function App(props: any) {
  return (
      <div className="App">
        <div className="Main">
          <div className='ButtonsPanel'>
            <PresentationName/>
            <LocalFileMenu/>
            <SwitchSlide/>
            <AddPrimitive/>           
            <AddText/>
            <AddPicture/>
          </div>
          <WorkArea/>
        </div>
        <div className='SlidesListButtons'>
          <AddSlide/>
          <BackgroundImage/>
          <DeleteSlides/>
        </div>
        <Slides/>
      </div>
    );
}

export default connect()(App)