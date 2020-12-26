import React from 'react'
import {connect} from 'react-redux'
import { Presentation } from '../entries/entries'

const mapStateToProps = (state: Presentation) => {
    return {
        state: state
    }
}

function WorkArea() {
    return (
        <div>
        work area
        </div>
    )
}

export default connect(mapStateToProps)(WorkArea)