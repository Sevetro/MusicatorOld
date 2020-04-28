import React, { Component } from 'react'
import './App.css'
import Metronome from './components/Metronome'


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


  changeActive = (toggleMetronome) => {
    this.setState({ bpmNumber: this.state.bpmNumber, isActive: !this.state.isActive }, toggleMetronome)
  }


  render() {
    return (
      <div className="App">

        <Metronome
          bpmNumber={this.state.bpmNumber}
          isActive={this.state.isActive}
          changeBpmNumber={this.changeBpmNumber}
          changeActive={this.changeActive}
        />
      </div>
    )
  }
}