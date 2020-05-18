import React from 'react';
import DrumSelectorDiv from './DrumSelectorDiv';
import DrumSample from './DrumSample';
import Tone from 'tone';

const synth = new Tone.Synth().toMaster();

export default function DrumSelector() {
  const sampleCount = 24;
  const myOctave = 3;
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
      note={`${notesArray[id % 12]}${((id / 12) | 0) + myOctave}`}
      playNote={playNote}
    />
  );

  let drumSamples = new Array(sampleCount)
    .fill(sampleCount)
    .map((tile, id) => renderSample(id));

  return <DrumSelectorDiv>{drumSamples}</DrumSelectorDiv>;
}
