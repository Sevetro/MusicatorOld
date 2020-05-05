import React, { Component } from 'react'
import './App.css'
import Metronome from './components/Metronome'
import DrumLoop from './components/DrumLoop'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      bpmNumber: 5060,
      isActive: false,
      metronomeLedColor: "white",
      activeTileId: -1,
      tilesCount: 126
    }
  }


  changeMetronomeState = (btnValue, newActive, toggleMetronome) => {
    this.setState(prevState => ({ bpmNumber: prevState.bpmNumber + btnValue, isActive: newActive }), toggleMetronome)
  }

  flashMetronomeLed = () => {
    this.setState({ metronomeLedColor: "blue" }, () => setTimeout(() => {
      this.setState({ metronomeLedColor: "white" })
    }, 50))
    this.changeCurrentDrumTile()
  }


  changeCurrentDrumTile = () => {
    this.setState(prevState => ({ activeTileId: prevState.activeTileId > prevState.tilesCount - 2 ? 0 : prevState.activeTileId + 1 }))
  }

  addTile = () => {
    this.setState(prevState => ({ tilesCount: prevState.tilesCount + 1 }))
  }

  removeTile = () => {
    this.state.tilesCount > 1 && this.setState(prevState => ({ tilesCount: prevState.tilesCount - 1 }))
  }


  render() {
    const { isActive, bpmNumber, metronomeLedColor, tilesCount, drumTileArray, activeTileId } = this.state

    return (
      <div className="App" >

        <Metronome
          bpmNumber={bpmNumber}
          isActive={isActive}
          metronomeLedColor={metronomeLedColor}
          changeMetronomeState={this.changeMetronomeState}
          flashMetronomeLed={this.flashMetronomeLed}
        />

        <DrumLoop
          drumTileArray={drumTileArray}
          tilesCount={tilesCount}
          activeTileId={activeTileId}
          addTile={this.addTile}
          removeTile={this.removeTile}
        />

      </div>
    )
  }
}