import React, { Component } from 'react'

export default class Metronome2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            metronomeLedColor: "white",
        }
    }


    toggleMetronome = () => {
        if (this.props.isActive)
            this.metronomeId = setInterval(this.changeLedColor, (60 / this.props.bpmNumber) * 1000)
        else {
            clearInterval(this.metronomeId)
            this.setState({ metronomeLedColor: "white" })
        }
    }


    changeLedColor = () => {
        this.setState({ metronomeLedColor: this.state.metronomeLedColor === "white" ? "blue" : "white" })
        console.log("elo2")
    }


    changeBpmBtnClick(btnValue) {
        this.props.changeBpmNumber(this.props.bpmNumber + btnValue)

        if (this.props.isActive) {
            clearInterval(this.metronomeId)
            this.metronomeId = setInterval(this.changeLedColor, (60 / this.props.bpmNumber) * 1000)
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
                <button onClick={() => this.changeBpmBtnClick(-10)} style={btnStyles}  >-10</button>
                <button onClick={() => this.changeBpmBtnClick(-1)} style={btnStyles} >-</button>
                <div style={{ display: "inline-block", width: 30 }} >{this.props.bpmNumber}</div>
                <button onClick={() => this.changeBpmBtnClick(1)} style={btnStyles}  >+</button>
                <button onClick={() => this.changeBpmBtnClick(10)} style={btnStyles}  >+10</button>

                <button onClick={() => this.props.changeActive(this.toggleMetronome)} id="playStopButton" style={{ backgroundColor: this.props.isActive ? "red" : "white" }}>PLAY/STOP</button>
                <div className="metronomeLed" id="metronomeLed" style={{ backgroundColor: this.state.metronomeLedColor }} ></div>
            </div>
        )
    }
}