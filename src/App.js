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
      nextDrumTileId: -1,
      drumTileArray: [],
      tilesCount: 4,
    };
  }

  changeMetronomeState = (btnValue, newActive, toggleMetronome) => {
    this.setState(prevState => ({ bpmNumber: prevState.bpmNumber + btnValue, isActive: newActive }), toggleMetronome)
  };

  flashMetronomeLed = () => {
    const { bpmNumber } = this.state;
    this.setState({ metronomeLedColor: "blue" }, () => setTimeout(() => {
      this.setState({ metronomeLedColor: "white" })
    }, bpmNumber))
    this.changeCurrentDrumTile()
  };

  changeCurrentDrumTile = () => {
    this.setState(prevState => ({
      nextDrumTileId: prevState.nextDrumTileId > prevState.tilesCount - 2 ? 0 : prevState.nextDrumTileId + 1
    }))
  };

  removeTile = () => {
    this.setState(prevState => ({ tilesCount: prevState.tilesCount - 1}));
  };

  addTile = () => {
    this.setState(prevState => ({ tilesCount: prevState.tilesCount + 1}));
  }
  render() {
    const {isActive, bpmNumber, nextDrumTileId, metronomeLedColor, tilesCount} = this.state;

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
          tilesCount={tilesCount}
          addTile={this.addTile}
          removeTile={this.removeTile}
          activeTileId={nextDrumTileId}
        />
      </div>
    )
  }
}
