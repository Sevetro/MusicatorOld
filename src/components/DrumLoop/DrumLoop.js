import React, { useContext, useState, useEffect } from 'react';
import DrumTile from './DrumTile';
import { DrumLoopContext } from '../DrumLoopContext';
import DrumLoopDiv from './DrumLoopDiv';
import Tone from 'tone';

const synth = new Tone.Synth().toMaster();

export default function DrumLoop() {
  const { updateDrumLoopContext, loops, metronomeTicks } = useContext(
    DrumLoopContext
  );
  const [isInit, setIsInit] = useState(true);
  const [activeTileId, setActiveTileId] = useState(metronomeTicks);

  useEffect(() => {
    setActiveTileId(activeTileId + 1);
  }, [metronomeTicks]);

  const playNote = (note) => {
    if (note) synth.triggerAttackRelease(note, '8n');
  };

  const renderTile = (id) => (
    <DrumTile
      id={id}
      key={id}
      isActive={id === activeTileId}
      initNote={isInit && loops[0].notes[id]}
      playNote={playNote}
    />
  );

  const drumTiles = new Array(loops[0].notes.length)
    .fill(loops[0].notes.length)
    .map((tile, id) => renderTile(id));

  useEffect(() => {
    setIsInit(false);
  }, []);

  const addTile = (oldArray) => {
    if (oldArray.length < 48) {
      const newLoops = loops;
      newLoops[0].notes.push('');
      updateDrumLoopContext({ loops: newLoops });
    }
  };

  const removeTile = (oldArray) => {
    if (oldArray.length > 1) {
      const newLoops = loops;
      newLoops[0].notes.pop();
      updateDrumLoopContext({ loops: newLoops });
    }
  };

  // const saveLoop = () =>{
  //   notes=new Array(drumTileCount)
  // }

  return (
    <DrumLoopDiv>
      <div>
        <button onClick={() => removeTile(loops[0].notes)}>-</button>
        <button onClick={() => addTile(loops[0].notes)}>+</button>
      </div>

      <div>{drumTiles}</div>
    </DrumLoopDiv>
  );
}
