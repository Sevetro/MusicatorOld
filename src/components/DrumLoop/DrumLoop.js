import React, { useContext } from 'react';
import DrumTile from './DrumTile/DrumTile';
import { DrumLoopContext } from '../DrumLoopContext';
import DrumLoopDiv from './DrumLoopDiv';

export default function DrumLoop() {
  const { updateDrumLoopContext, activeTileId, tileCount } = useContext(
    DrumLoopContext,
  );

  const renderTile = (id) => (
    <DrumTile id={id} key={id} isActive={id === activeTileId} />
  );

  let drumTiles = new Array(tileCount)
    .fill(tileCount)
    .map((tile, id) => renderTile(id));

  const addTile = () => {
    tileCount < 48 && updateDrumLoopContext({ tileCount: tileCount + 1 });
  };

  const removeTile = () => {
    tileCount > 1 && updateDrumLoopContext({ tileCount: tileCount - 1 });
  };

  return (
    <DrumLoopDiv>
      <div>
        <button onClick={removeTile}>-</button>
        <button onClick={addTile}>+</button>
      </div>

      <div>{drumTiles}</div>
    </DrumLoopDiv>
  );
}
