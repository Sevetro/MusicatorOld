import React from 'react';
import DrumSampleSpan from './DrumSampleSpan';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../../utils/items';

export default function DrsumSample({ id, note, playNote }) {
  const [, dragRef] = useDrag({
    item: {
      type: ItemTypes.DRUMSAMPLE,
      note: note,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <DrumSampleSpan
      ref={dragRef}
      onClick={() => playNote(note)}
      children={note}
    />
  );
}
