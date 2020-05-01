import React from 'react'

export default function DrumLoop(props) {
    return (
        <div className="DrumLoop" >

            <div>
                <button onClick={props.removeTile}>-</button>
                <button onClick={props.addTile}>+</button>
            </div>

            <div>{props.drumTileArray}</div>

        </div>
    )
}