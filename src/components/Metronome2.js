import React, { Component } from 'react'

export default class Metronome2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            metronomeLedColor: "white",
            isActive: this.props.isActive
        }
    }




    changeLedColor = () => {
        this.setState({ metronomeLedColor: this.state.metronomeLedColor === "white" ? "blue" : "white" })
    }

    changeBpmBtnClick() {
        if (this.props.isActive) {
            clearInterval(this.metronomeId)
            this.metronomeId = setInterval(this.changeLedColor, (60 / this.props.bpmNumber) * 1000)
        }
    }




    
    playStopClick = () => {

        console.log('isActive property przed metodą changeActive: ' + this.props.isActive)
        this.props.changeActive()
        console.log('isActive property po metodzie changeActive: ' + this.props.isActive)


        //this.props.changeActive() nie zmienia mi w locie property isActive przez co poniższa podmiana kolorów jest bez sensu
        // bo background ma być czerwony, kiedy metronom jest aktywny, a nie na odwrót.
        document.getElementById("playStopButton").style.backgroundColor = !this.props.isActive ? "red" : "white"

        //To samo tutaj
        if (!this.props.isActive)
            this.metronomeId = setInterval(this.changeLedColor, (60 / this.props.bpmNumber) * 1000)
        else {
            clearInterval(this.metronomeId)
            this.setState({ metronomeLedColor: "white" })
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
                <button onClick={() => { this.props.changeBpmNumber(this.props.bpmNumber - 10); this.changeBpmBtnClick() }} style={btnStyles}  >-10</button>
                <button onClick={() => { this.props.changeBpmNumber(this.props.bpmNumber - 1); this.changeBpmBtnClick() }} style={btnStyles} >-</button>
                <div style={{ display: "inline-block", width: 30 }} >{this.props.bpmNumber}</div>
                <button onClick={() => { this.props.changeBpmNumber(this.props.bpmNumber + 1); this.changeBpmBtnClick() }} style={btnStyles}  >+</button>
                <button onClick={() => { this.props.changeBpmNumber(this.props.bpmNumber + 10); this.changeBpmBtnClick() }} style={btnStyles}  >+10</button>

                <button onClick={this.playStopClick} id="playStopButton" style={{ backgroundColor: "white" }}>PLAY/STOP</button>
                <div className="metronomeLed" id="metronomeLed" style={{ backgroundColor: this.state.metronomeLedColor }} ></div>
            </div>
        )
    }
}