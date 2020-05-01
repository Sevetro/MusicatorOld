import React, { Component } from 'react'

export default class Metronome extends Component {

    //w sensie takie wyciągniecie 60 i 1000 do stałych?
    secPerMin = 60
    milSecPerSec = 1000
    toggleMetronome = () => {
        clearInterval(this.metronomeId)
        if (this.props.isActive) {
            this.metronomeId = setInterval(this.props.hitTheNote, (this.secPerMin / (this.props.bpmNumber)) * this.milSecPerSec)
        }
    }

    render() {
        const btnStyles = {
            display: "inline-block",
            marginLeft: 1,
            marginRight: 1
        }

        const { isActive, bpmNumber, metronomeLedColor } = this.props

        const changeMetronomeState = (val, newActive) => {
            this.props.changeMetronomeState(val, newActive, this.toggleMetronome)
        }

        return (
            <div className="Metronome">

                <button onClick={() => changeMetronomeState(-10, isActive)} style={btnStyles} >-10</button>
                <button onClick={() => changeMetronomeState(-1, isActive)} style={btnStyles} >-</button>
                <div style={{ display: "inline-block", width: 30 }} >{bpmNumber}</div>
                <button onClick={() => changeMetronomeState(1, isActive)} style={btnStyles} >+</button>
                <button onClick={() => changeMetronomeState(10, isActive)} style={btnStyles} >+10</button>

                <button
                    id="playStopButton"
                    onClick={() => changeMetronomeState(0, !isActive)}
                    style={{ backgroundColor: isActive ? "red" : "white" }}
                >PLAY/STOP</button>
                <div className="metronomeLed" id="metronomeLed" style={{ backgroundColor: metronomeLedColor }} ></div>

            </div>
        )
    }
}