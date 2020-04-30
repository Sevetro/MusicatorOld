import React, { Component } from 'react'
import DrumTile from './DrumTile';

export default class DrumLoop extends Component {
    constructor(props) {
        super(props)
        this.state = {
            drumTileArray: [
                <DrumTile id={1} key={1} nextDrumTileId={this.props.nextDrumTileId} />,  
                <DrumTile id={2} key={2} nextDrumTileId={this.props.nextDrumTileId} />  

            ]
        }
    }


    

    addTile = () => {
        this.setState(prevState => {
            return {
                drumTileArray: [
                    ...this.state.drumTileArray,
                    <DrumTile
                        key={prevState.drumTileArray.length + 1}
                        id={prevState.drumTileArray.length + 1}
                        nextDrumTileId={this.props.nextDrumTileId}
                    />
                ]
            }
        })
    }

    removeTile = () => {
        if (this.state.drumTileArray.length > 1)
            this.setState(prevState => { return { drumTileArray: prevState.drumTileArray.slice(0, -1) } })
    }


    render() {
       
        return (
            <div className="DrumLoop">
                <div>
                    <button onClick={this.removeTile}>-</button>
                    <button onClick={this.addTile}>+</button>
                </div>

                {this.state.drumTileArray}
            </div>
        )

    }
}