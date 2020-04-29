import React, { Component } from 'react'
import './App.css'
import Metronome from './components/Metronome'


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      bpmNumber: 100,
      isActive: false
    }

  }

  //czy metody powinny być tu
  changeBpmNumber = (btnValue, toggleMetronome) => {
    this.setState(prevState => { return { bpmNumber: prevState.bpmNumber + btnValue, isActive: prevState.isActive } }, toggleMetronome)
  }


  render() {
    //czy tutaj
    const changeActive = (toggleMetronome) => {
      this.setState(prevState => { return { bpmNumber: prevState.bpmNumber, isActive: !prevState.isActive } }, toggleMetronome)
    }

    return (
      <div className="App">

        <Metronome
          bpmNumber={this.state.bpmNumber}
          isActive={this.state.isActive}
          changeBpmNumber={this.changeBpmNumber}
          changeActive={changeActive}
        />
      </div>
    )
  }
}