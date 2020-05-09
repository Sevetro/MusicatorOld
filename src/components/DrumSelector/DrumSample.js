import React from 'react';
import DrumSampleBtn from './DrumSampleBtn';
import Tone from 'tone';

export default function DrumSample({ id, note }) {
  const synth = new Tone.Synth().toMaster();

  const playNote = () => {
    synth.triggerAttackRelease(note, '8n');
  };

  return <DrumSampleBtn onClick={playNote}>{id}</DrumSampleBtn>;
}
