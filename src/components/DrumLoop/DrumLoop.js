import React, { useContext } from 'react';
import DrumTile from './DrumTile/DrumTile';
import { DrumLoopContext } from '../DrumLoopContext';
import DrumLoopDiv from './DrumLoopDiv';

export default function DrumLoop() {
  const { updateDrumLoopContext, activeDrumTileId, drumTileCount } = useContext(
    DrumLoopContext
  );

  const renderTile = (id) => (
    <DrumTile id={id} key={id} isActive={id === activeDrumTileId} />
  );

  let drumTiles = new Array(drumTileCount)
    .fill(drumTileCount)
    .map((tile, id) => renderTile(id));

  const addTile = (currentDrumTileCount) => {
    currentDrumTileCount < 48 &&
      updateDrumLoopContext({ drumTileCount: currentDrumTileCount + 1 });
  };

  const removeTile = (currentDrumTileCount) => {
    currentDrumTileCount > 1 &&
      updateDrumLoopContext({ drumTileCount: currentDrumTileCount - 1 });
  };

  //console.log('activeDrumTileId przed returnem DrumLoopa: '+activeDrumTileId)

  return (
    <DrumLoopDiv>
      <div>
        <button onClick={() => removeTile(drumTileCount)}>-</button>
        <button onClick={() => addTile(drumTileCount)}>+</button>
      </div>

      <div>{drumTiles}</div>
    </DrumLoopDiv>
  );
}
