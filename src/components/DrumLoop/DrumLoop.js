import React, { useContext } from 'react';
import DrumTile from './DrumTile';
import { DrumLoopContext } from '../DrumLoopContext';
import DrumLoopDiv from './DrumLoopDiv';
import Tone from 'tone';

const synth = new Tone.Synth().toMaster();

export default function DrumLoop() {
  const { updateDrumLoopContext, activeDrumTileId, drumTileCount } = useContext(
    DrumLoopContext
  );

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

  const renderTile = (id) => (
    <DrumTile
      id={id}
      key={id}
      isActive={id === activeDrumTileId}
      initNote={`${notesArray[id % 12]}${((id / 12) | 0) + myOctave}`}
      playNote={playNote}
    />
  );

  const playNote = (note) => {
    if (note) synth.triggerAttackRelease(note, '8n');
  };

  const drumTiles = new Array(drumTileCount)
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
