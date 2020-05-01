import React from 'react'
import DrumTile from './DrumTile'

export default function DrumLoop({ removeTile, addTile, activeTileId, tilesCount }) {

    const renderTile = (id) => (<DrumTile id={id} key={id} isActive={id === activeTileId} />)

    let tilesArray = new Array(tilesCount).fill(tilesCount).map((tile, id) => renderTile(id))

    return (
        <div className="DrumLoop" >

            <div>
                <button onClick={removeTile}>-</button>
                <button onClick={addTile}>+</button>
            </div>

            <div>{tilesArray}</div>

        </div>
    )
}