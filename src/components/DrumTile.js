import React, { Component } from 'react'

export default class DrumTile extends Component {
    constructor(props) {
        super(props)
        this.state = {
          nextDrumTileId: this.props.nextDrumTileId            
        }
    }
    
    render() {
        console.log("Hejka tu DrumTile render, moje id: " + this.props.id + ", a nextDrumTileId to: " + this.props.nextDrumTileId)
        return (
            <button style={{ backgroundColor: this.state.nextDrumTileId === this.props.id ? "red" : "white" }}>{this.props.id}</button>
        )
    }
}