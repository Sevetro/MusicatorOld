import React, { Component } from 'react'
import './App.css'
import Metronome from './components/Metronome'
import DrumLoop from './components/DrumLoop'
import DrumTile from './components/DrumTile'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      bpmNumber: 200,
      isActive: false,
      metronomeLedColor: "white",
      nextDrumTileId: -1,
      drumTileArray: [],
      initDrumTileCount: 10
    }
  }


  componentDidMount() {
    this.createDrumTileArray(this.state.initDrumTileCount)
  }


  createDrumTileArray = (tileCount) => {
    let newDrumTileArray = []
    for (let i = 0; i < tileCount; i++) {
      newDrumTileArray.push(this.renderTile(i))
    }
    this.setState({ drumTileArray: newDrumTileArray })
  }


  renderTile = (id) => (<DrumTile id={id} key={id} isActive={id === this.state.nextDrumTileId} />)


  changeMetronomeState = (btnValue, newActive, toggleMetronome) => {
    this.setState(prevState => ({ bpmNumber: prevState.bpmNumber + btnValue, isActive: newActive }), toggleMetronome)
  }


  flashMetronomeLed = () => {
    this.setState({ metronomeLedColor: "blue" }, () => setTimeout(() => {
      this.setState({ metronomeLedColor: "white" })
    }, 20))
    this.changeCurrentDrumTile()
  }


  changeCurrentDrumTile = () => {
    this.setState(prevState => ({
      nextDrumTileId: prevState.nextDrumTileId > prevState.drumTileArray.length - 2 ? 0 : prevState.nextDrumTileId + 1
    }))
    this.createDrumTileArray(this.state.drumTileArray.length)
  }


  addTile = () => {
    this.setState(prevState => ({ drumTileArray: [...prevState.drumTileArray, this.renderTile(prevState.drumTileArray.length)] }))
  }
  removeTile = () => {
    this.state.drumTileArray.length > 1 && this.setState(prevState => ({ drumTileArray: prevState.drumTileArray.slice(0, -1) }))
  }


  render() {
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
          drumTileArray={this.state.drumTileArray}
          addTile={this.addTile}
          removeTile={this.removeTile}
        />
      </div>
    )
  }
}