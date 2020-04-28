import React, { Component } from 'react'
import './App.css'
import Metronome2 from './components/Metronome2'
// import Metronome from './components/Metronome'



export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bpmNumber: 200,
      isActive: false
    }
  }


  changeBpmNumber = (newBpm) => {
    this.setState({ bpmNumber: newBpm, isActive: this.state.isActive })
  }

  changeActive = () => {
    this.setState({ bpmNumber: this.state.bpmNumber, isActive: !this.state.isActive})
  }

  render() {
    return (
      <div className="App">

        {/* <Metronome metronomeState={{ bpmNumber: 200, active: false }} /> */}
        <Metronome2
          bpmNumber={this.state.bpmNumber}
          isActive={this.state.isActive}
          changeBpmNumber={this.changeBpmNumber}
          changeActive={this.changeActive}
        />
      </div>
    )
  }
}