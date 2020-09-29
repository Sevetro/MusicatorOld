import React, { useContext, useState, useRef } from 'react';
import DrumTileSpan from './DrumTileSpan';
import { DrumLoopContext } from '../DrumLoopContext';
import { useDrop, useDrag } from 'react-dnd';
import { ItemTypes } from '../../utils/items';

export default function DrumTile({ isActive, id, initNote, playNote }) {
  const { metronomeTicks } = useContext(DrumLoopContext);
  const [hookDrumTileId, setHookDrumTileId] = useState(metronomeTicks);
  const [note, setNote] = useState(initNote);
  const ref = useRef(null);

  const [{ isOver }, dropRef] = useDrop({
    accept: [ItemTypes.DRUMSAMPLE, ItemTypes.DRUMTILE],
    drop: (item, monitor) => {
      if (item.type === ItemTypes.DRUMTILE && item.id !== id) {
        setNote(item.note);
        item.setNote(note);
      }
      if (item.type === ItemTypes.DRUMSAMPLE) setNote(item.note);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const [, dragRef] = useDrag({
    item: {
      type: ItemTypes.DRUMTILE,
      note: note,
      setNote: setNote,
      id: id,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  if (metronomeTicks !== hookDrumTileId && isActive) playNote(note);
  if (metronomeTicks !== hookDrumTileId) setHookDrumTileId(metronomeTicks);

  dropRef(ref);
  if (note) dragRef(ref);

  return (
    <DrumTileSpan
      draggable={!!note}
      isOver={isOver}
      ref={ref}
      children={note ? note : id}
      isActive={isActive}
      isAssigned={!!note}
      onClick={() => playNote(note)}
    />
  );
}
