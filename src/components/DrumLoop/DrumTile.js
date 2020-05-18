import React, { useContext, useState } from 'react';
import DrumTileSpan from './DrumTileSpan';
import { DrumLoopContext } from '../DrumLoopContext';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../../utils/items';
// import { useDrag } from 'react-dnd';

export default function DrumTile({ isActive, id, initNote, playNote }) {
  const { activeDrumTileId } = useContext(DrumLoopContext);
  const [hookDrumTileId, setHookDrumTileId] = useState(activeDrumTileId);
  const [note, setNote] = useState();

  const [{ isOver }, dropRef] = useDrop({
    accept: ItemTypes.DRUMSAMPLE,
    drop: (item, monitor) => {
      setNote(item.note);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  if (activeDrumTileId !== hookDrumTileId && isActive && note) playNote(note);

  if (activeDrumTileId !== hookDrumTileId) setHookDrumTileId(activeDrumTileId);

  return (
    <DrumTileSpan
      isOver={isOver}
      ref={dropRef}
      children={note ? note : id}
      isActive={isActive}
      isAssigned={!!note}
      onClick={() => playNote(note)}
    />
  );
}
