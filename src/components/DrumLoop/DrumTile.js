import React, { useContext, useState } from 'react';
import DrumTileBtn from './DrumTileBtn';
import { DrumLoopContext } from '../DrumLoopContext';

export default function DrumTile({ isActive, id, note, playNote }) {
  const { activeDrumTileId } = useContext(DrumLoopContext);
  const [hookDrumTileId, setHookDrumTileId] = useState(activeDrumTileId);

  if (activeDrumTileId !== hookDrumTileId && isActive) playNote(note);

  if (activeDrumTileId !== hookDrumTileId) setHookDrumTileId(activeDrumTileId);

  return <DrumTileBtn isActive={isActive}>{id}</DrumTileBtn>;
}
