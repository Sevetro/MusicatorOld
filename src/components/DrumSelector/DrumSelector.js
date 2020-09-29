import React from 'react';
import DrumSelectorDiv from './DrumSelectorDiv';
import DrumSample from './DrumSample';
import Tone from 'tone';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../../utils/items';

const synth = new Tone.Synth().toMaster();

export default function DrumSelector() {
  const [{ isOver }, dropRef] = useDrop({
    accept: [ItemTypes.DRUMTILE],

    drop: (item, monitor) => {
      item.setNote();
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const sampleCount = 24;
  const initOctave = 3;
  const notesArray = [
    'C',
    'C#',
    'D',
    'D#',
    'E',
    'F',
    'F#',
    'G',
    'G#',
    'A',
    'A#',
    'B',
  ];

  const playNote = (note) => {
    synth.triggerAttackRelease(note, '8n');
  };

  const renderSample = (id) => (
    <DrumSample
      id={id}
      key={id}
      note={`${notesArray[id % 12]}${((id / 12) | 0) + initOctave}`}
      playNote={playNote}
    />
  );

  let drumSamples = new Array(sampleCount)
    .fill(sampleCount)
    .map((tile, id) => renderSample(id));

  return (
    <DrumSelectorDiv ref={dropRef} isOver={isOver} children={drumSamples} />
  );
}
