import React from 'react'
import {connect} from 'react-redux'
import {Presentation} from '../entries/entries'
//import changePresentationName from '../functions/presentation'

const mapStateToProps = (state: Presentation) => {
    return {name: state.name}
}

function PresentationName({name}: any) {
    return (
        <input placeholder={name}/>
    )
}

export default connect(mapStateToProps)(PresentationName)