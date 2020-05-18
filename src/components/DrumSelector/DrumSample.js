import React from 'react';
import DrumSampleSpan from './DrumSampleSpan';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../../utils/items';

export default function DrumSample({ id, note, playNote }) {
  const [{ isDragging }, dragRef] = useDrag({
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
