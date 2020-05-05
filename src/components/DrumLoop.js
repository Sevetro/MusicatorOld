import React, { useContext } from 'react';
import DrumTile from './DrumTile';
import { DrumLoopContext } from './DrumLoopContext';

export default function DrumLoop() {
  const { tileCount, activeTileId, setTileCount } = useContext(DrumLoopContext);

  const renderTile = (id) => (
    <DrumTile id={id} key={id} isActive={id === activeTileId} />
  );

  let tilesArray = new Array(tileCount)
    .fill(tileCount)
    .map((tile, id) => renderTile(id));

  const addTile = () => {
    tileCount < 48 && setTileCount(tileCount + 1);
  };

  const removeTile = () => {
    tileCount > 1 && setTileCount(tileCount - 1);
  };

  return (
    <div className="DrumLoop">
      <div>
        <button onClick={removeTile}>-</button>
        <button onClick={addTile}>+</button>
      </div>

      <div>{tilesArray}</div>
    </div>
  );
}
