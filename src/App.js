import React, { Component } from 'react'
import './App.css'
import Metronome from './components/Metronome'
import DrumLoop from './components/DrumLoop'


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      bpmNumber: 60,
      isActive: false,
      metronomeLedColor: "white",
      nextDrumTileId: 1
    }
  }


  changeMetronomeState = (btnValue, newActive, toggleMetronome) => {
    this.setState(prevState => {
      return {
        bpmNumber: prevState.bpmNumber + btnValue,
        isActive: newActive
      }
    }, toggleMetronome)
  }


  flashMetronomeLed = () => {
    this.setState({ metronomeLedColor: "blue" }, () => setTimeout(() => {
      this.setState({ metronomeLedColor: "white" })
    }, 100))

    this.flashDrumTile()
  }


  flashDrumTile = () => {

    console.log("nextDrumTileId before setState : " + this.state.nextDrumTileId)
    this.setState(prevState => {
      return { nextDrumTileId: prevState.nextDrumTileId + 1 }
    },
      () => console.log("nextDrumTileId after setState : " + this.state.nextDrumTileId))
  }





  //tu opcja bez prevState, która lepsza? Co za różnica? Podobno ta poniższa czasem nie zadziała. W jakich przypadkach?

  // changeMetronomeState = (btnValue, newActive, toggleMetronome) => {
  //   this.setState( { bpmNumber: this.state.bpmNumber + btnValue, isActive: newActive  }, toggleMetronome)
  // }


  render() {
    //metody powinny być tu czy nad metodą render


    return (
      <div className="App" >

        <Metronome
          bpmNumber={this.state.bpmNumber}
          isActive={this.state.isActive}
          metronomeLedColor={this.state.metronomeLedColor}
          changeMetronomeState={this.changeMetronomeState}
          flashMetronomeLed={this.flashMetronomeLed}
        />

        <DrumLoop
          nextDrumTileId={this.state.nextDrumTileId}
        />
      </div>
    )
  }
}