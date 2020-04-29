import React, { Component } from 'react'

export default class Metronome2 extends Component {
    //powinno byc constructor(props)? czy bez props
    constructor() {
        super()
        this.state = {
            metronomeLedColor: "white",
        }
    }


    toggleMetronome = () => {
        clearInterval(this.metronomeId)
        if (this.props.isActive) {
            this.flashMetronomeLed()
            this.metronomeId = setInterval(this.flashMetronomeLed, (60 / (this.props.bpmNumber)) * 1000)
            
        }
    }


    flashMetronomeLed = () => {
        this.setState({ metronomeLedColor: "blue" }, () => setTimeout(() => {
            this.setState({ metronomeLedColor: "white" })
        }, 100))
    }


    render() {
        const btnStyles = {
            display: "inline-block",
            marginLeft: 1,
            marginRight: 1
        }

        return (
            <div className="Metronome">
                <button onClick={() => this.props.changeBpmNumber(-10, this.toggleMetronome)} style={btnStyles}  >-10</button>
                <button onClick={() => this.props.changeBpmNumber(-1, this.toggleMetronome)} style={btnStyles} >-</button>
                <div style={{ display: "inline-block", width: 30 }} >{this.props.bpmNumber}</div>
                <button onClick={() => this.props.changeBpmNumber(1, this.toggleMetronome)} style={btnStyles}  >+</button>
                <button onClick={() => this.props.changeBpmNumber(10, this.toggleMetronome)} style={btnStyles}  >+10</button>

                <button
                    onClick={() => this.props.changeActive(this.toggleMetronome)}
                    id="playStopButton"
                    style={{ backgroundColor: this.props.isActive ? "red" : "white" }}
                >PLAY/STOP</button>
                <div className="metronomeLed" id="metronomeLed" style={{ backgroundColor: this.state.metronomeLedColor }} ></div>
            </div>
        )
    }
}