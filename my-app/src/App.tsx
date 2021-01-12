import './App.css'
import {Dispatch, useEffect} from 'react'
import {connect} from 'react-redux'
import {UNDO, REDO} from './store/actions'
import WorkArea from './components/WorkArea'
import Slides from './components/Slides'
import { changeHistory } from './functions/history'
import { Presentation } from './entries/entries'
import WorkAreaShow from './components/SlideShow'
import ButtonsBlock from './components/ButtonsBlock'
import SlidesListButtons from './components/SlidesListButtons'

const mapStateToProps = (state: Presentation) => {
  return {state: state}
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
      undo: () => dispatch({type: UNDO}),
      redo: () => dispatch({type: REDO})
  }
}

function App(props: any) {
  //useEffect(() => {
    //changeHistory(props.state)
//}, [props.state])
changeHistory(props.state)
  document.addEventListener('keydown', (event) => {
    if (event.code === 'KeyZ') {
      props.undo()
      changeHistory(props.state)
    }
  })
  let displayStyle = 'flex'
  if (props.state.view.b === true) {
     displayStyle = 'none'
  } else {
      displayStyle = 'flex' 
  }
  return (
      <div className="App">
        <WorkAreaShow />
        <div style={{display: displayStyle}}>
          <div className="Main">
            <ButtonsBlock/>
            <WorkArea/>
          </div>
          <SlidesListButtons/>
          <Slides/>
        </div>
      </div>  
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(App)