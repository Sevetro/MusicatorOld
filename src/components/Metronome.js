import React, { Component } from 'react'

export default class Metronome extends Component {

    toggleMetronome = () => {
        clearInterval(this.metronomeId)
        if (this.props.isActive) {
            this.props.flashMetronomeLed()
            this.metronomeId = setInterval(this.props.flashMetronomeLed, (60 / (this.props.bpmNumber)) * 1000)
        }
    }

    render() {
        const btnStyles = {
            display: "inline-block",
            marginLeft: 1,
            marginRight: 1
        }

        return (
            <div className="Metronome">

                <button onClick={() => this.props.changeMetronomeState(-10, this.props.isActive, this.toggleMetronome)} style={btnStyles}  >-10</button>
                <button onClick={() => this.props.changeMetronomeState(-1, this.props.isActive, this.toggleMetronome)} style={btnStyles} >-</button>
                <div style={{ display: "inline-block", width: 30 }} >{this.props.bpmNumber}</div>
                <button onClick={() => this.props.changeMetronomeState(1, this.props.isActive, this.toggleMetronome)} style={btnStyles}  >+</button>
                <button onClick={() => this.props.changeMetronomeState(10, this.props.isActive, this.toggleMetronome)} style={btnStyles}  >+10</button>

                <button
                    onClick={() => this.props.changeMetronomeState(0, !this.props.isActive, this.toggleMetronome)}
                    id="playStopButton"
                    style={{ backgroundColor: this.props.isActive ? "red" : "white" }}
                >PLAY/STOP</button>
                
                <div className="metronomeLed" id="metronomeLed" style={{ backgroundColor: this.props.metronomeLedColor }} ></div>
            </div>
        )
    }
}