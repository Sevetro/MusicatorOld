import React from 'react'
import DrumTile from "./DrumTile";

export default function DrumLoop({tilesCount, addTile, removeTile, activeTileId}) {
    const renderTiles = React.useMemo(() => new Array(tilesCount).fill(tilesCount).map((tile, index) => <DrumTile
            isActive={index === activeTileId} id={index} key={index}/>)
        , [tilesCount, activeTileId]);

    return (
        <div className="DrumLoop">
            <div>
                <button onClick={removeTile}>-</button>
                <button onClick={addTile}>+</button>
            </div>
            <div>{renderTiles}</div>
        </div>
    );
}
